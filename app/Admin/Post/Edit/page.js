"use client";
import BackButton from "@/components/buttons/BackButton";
import Mbutton from "@/components/buttons/Mbutton";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page(obj) {
    const { searchParams } = obj;
    const id = searchParams.id;
    const [data, setdata] = useState({});
    const [postfound, setpostfound] = useState(false);
    const [imageurl, setimageurl] = useState("");
    const [newtag, setnewtag] = useState("");
    useEffect(() => {
        getPostData(id);
    }, [id]);
    const getPostData = async (id) => {
        const responce = await axios.post("/api/post/findbyid", { id });
        setpostfound(responce.data.found);
        setdata(responce.data.post);
    };

    const updatePost = async () => {
        try {
            const fildempty =
                data.title === "" ||
                data.description === "" ||
                data.image.length === 0 ||
                data.url === "" ||
                data.tags.length === 0;
            if (fildempty) {
                toast.error("Please fill all the fields");
                return;
            }
            const responce = await axios.post("/api/admin/post/update", data);

            if (responce.data.success) {
                toast.success(responce.data.message);
                setdata(responce.data.post);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="pt-10 dark:text-white">
            <div className="flex mb-3 dark:text-white ">
                <BackButton text={"Back"} />
            </div>
            {postfound ? (
                <div className="border-x-2 rounded-lg p-5 dark:border-gray-300 border-gray-900 shadow-xl ">
                    <div className="h-12 py-1">
                        <input
                            type="text"
                            placeholder="*Title must be required"
                            className="w-full bg-transparent h-10 rounded-lg focus:outline-none px-2 border-y-2 dark:border-gray-300 border-gray-900 placeholder:text-red-500 text-sm "
                            value={data.title}
                            onChange={(e) =>
                                setdata({ ...data, title: e.target.value })
                            }
                        />
                    </div>
                    <div className=" mt-5">
                        <textarea
                            className="w-full h-72 no-scrollbar bg-transparent rounded-lg focus:outline-none px-2 border-y-2 dark:border-gray-300 border-gray-900 placeholder:text-red-500 text-sm"
                            name="description"
                            id="description"
                            placeholder="*Details must be required"
                            value={data.description}
                            onChange={(e) => {
                                setdata({
                                    ...data,
                                    description: e.target.value,
                                });
                            }}
                        ></textarea>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-4    ">
                        {data.image.length > 0 ? (
                            data.image.map((img, index) => (
                                <div
                                    key={index}
                                    className="rounded-md relative"
                                >
                                    <div className="relative h-64 w-64">
                                        <Image
                                            src={img.url}
                                            alt="Image"
                                            fill={true}
                                            className="w-64 h-64 rounded-lg object-cover dark:border-white border bg-white"
                                        />
                                    </div>
                                    <button
                                        onClick={() => {
                                            setdata({
                                                ...data,
                                                image: data.image.filter(
                                                    (i, ind) => ind !== index,
                                                ),
                                            });
                                        }}
                                        type="button"
                                        className="text-xl bg-white dark:text-black -top-3 -right-3 absolute  w-7 h-7  rounded-full"
                                    >
                                        ⓧ
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-red-500 text-sm">
                                *Atlest One Image is required
                            </p>
                        )}
                    </div>

                    <div className="w-full md:flex  mt-5">
                        <div className="w-full md:w-4/5">
                            <input
                                type="text"
                                placeholder="Add Image URL"
                                className="w-full bg-transparent border-y-2 h-10 rounded-lg focus:outline-none px-2 dark:border-gray-300 border-gray-900"
                                value={imageurl}
                                onChange={(e) => setimageurl(e.target.value)}
                                onKeyUp={(e) => {
                                    if (e.key === "Enter") {
                                        setdata({
                                            ...data,
                                            image: [
                                                ...data.image,
                                                { url: imageurl },
                                            ],
                                        });
                                        setimageurl("");
                                    }
                                }}
                            />
                        </div>
                        <div className="mx-auto mt-3 md:mt-0">
                            <button
                                className=" bg-transparent border-2 h-10 rounded-lg focus:outline-none px-2 dark:border-gray-300 border-gray-900 
                                disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed    
                                "
                                onClick={() => {
                                    setdata({
                                        ...data,
                                        image: [
                                            ...data.image,
                                            { url: imageurl },
                                        ],
                                    });
                                    setimageurl("");
                                }}
                                disabled={imageurl === ""}
                                type="button"
                            >
                                Add Image
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 ">
                        <div className=" border-y-2 gap-2 rounded-lg focus:outline-none px-2 flex flex-wrap p-2 dark:border-gray-300 border-gray-900">
                            {data.tags.length > 0 ? (
                                data.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className=" px-2 flex gap-2 rounded-full border bg-gray-500 bg-opacity-5  border-gray-300 dark:border-gray-800 py-0.5 "
                                    >
                                        <p className="text-lg ">{tag}</p>
                                        <button
                                            onClick={() =>
                                                setdata({
                                                    ...data,
                                                    tags: data.tags.filter(
                                                        (t) => t !== tag,
                                                    ),
                                                })
                                            }
                                            type="button"
                                            className="text-xl"
                                        >
                                            ⓧ
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className=" px-2 flex items-center gap-2 rounded-full border bg-gray-500 bg-opacity-5  border-gray-300 dark:border-gray-800 py-0.5 ">
                                    <p className="text-red-500 text-sm">
                                        *Atlest One Tag is required
                                    </p>
                                </div>
                            )}
                            <div className=" border-2 pl-3 pr-1 py-0.5 rounded-full flex items-center dark:border-gray-300 border-gray-900">
                                <input
                                    type="text"
                                    placeholder="Tags"
                                    className="text-lg bg-transparent focus:outline-none"
                                    value={newtag}
                                    onChange={(e) => {
                                        setnewtag(e.target.value);
                                        if (e.target.value.endsWith(",")) {
                                            var thistag = e.target.value.slice(
                                                0,
                                                -1,
                                            );
                                            thistag = thistag.trim();
                                            if (!data.tags.includes(thistag)) {
                                                setdata({
                                                    ...data,
                                                    tags: [
                                                        ...data.tags,
                                                        thistag,
                                                    ],
                                                });
                                                setnewtag("");
                                            }
                                        }
                                    }}
                                />
                                <button
                                    className="text-xl w-6 h-6 rounded-full border dark:border-gray-300 border-gray-900"
                                    onClick={() => {
                                        if (newtag.endsWith(",")) {
                                            var thistag = newtag.slice(0, -1);
                                        } else {
                                            var thistag = newtag;
                                        }
                                        thistag = thistag.trim();

                                        if (!data.tags.includes(thistag)) {
                                            setdata({
                                                ...data,
                                                tags: [...data.tags, thistag],
                                            });
                                        }
                                        setnewtag("");
                                    }}
                                    disabled={newtag === ""}
                                    type="button"
                                >
                                    ✓
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-right">
                        <Mbutton
                            text={"Update"}
                            type="submit"
                            onClick={updatePost}
                            className="w-full mt-5"
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Page;