import { Connect } from "@/app/dbconfig/dbconfig";
import users from "@/app/models/usermodles";
import { NextResponse } from "next/server";

Connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { email, turn } = reqBody;
        const update = await users.updateOne(
            { email: email },
            { $set: { isAdmin: turn } },
        );
        const saveuser = await users
            .findOne({ email: email })
            .select("-password");

        return NextResponse.json({
            message: "User crated successfully",
            saveuser,
            update,
        });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
