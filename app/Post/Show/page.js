"use client";
import Loading from "@/components/Loading";
import BackButton from "@/components/buttons/BackButton";
import Show from "@/components/post/Show";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page(obj) {
    const { searchParams } = obj;
    const id = searchParams.id;
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(true);
    const [postfound, setpostfound] = useState(false);
    useEffect(() => {
        getPostData(id);
    });
    const getPostData = async (id) => {
        setloading(true);
        const responce = await axios.post("/api/post/findbyid", { id });
        setpostfound(responce.data.found);
        setdata(responce.data.post);
        setloading(false);
    };
    return (
        <div className="mb-20 dark:text-white">
            <div className="flex dark:text-white ">
                <BackButton text={"Go Back"} />
            </div>
            {loading ? (
                <Loading text={"Login"} size={"5"} />
            ) : (
                <div>
                    {postfound ? (
                        <Show data={data} />
                    ) : (
                        <p className="text-center text-xl">Post Not Found</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Page;
