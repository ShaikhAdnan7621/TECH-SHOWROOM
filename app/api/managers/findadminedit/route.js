import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextResponse } from "next/server";
import users from "/app/models/usermodles";

const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, resp) {
    try {
        const reqBody = await req.json();
        const { email } = reqBody;
        const user = await users.findOne({ email: email }).select("-password");

        if (!user) {
            return NextResponse.json({ message: "is not user" });
        }

        return NextResponse.json({ message: "user founded", data: user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
