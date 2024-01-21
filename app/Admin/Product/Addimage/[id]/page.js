"use client";
import Loading from "@/components/Loading";
import Mbutton from "@/components/buttons/Mbutton";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page({ params }) {
    const [image, setimage] = useState([]);
    const [newimageurl, setnewimageurl] = useState("");
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(true);
    const [loading2, setloading2] = useState(false);

    const getproductdata = async () => {
        try {
            setloading(true);
            const responce = await axios.post(
                "/api/admin/products/search/onebyid",
                params,
            );
            if (responce.data.findproduct === undefined) {
                return;
            }
            setproduct(responce.data.findproduct);

            if (responce.data.findproduct.image) {
                setimage(responce.data.findproduct.image);
            }
            return;
        } catch (err) {
            console.log(err);
        } finally {
            setloading(false);
        }
    };
    const updateproduct = async () => {
        try {
            setloading2(true);

            product.image = image;
            const responce = await axios.post("/api/admin/products/edit", {
                data: product,
                productdata: product,
            });
            toast.success(responce.data.message);
        } catch (error) {
            toast.error(error.message);
        }
        setloading2(false);
    };

    useEffect(() => {
        getproductdata();
    }, []);

    return (
        <>
            {loading ? (
                <Loading text={"Loading"} size={"5"} />
            ) : (
                <div className="text-black dark:text-white mb-10">
                    {product ? (
                        <>
                            <div className="">
                                <div className="w-full">
                                    <h1>Product Name:- {product.Phone}</h1>
                                </div>
                                <div className="w-full mt-5">
                                    <div className=" flex flex-wrap justify-center gap-4">
                                        {image.length > 0 ? (
                                            image.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="w-40 h-40 object-contain-contain rounded-lg shadow-lg relative "
                                                >
                                                    <Image
                                                        fill={true}
                                                        src={item}
                                                        alt=""
                                                        className="bg-white object-contain rounded-lg border-2 border-gray-300"
                                                    />
                                                    {
                                                        <button
                                                            className="absolute -top-2.5 -right-2.5 bg-gray-300 bg-opacity-40  text-white rounded-full p-1.5 border-2 border-red-600"
                                                            onClick={() => {
                                                                const newimage =
                                                                    [...image];
                                                                newimage.splice(
                                                                    index,
                                                                    1,
                                                                );
                                                                setimage(
                                                                    newimage,
                                                                );
                                                            }}
                                                        >
                                                            <svg
                                                                width={10}
                                                                hanging={10}
                                                                x="0"
                                                                y="0"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <g>
                                                                    <g data-name="02 User">
                                                                        <path
                                                                            d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
                                                                            className="fill-red-600"
                                                                        ></path>
                                                                        <path
                                                                            d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
                                                                            className="fill-red-600"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    }
                                                </div>
                                            ))
                                        ) : (
                                            <h1>Image Not Avilable</h1>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-3 mt-5 border-gray-900 dark:border-gray-200" />
                            <div>
                                {image.length > 0 ? (
                                    <ul className="flex flex-col gap-2">
                                        {image.map((item, index) => (
                                            <li
                                                key={index}
                                                className="w-full flex justify-between items-center"
                                            >
                                                <span>{item}</span>
                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={() => {
                                                        const newimage = [
                                                            ...image,
                                                        ];
                                                        newimage.splice(
                                                            index,
                                                            1,
                                                        );
                                                        setimage(newimage);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <h1>Image Not Avilable</h1>
                                )}
                            </div>
                            <hr className="mb-3 mt-5  border-gray-900 dark:border-gray-200" />
                            <input
                                type="text"
                                className="w-full border-2 border-gray-900 text-black dark:border-gray-200 rounded-lg p-2 mb-2"
                                placeholder="Enter Image Url"
                                value={newimageurl}
                                onChange={(e) => setnewimageurl(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        //check newimageurl in correct relative image path format
                                        if (
                                            newimageurl.includes("/") &&
                                            (newimageurl.includes(".jpg") ||
                                                newimageurl.includes(".png"))
                                        ) {
                                            if (newimageurl === "") {
                                                return;
                                            }
                                            const newimage = [...image];
                                            newimage.push(newimageurl);
                                            setimage(newimage);
                                            setnewimageurl("");
                                        } else {
                                            toast.error(
                                                "Enter Correct Image Url",
                                            );
                                        }
                                    }
                                }}
                            />
                            <div className="flex flex-col sm:justify-around gap-4 sm:flex-row justify-center">
                                <div className="mt-5 text-center">
                                    <Mbutton
                                        text={"Add Image URL"}
                                        onClick={() => {
                                            if (
                                                newimageurl.includes("/") &&
                                                (newimageurl.includes(".jpg") ||
                                                    newimageurl.includes(".png"))
                                            ) {
                                                if (newimageurl === "") {
                                                    return;
                                                }
                                                const newimage = [...image];
                                                newimage.push(newimageurl);
                                                setimage(newimage);
                                                setnewimageurl("");
                                            } else {
                                                toast.error(
                                                    "Enter Correct Image Url",
                                                );
                                            }
                                        }}
                                    />
                                </div>
                                <div className="mt-5 text-center">
                                    <Mbutton
                                        text={"Update"}
                                        onClick={() => updateproduct()}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    {loading2 ? <Loading text={"Loading"} size={"5"} /> : ""}
                </div>
            )}
        </>
    );
}

export default Page;
