import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextResponse } from "next/server";
import users from "/app/models/usermodles";

const { Connect } = require("@/app/dbconfig/dbconfig");
Connect();
export async function GET(req) {
    try {
        const userId = await getdatafromtoken(req);
        const user = await users.findOne({ _id: userId }).select("-password");
        if (user.isAdmin) {
            return NextResponse.json({ message: "user founded", data: user });
        }

        return NextResponse.json({ message: "is not user" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
