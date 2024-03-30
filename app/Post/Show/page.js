"use client";
import Loading from "@/components/Loading";
import BackButton from "@/components/buttons/BackButton";
import Post_suggestion from "@/components/post/Post_suggestion";
import Show from "@/components/post/Show";
import Product_suggestions from "@/components/product/Product_suggestions";
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
    }, [id]);
    const getPostData = async (id) => {
        setloading(true);
        const responce = await axios.post("/api/post/findbyid", { id });
        setpostfound(responce.data.found);
        setdata(responce.data.post);
        setloading(false);
    };
    return (
        <div className="mb-20 mt-10 dark:text-white">
            <div className="flex dark:text-white ">
                <BackButton text={"Back"} />
            </div>
            {loading && (
                <div className="my-5">
                    <Loading text={"Please wait..."} size={"5"} />
                </div>
            )}
            {!loading && (
                <div>
                    {postfound ? (
                        <>
                            <Show data={data} />
                            <Post_suggestion
                                tags={data.tags}
                                count={6}
                                id={id}
                            />
                        </>
                    ) : (
                        <p className="text-center text-xl">Post Not Found</p>
                    )}
                </div>
            )}
            <Product_suggestions brand={""} count={6} id={""} />
        </div>
    );
}

export default Page;
