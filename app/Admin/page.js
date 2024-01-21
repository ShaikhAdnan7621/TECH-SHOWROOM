"use client";
import Loading from "@/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
    const [Loading1, setLoading] = useState(true);
    const [Respo, setRespo] = useState(false);
    const [Showdashbord, setShowdashbord] = useState(false);

    useEffect(() => {
        getuserdata();
        setLoading(false);
    }, []);
    const getuserdata = async () => {
        const responce = await axios.get("/api/admin/admindata");
        if (responce.data.data === undefined) {
            setRespo(true);
            return;
        }
        if (responce.data.data.isAdmin) {
            setShowdashbord(true);
        }
    };

    return (
        <div className="text-black dark:text-white">
            {Loading1 ? (
                <Loading
                    text={"Please wait while we check your Account information"}
                    size={"5"}
                />
            ) : (
                ""
            )}
            {Respo ? (
                <div className="h-full w-full flex itme justify-center text-black dark:text-white">
                    <h1>Only Admins Have This Page Permition</h1>
                </div>
            ) : (
                ""
            )}
            {Showdashbord ? (
                <>
                    <div className="">
                        <div>
                            <h1>Post</h1>
                            <div className=" flex flex-wrap gap-4">
                                <Link
                                    href={"/Admin/Post/Image/Upload"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Image Add
                                </Link>
                                <Link
                                    href={"/Admin/Post/Add"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Add Post
                                </Link>
                                <Link
                                    href={"/Admin/Post/List"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Post List
                                </Link>
                                <Link
                                    href={"/Admin/Post/Image/Galary"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Image Galary
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h1>Product</h1>
                            <div className=" flex flex-wrap gap-4">
                                <Link
                                    href={"/Admin/Product/Search"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Porduct Search
                                </Link>
                                <Link
                                    href={"/Admin/Product/Add"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Add Product
                                </Link>

                                <Link
                                    href={"/Admin/Product/Delete"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Delete Product
                                </Link>
                                <Link
                                    href={"/Admin/Product/Image/Upload"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Product Image Upload
                                </Link>
                                <Link
                                    href={"Admin/Product/Image/Galary"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg "
                                >
                                    Image Galary
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default Page;

//     /* <Link
//     href={"/Product"}
//     className="py-1 px-2 border border-gray-500 rounded-lg "
// >
//     Product
// </Link>; */
