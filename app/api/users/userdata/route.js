import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import users from "/app/models/usermodles";

const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function GET(req) {
    try {
        const userId = await getdatafromtoken(req);
        const user = await users.findOne({ _id: userId }).select("-password");
        return NextResponse.json({ message: "user founded", data: user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
