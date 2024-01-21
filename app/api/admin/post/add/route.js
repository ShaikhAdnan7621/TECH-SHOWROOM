import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextResponse } from "next/server";
import users from "/app/models/usermodles";
import posts from "@/app/models/postsmodles";
const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();

export async function POST(req, resp) {
    try {
        const reqBody = await req.json();
        const userId = await getdatafromtoken(req);
        const user = await users.findOne({ _id: userId });
        if (!user) {
            return NextResponse.json({ message: "user is not founded" });
        }
        if (!user.isAdmin) {
            return NextResponse.json({ message: "user is not Admin" });
        }
        const newpost = new posts(reqBody);
        newpost.user = user;
        const savedpost = await newpost.save();
        return NextResponse.json({ message: "Posted Sucessfully", savedpost });
    } catch (err) {
        console.log(err);
    }
}
