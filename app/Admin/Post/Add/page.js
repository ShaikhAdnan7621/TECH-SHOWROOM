"use client";
import Loading from "@/components/Loading";
import Mbutton from "@/components/buttons/Mbutton";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import BackButton from "@/components/buttons/BackButton";
import Image from "next/image";

function Page() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState([]);
    const [imageurl, setimageurl] = useState("");
    const [tags, settags] = useState([]);
    const [newtag, setnewtag] = useState("");
    const [uploadas, setUploadas] = useState("Published");
    const [dateerror, setdateerror] = useState(false);
    const [error, seterror] = useState(false);
    const [publishat, setpublishat] = useState("");
    const [loading, setloading] = useState(false);

    const uploadpost = async () => {
        setloading(true);
        if (
            title === "" ||
            description === "" ||
            image.length === 0 ||
            tags.length === 0 ||
            publishat === ""
        ) {
            seterror(true);
            toast.error("All fields are required");
            setloading(false);
            return;
        }
        const data = {
            title,
            description,
            image,
            tags,
            uploadas,
            publishat,
        };
        try {
            const res = await axios.post("/api/admin/post/add", data);
            toast.success(res.data.message);
            settitle("");
            setdescription("");
            setimage([]);
            setimageurl("");
            settags([]);
            setnewtag("");
            setUploadas("Published");
            setpublishat("");
            setdateerror(false);
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setloading(false);
        }
    };

    return (
        <div className=" dark:text-white">
            {
                //add backbutton component

                <div className="mt-5 flex">
                    <BackButton text={"Go Back"} />
                </div>
            }
            <div className="border-x-2 rounded-lg p-5 dark:border-gray-300 border-gray-900 shadow-xl ">
                <div className="h-12 py-1">
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full bg-transparent h-10 rounded-lg focus:outline-none px-2 border-y-2 dark:border-gray-300 border-gray-900"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                    />
                </div>
                {error && title === "" && (
                    <p className="text-red-500 text-sm">
                        All fields are required*
                    </p>
                )}
                <div className=" mt-5">
                    <textarea
                        className="w-full h-72 bg-transparent rounded-lg focus:outline-none px-2 border-y-2 dark:border-gray-300 border-gray-900"
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                    ></textarea>
                </div>
                {error && description === "" && (
                    <p className="text-red-500 text-sm">
                        All fields are required*
                    </p>
                )}
                <div className="mt-5 flex flex-wrap gap-4    ">
                    {image.length > 0
                        ? image.map((img, index) => (
                              <div key={index} className="rounded-md relative">
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
                                          setimage(
                                              image.filter(
                                                  (i, ind) => ind !== index,
                                              ),
                                          );
                                      }}
                                      type="button"
                                      className="text-xl bg-white dark:text-black -top-3 -right-3 absolute  w-7 h-7  rounded-full"
                                  >
                                      ⓧ
                                  </button>
                              </div>
                          ))
                        : ""}
                </div>
                <div className="w-full md:flex  mt-5">
                    <div className="w-full md:w-4/5">
                        <input
                            type="text"
                            placeholder="URL"
                            className="w-full bg-transparent border-y-2 h-10 rounded-lg focus:outline-none px-2 dark:border-gray-300 border-gray-900"
                            value={imageurl}
                            onChange={(e) => setimageurl(e.target.value)}
                        />
                        {error && image.length === 0 && (
                            <p className="text-red-500 text-sm">
                                All fields are required*
                            </p>
                        )}
                    </div>
                    <div className=" mx-auto mt-3   md:mt-0">
                        <button
                            className=" bg-transparent border-2 h-10 rounded-lg focus:outline-none px-2 dark:border-gray-300 border-gray-900"
                            onClick={() => {
                                if (
                                    image.filter((i) => i.url === imageurl)
                                        .length > 0
                                ) {
                                    setimageurl("");
                                    return;
                                }
                                setimage([...image, { url: imageurl }]);
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
                        {tags.map((tag, index) => (
                            <p
                                key={index}
                                className=" px-2 flex gap-2 rounded-full border bg-gray-500 bg-opacity-5  border-gray-300 dark:border-gray-800 py-0.5 "
                            >
                                <p className="text-lg ">{tag}</p>
                                <button
                                    onClick={() =>
                                        settags(tags.filter((t) => t !== tag))
                                    }
                                    type="button"
                                    className="text-xl"
                                >
                                    ⓧ
                                </button>
                            </p>
                        ))}
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

                                        if (!tags.includes(thistag)) {
                                            settags([...tags, thistag]);
                                        }
                                        setnewtag("");
                                    }
                                }}
                            />
                            <button
                                className="text-xl w-6 h-6 rounded-full border dark:border-gray-300 border-gray-900"
                                onClick={() => {
                                    //if at last of newtag is ',' then remove
                                    if (newtag.endsWith(",")) {
                                        var thistag = newtag.slice(0, -1);
                                    } else {
                                        var thistag = newtag;
                                    }
                                    thistag = thistag.trim();

                                    if (!tags.includes(thistag)) {
                                        settags([...tags, thistag]);
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
                    {error && tags.length === 0 && (
                        <p className="text-red-500 text-sm">
                            All fields are required*
                        </p>
                    )}
                </div>
                <div className="mt-5 flex gap-2 flex-wrap">
                    <div>
                        <select
                            name="uploadas"
                            id="uploadas"
                            value={uploadas}
                            className="w-full bg-transparent border-y-2 h-10 rounded-lg focus:outline-none px-2 dark:border-gray-300 border-gray-900"
                            onChange={(e) => setUploadas(e.target.value)}
                        >
                            <option value="Published">Published</option>
                            <option value="Schadule">Schadule</option>
                        </select>
                    </div>

                    <div className="">
                        <input
                            type="datetime-local"
                            className="w-64 bg-transparent border-y-2 h-10 rounded-lg focus:outline-none px-2 dark:border-gray-300 border-gray-900"
                            onChange={(e) => {
                                const value = e.target.value;
                                const formatted = new Date(value).toISOString();
                                if (new Date(value) > new Date()) {
                                    setdateerror(false);
                                    setpublishat(formatted);
                                } else {
                                    setdateerror(true);
                                    setpublishat("");
                                }
                            }}
                        />
                        {error && publishat === "" && (
                            <p className="text-red-500 text-sm">
                                All fields are required*
                            </p>
                        )}
                        {dateerror ? (
                            <p className="text-red-500">
                                Please select upcoming date
                            </p>
                        ) : (
                            ""
                        )}
                    </div>

                    <div>
                        <Mbutton
                            text={uploadas}
                            onClick={() => {
                                uploadpost();
                            }}
                        />
                    </div>
                    <div>
                        {
                            //if loading is true then show loader
                            loading ? (
                                <Loading text={"POSTING"} size={"5"} />
                            ) : (
                                ""
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
