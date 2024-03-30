import { Connect } from "@/app/dbconfig/dbconfig";
import users from "@/app/models/usermodles";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { z } from "zod";

Connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        // eslint-disable-next-line
        const userSchema = z.object({
            username: z.string().min(6),
            email: z.string().email(),
            password: z
                .string()
                .min(8)
                .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])/),
        });

        const result = userSchema.safeParse(reqBody);
        if (!result.success) {
            return NextResponse.json(
                { error: result.error.message },
                { status: 400 },
            );
        }

        const { username, email, password } = result.data;

        const user = await users.findOne({ email: email });
        if (user) {
            return NextResponse.json(
                { error: `User already exists   ${user.username}` },
                { status: 400 },
            );
        }
        const salt = bcryptjs.genSaltSync(10);
        const hashpassword = bcryptjs.hashSync(password, salt);

        const nweuser = new users({
            username,
            email,
            password: hashpassword,
        });
        const saveduser = await nweuser.save();

        return NextResponse.json({
            message: "User crated successfully",
            sucess: true,
            saveduser,
        });
    } catch ({ error: any }) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
