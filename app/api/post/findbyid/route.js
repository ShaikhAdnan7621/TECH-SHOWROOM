import { NextResponse } from "next/server";
import posts from "@/app/models/postsmodles";
const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, res) {
    try {
        const reqbody = await req.json();
        const post = await posts.findById({ _id: reqbody.id });
        return NextResponse.json(
            { message: "post found", post: post, found: true },
            { status: 200 },
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "post not found", found: false },
            { status: 404 },
        );
    }
}
