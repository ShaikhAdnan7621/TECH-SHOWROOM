"use client";
import React, { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import axios from "axios";

export const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});
function Usercardimage() {
    const [data, setdata] = useState("");

    const onlogout = async () => {
        try {
            const responce = await axios.get("./api/users/logout");
            toast.success("logout successfully");
            router.push("/Login");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getuserdata();
    }, []);

    const getuserdata = async () => {
        const responce = await axios.get("/api/users/userdata");
        setdata(responce.data.data);
    };

    return (
        <div className=" text-black  dark:text-white">
            {setdata && (
                <div>
                    <div className="h-36 w-36 group flex justify-center items-center rounded-full border mx-auto border-gray-500">
                        <div
                            data-tooltip-target="tooltip-default"
                            className="relative h-32 w-32 mt-2  mb-2 rounded-full border border-gray-500"
                        >
                            <Image
                                src="/image.jpg"
                                fill={true}
                                className="z-10 rounded-full"
                                alt=""
                            />
                            <div className="absolute -top-2 -right-2 z-20 ">
                                <button className="p-2 rounded-full group-hover:opacity-100 opacity-0 duration-200 group-hover:bg-gray-400 dark:group-hover:bg-gray-800 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80">
                                    <svg
                                        className="w-7 h-7"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                    >
                                        <g>
                                            <path
                                                d="M51.2 353.28 0 512l158.72-51.2zM87.16 316.492 336.96 66.69l108.61 108.61L195.77 425.102zM504.32 79.36 432.64 7.68c-10.24-10.24-25.6-10.24-35.84 0l-23.04 23.04 107.52 107.52 23.04-23.04c10.24-10.24 10.24-25.6 0-35.84z"
                                                className="fill-gray-800 dark:fill-gray-200 z-0"
                                            ></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h1 className={" mt-3 text-center " + orbitron.className}>
                        {data.username}
                    </h1>
                    <hr className=" mt-3  mx-auto border-gray-500" />
                </div>
            )}
        </div>
    );
}

export default Usercardimage;
