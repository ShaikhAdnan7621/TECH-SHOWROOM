import { NextResponse } from "next/server";
import posts from "@/app/models/postsmodles";
const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, res) {
    try {
        const reqbody = await req.json();
        const { tags, count } = reqbody;
        let date = new Date();
        date = date.toISOString();
        // if tage is array
        if (Array.isArray(tags)) {
            if (tags.length > 0 && count) {
                const suggestion_post = await posts.aggregate([
                    {
                        $addFields: {
                            matchedTags: { $setIntersection: [tags, "$tags"] },
                        },
                    },
                    { $match: { matchedTags: { $ne: [] } } },
                    { $addFields: { tagCount: { $size: "$matchedTags" } } },
                    { $sort: { tagCount: -1 } },
                    { $limit: count },
                ]);

                if (suggestion_post.length > 0) {
                    return NextResponse.json(
                        {
                            message: "success",
                            status: true,
                            suggestion_post,
                        },
                        { status: 200 },
                    );
                }
            }
        }

        if (tags === "" && count) {
            const suggestion_post = await posts
                .find()
                .sort({ createdAt: -1 })
                .limit(count);

            if (suggestion_post.length > 0) {
                return NextResponse.json(
                    {
                        message: "success",
                        status: true,
                        suggestion_post,
                    },
                    { status: 200 },
                );
            }
        }

        return NextResponse.json(
            { message: "not found", status: false },
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
