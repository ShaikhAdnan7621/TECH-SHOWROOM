import { Connect } from "@/app/dbconfig/dbconfig";
import posts from "@/app/models/postsmodles";
import BackButton from "@/components/buttons/BackButton";
import Postframe from "@/components/post/Postframe";
import Searchposts from "@/components/post/Searchposts";
import { data } from "autoprefixer";

import React from "react";
Connect();

async function getposts(searchParams) {
    let date = new Date();
    date = date.toISOString();
    if (searchParams.fild) {
        return await posts.find({
            title: { $regex: searchParams.fild },
            publishat: { $lte: date },
        });
    } else {
        return await posts.find({ publishat: { $lte: date } },);
    }
}
async function Page(obj) {
    const { searchParams } = obj;
    var result = await getposts(searchParams);
    return (
        <div className="dark:text-white">
            <div className="flex justify-between mb-3">
                <BackButton text={"Back"} />
                <Searchposts />
            </div>
            <hr />
            <div className="flex flex-wrap gap-3 mt-5 justify-center">
                {result.map((post, index) => (
                    <Postframe data={post} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Page;
