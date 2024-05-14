"use client";
import Loading from "@/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
    const [Loading1, setLoading] = useState(true);
    const [Responce, setResponce] = useState(false);
    const [Showdashbord, setShowdashbord] = useState(false);

    useEffect(() => {
        getuserdata();
        setLoading(false);
    }, []);
    const getuserdata = async () => {
        try {
            const responce = await axios.get("/api/admin/admindata");
            if (responce.data.data === undefined) {
                setResponce(true);
                return;
            }
            if (responce.data.data.isAdmin) {
                setShowdashbord(true);
            }
        } catch (err) {
            setResponce(true);
        }
    };

    if (Loading1) {
        return (
            <div className="text-black dark:text-white mt-10">
                <Loading text={"Please Wait"} size={"5"} />
            </div>
        );
    }

    if (Responce) {
        return (
            <div className=" mt-10 h-full w-full flex itme justify-center text-black dark:text-white p-20 ">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">You are not Admin</h1>
                    <p className="text-xl mt-4 bg-red-500 bg-opacity-90 rounded-lg px-2 py-1">
                        You are not allowed to access this page
                    </p>
                    <h1 className="mt-8">
                        <Link
                            href={"/"}
                            className="py-2 px-5 bg-gray-500 rounded-lg text-white hover:bg-gray-600"
                        >
                            Go to Home
                        </Link>
                    </h1>
                </div>
            </div>
        );
    }
    return (
        <div className="text-black dark:text-white ">
            <div></div>
            {Showdashbord && (
                <>
                    <div className="">
                        <div className="mt-10">
                            <h1 className="my-5 text-3xl text-center ">
                                Manage Post
                            </h1>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 ">
                                <Link
                                    href={"/Admin/Post/Image/Upload"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Image Add
                                </Link>
                                <Link
                                    href={"/Admin/Post/Add"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Add Post
                                </Link>
                                <Link
                                    href={"/Admin/Post/List"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Post List
                                </Link>
                                <Link
                                    href={"/Admin/Post/Image/Galary"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Image Galary
                                </Link>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h1 className="my-5 text-3xl text-center ">
                                Manage Products
                            </h1>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 ">
                                <Link
                                    href={"/Admin/Product/Search"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Porduct Search
                                </Link>
                                <Link
                                    href={"/Admin/Product/Add"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Add Product
                                </Link>

                                <Link
                                    href={"/Admin/Product/Delete"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Delete Product
                                </Link>
                                <Link
                                    href={"/Admin/Product/Image/Upload"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Product Image Upload
                                </Link>
                                <Link
                                    href={"Admin/Product/Image/Galary"}
                                    className="py-1 px-2 border border-gray-500 rounded-lg w-52 text-center mx-auto"
                                >
                                    Image Galary
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Page;

// <Link
//     href={"/Product"}
//     className="py-1 px-2 border border-gray-500 rounded-lg "
//  >
//     Product
// </Link>;
