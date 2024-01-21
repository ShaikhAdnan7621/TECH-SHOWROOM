import { Connect } from "@/app/dbconfig/dbconfig";
import users from "@/app/models/usermodles";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import toast from "react-hot-toast";

Connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { username, email, password } = reqBody;
        const user = await users.findOne({ email: email });
        if (user) {
            toast.error("User already exists");
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
