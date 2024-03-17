"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Postframe from "./Postframe";

export default function Post_suggestion(props) {
    const [responce, setResponce] = useState({});
    const { tags, count, id } = props;

    const getpostsuggestion = async (tags) => {
        const response = await axios.post("/api/post/suggest/", {
            tags,
            count,
        });
        setResponce(response.data);
    };
    useEffect(() => {
        getpostsuggestion(tags);
    }, [tags]);

    return (
        <div className="">
            {responce.status && (
                <>
                    <div>
                        <h1 className=" text-2xl font-bold mt-5 mb-8 ">
                            Post Suggestions
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-5 justify-center">
                        {responce.suggestion_post.map((post, index) => {
                            if (post._id === id) {
                                return null;
                            }
                            const data = {
                                id: post._id,
                                image: post.image,
                                title: post.title,
                                description: post.description,
                            };
                            return (
                                <>
                                    <div key={index}>
                                        <Postframe data={data} key={index} />
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </>
            )}
            <div>
                {responce.status && <hr className="my-10 dark:text-white" />}
            </div>
        </div>
    );
}
