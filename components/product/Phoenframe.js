"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const PhoneFrame = (props) => {
    const specification = props.specification;
    const [likeloading, setLikeloading] = React.useState(false);
    useEffect(() => {
        AOS.init();
    });

    return (
        <div
            className="flex flex-col ease-out items-center justify-center w-72 mb-5 dark:bg-gray-950 bg-gray-50 dark:text-white rounded-lg shadow-xl dark:shadow-transparent border-t"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
        >
            {specification.image?.length > 0 ? (
                <div className="relative h-64 w-64 mt-3 mb-4">
                    <Image
                        src={specification.image[0]}
                        alt="Phone Image"
                        fill={true}
                        className="w-64 h-64 mt-3 mb-4 rounded-lg object-cover dark:border-white border bg-white"
                    />
                </div>
            ) : (
                <div className="relative h-64 w-64 mt-3 mb-4">
                    <Image
                        src="/imageifnotavilable.jpg"
                        alt="Phone Image"
                        fill={true}
                        className="w-64 h-64 mt-3 mb-4 rounded-lg object-cover dark:border-white border bg-white"
                    />
                </div>
            )}

            <p className="text-lg font-bold">{specification.Phone}</p>

            <div className="flex mb-3 gap-2 mt-5 items-center h-11">
                <Link
                    href={`/Products/Show?id=${specification._id}`}
                    className="p-2 w-40 text-black text-center dark:text-white hover:font-bold rounded-full hover:dark:border-white border-2 hover:border-black border-gray-500 focus:border-gray-800 duration-150 ease-out focus:outline-none"
                >
                    View Product
                </Link>
                <div className="flex items-center px-2 h-full w-24 group text-black text-center dark:text-white hover:font-bold rounded-full hover:dark:border-white border-2 hover:border-black border-gray-500 focus:border-gray-800 duration-150 ease-out focus:outline-none">
                    <div className="w-10 flex justify-center items-center">
                        {specification.likeCount}
                    </div>
                    <span className="border h-7 mx-1 rounded-full border-gray-400  "></span>
                    <div className="w-10">
                        <svg viewBox="0 0 512 512" className="h-full w-full ">
                            <g>
                                <path
                                    d="M476.229 223.454c-13.977-16.845-35.861-27.309-57.113-27.309h-56.219c12.652-20.162 22.174-40.451 27.977-59.771 8.855-29.482 8.545-55.182-.897-74.322-10.635-21.558-32.187-33.431-60.683-33.431a16 16 0 0 0-14.792 9.902C292.314 92.34 234.44 169.69 179.913 220.645c-5.564-19.327-23.395-33.511-44.488-33.511h-68.5c-25.529 0-46.299 20.77-46.299 46.298v203.646c0 25.529 20.77 46.299 46.299 46.299h68.5c15.617 0 29.443-7.781 37.833-19.661 12.692 12.211 29.518 19.661 47.955 19.661h172.481c19.068 0 36.048-8.119 49.106-23.479 10.764-12.663 18.409-29.77 22.107-49.471L490.33 275c3.411-18.17-1.597-36.476-14.101-51.546zM149.723 437.079c0 7.884-6.414 14.299-14.298 14.299h-68.5c-7.884 0-14.299-6.415-14.299-14.299V233.433c0-7.884 6.415-14.298 14.299-14.298h68.5c7.884 0 14.298 6.414 14.298 14.298zm309.156-167.983-25.422 135.428c-4.252 22.651-16.931 46.854-39.764 46.854H221.212c-21.774 0-39.488-19.694-39.488-43.902V261.735c60.311-50.068 127.854-136.057 157.672-200.327 15.909 2.692 20.279 11.549 21.884 14.801 10.385 21.051 1.766 69.522-41.697 126.199a15.999 15.999 0 0 0 12.697 25.736h86.837c11.8 0 24.552 6.179 32.486 15.742 4.467 5.386 9.357 14.13 7.276 25.21z"
                                    className="fill-black z-10 dark:fill-white origin-center group-hover:rotate-[-10deg] group-focus:rotate-[-10deg] group-active:rotate-[-20deg] scale-75 group-active:scale-95 duration-100"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneFrame;

// src="https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg"
