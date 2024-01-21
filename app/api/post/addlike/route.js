import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextResponse } from "next/server";
import users from "/app/models/usermodles";
import posts from "@/app/models/postsmodles";
const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, res) {
    try {
        const reqbody = await req.json();
        if (!req.cookies.get("token")) {
            return NextResponse.json({
                message: "user not logged in",
                redirect: true,
                url: "/Login",
            });
        }
        const userId = await getdatafromtoken(req);
        const user = await users.findOne({ _id: userId }).select("-password");
        if (!user) {
            return NextResponse.json({
                message: "user not founded",
                data: user,
            });
        }
        const post = await posts.findOne({ _id: reqbody.id });
        if (!post) {
            return NextResponse.json({
                message: "post not founded",
                data: post,
            });
        }
        if (post.likes.includes(user._id)) {
            post.likes = post.likes.filter((id) => id != user._id);
            const updatedpost = await post.save();
            return NextResponse.json({
                message: "already liked",
                data: updatedpost,
            });
        }
        post.likes.push(user._id);
        const updatedpost = await post.save();
        return NextResponse.json({
            message: "Liked successfully",
            data: updatedpost,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
