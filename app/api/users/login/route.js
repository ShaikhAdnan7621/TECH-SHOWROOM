import { Connect } from "@/app/dbconfig/dbconfig";
import users from "@/app/models/usermodles";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";

Connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
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
        const token = await Jwt.sign(tokenData, process.env.TOKEN_SECRET, {
            expiresIn: "1d",
        });
        const responce = NextResponse.json({
            message: "Login succesful",
            success: true,
        });

        responce.cookies.set("token", token, {
            httpOnly: true,
        });

        if (user.isAdmin) {
            const admintokendata = {
                id: user._id,
            };
            const admintoken = await Jwt.sign(
                admintokendata,
                process.env.TOKEN_SECRET,
                { expiresIn: "1d" },
            );
            responce.cookies.set("admintoken", admintoken, {
                httpOnly: true,
            });
        }
        if (user.isManager) {
            const managertokendata = {
                id: user._id,
            };
            const managertoken = await Jwt.sign(
                managertokendata,
                process.env.TOKEN_SECRET,
                { expiresIn: "1d" },
            );
            responce.cookies.set("managertoken", managertoken, {
                httpOnly: true,
            });
        }

        return responce;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
