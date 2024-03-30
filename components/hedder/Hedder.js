"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Searchbar from "./Searchbar";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import aos from "aos";

export const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

const Hedder = () => {
    useEffect(() => {
        aos.init();
    });
    return (
        <>
            <div
                className="nav  py-3 sm:px-7  bg-white dark:bg-black w-full overflow-hidden"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
            >
                <div className="sm:mx-3 justify-between flex sm:flex-row flex-col items-center sm:px-3  px-1 mx-1">
                    <div
                        className={
                            " mr-auto text-black dark:text-white " +
                            orbitron.className
                        }
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="900"
                    >
                        Tech
                        <br />
                        Showroom
                    </div>
                    <div
                        className="flex ml-auto"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="900"
                    >
                        <Searchbar />
                    </div>
                </div>
                <div className="flex mt-2 items-center justify-between mb-2 relative ovh">
                    <div className=" h-14 sm:ml-3 sm:px-3 px-2 overflow-x-auto no-scrollbar pt-2">
                        <ul className="flex my-auto py-2">
                            <li
                                className="active:scale-110 duration-100"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="900"
                            >
                                <Link
                                    href="/"
                                    className="py-2 px-3 border dark:bg-black rounded-full  mb-2 focus:outline-none border-gray-300 focus:border-gray-600 dark:bg-transparent bg-white text-black dark:text-white mx-1 "
                                >
                                    Home
                                </Link>
                            </li>
                            <li
                                className="active:scale-110 duration-100"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="1050"
                            >
                                <Link
                                    href="/Products/Top"
                                    className="py-2 px-3 border dark:bg-black rounded-full mb-2 focus:outline-none active:scale-110 border-gray-300 focus:border-gray-600 dark:bg-transparent bg-white text-black dark:text-white mx-1 "
                                >
                                    Products
                                </Link>
                            </li>
                            <li
                                className="active:scale-110 duration-100"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="1200"
                            >
                                <Link
                                    href="/Post/Search"
                                    className="py-2 px-3 border dark:bg-black rounded-full mb-2 focus:outline-none active:scale-110 border-gray-300 focus:border-gray-600 dark:bg-transparent bg-white text-black dark:text-white mx-1 "
                                >
                                    Posts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-16 ml-1 mr-3">
                        <div className="w-20 flex flex-col justify-center items-center">
                            <Link
                                href="/Profile"
                                className="py-2 active:scale-110 focus:outline-none focus:border-none "
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="1000"
                            >
                                <div className="py-2 px-1 border dark:bg-black rounded-full focus:outline-none border-gray-300 focus:border-gray-600 dark:text-white relative h-12 w-12 overflow-hidden">
                                    <Image
                                        src="/image.jpg"
                                        fill={true}
                                        sizes="100"
                                        className="object-cover h-10 w-10"
                                        alt=""
                                    />
                                </div>
                                <p className="dark:text-white text-center ">
                                    Profile
                                </p>
                            </Link>
                        </div>
                    </div>
                    <span className="absolute transform top-1/2 -translate-y-1/2  right-20 animate-pulse">
                        <svg
                            width="25"
                            height="25"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path
                                    className="fill-stone-800 sm:hidden"
                                    d="M137.846 512a19.632 19.632 0 0 1-13.925-5.767c-7.69-7.69-7.69-20.16 0-27.85L346.305 256 123.921 33.617c-7.69-7.69-7.69-20.159 0-27.849s20.159-7.69 27.849 0l236.308 236.308c7.69 7.69 7.69 20.159 0 27.85L151.77 506.233A19.629 19.629 0 0 1 137.846 512z"
                                ></path>
                            </g>
                        </svg>
                    </span>
                </div>
                <hr />
            </div>
        </>
    );
};
export default Hedder;
