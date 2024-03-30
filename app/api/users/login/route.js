import { Connect } from "@/app/dbconfig/dbconfig";
import users from "@/app/models/usermodles";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import { z } from "zod";

Connect();

const generateToken = (data, secret, expiresIn) => {
    return Jwt.sign(data, secret, { expiresIn });
};

const setCookie = (response, name, token) => {
    response.cookies.set(name, token, { httpOnly: true });
};

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const userSchema = z.object({
            email: z.string().email(),
            password: z
                .string()
                .min(8)
                .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])/),
        });
        if (!userSchema.safeParse(reqBody).success) {
            return NextResponse.json(
                { error: "invalid data" },
                { status: 400 },
            );
        }

        const { email, password } = reqBody;
        const user = await users.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "usernot exist pleas login" },
                { status: 400 },
            );
        }
        const validpassword = await bcryptjs.compare(password, user.password);
        if (!validpassword) {
            return NextResponse.json({
                message: "wrong password",
                success: false,
            });
        }
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        const token = generateToken(tokenData, process.env.TOKEN_SECRET, "1d");
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        setCookie(response, "token", token);

        if (user.isAdmin) {
            const adminTokenData = { id: user._id };
            const adminToken = generateToken(
                adminTokenData,
                process.env.TOKEN_SECRET,
                "1d",
            );
            setCookie(response, "admintoken", adminToken);
        }
        if (user.isManager) {
            const managerTokenData = { id: user._id };
            const managerToken = generateToken(
                managerTokenData,
                process.env.TOKEN_SECRET,
                "1d",
            );
            setCookie(response, "managertoken", managerToken);
        }

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
