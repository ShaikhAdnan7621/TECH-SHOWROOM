"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function Show(props) {
    const data = props.data;
    const image = props.data.image;
    console.log(data)
    const [nthimahge, setnthimahge] = useState(0);
    const see = (index) => {
        setnthimahge(index);
    };

    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <div
                className=" bg-stone-200 dark:bg-stone-900  dark:text-white shadow-xl mb-10 dark:opacity-100 pt-8 rounded-3xl pb-8"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="flex flex-col gap-4 md:flex-row p-1 lg:p-2">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col-reverse xs:flex-row">
                            <div className="w-full xs:w-1/5 bg-stone-300 dark:bg-stone-800 rounded-lg relative shadow-xl overflow-hidden">
                                <div className="flex xs:flex-col gap-4 w-full text-center overflow-x-auto no-scrollbar px-5 xs:px-1 py-4 xs:h-80 ">
                                    {image.map((img, index) => (
                                        <div
                                            onMouseOver={() => see(index)}
                                            key={index}
                                            className="flex-shrink-0 "
                                        >
                                            <button onClick={() => see(index)}>
                                                <div className="relative w-16 h-16 ">
                                                    <Image
                                                        src={img}
                                                        fill={true}
                                                        alt="Phone Image"
                                                        className="object-contain-contain object-cover mx-auto my-auto rounded-lg shadow-lg "
                                                    />
                                                </div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <span className="absolute transform top-1/2 right-1 -translate-y-1/2  xs:-translate-x-1/2 xs:top-auto xs:right-auto xs:bottom-2 xs:left-1/2 animate-pulse">
                                    <svg
                                        width="25"
                                        height="25"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                    >
                                        <g>
                                            <path
                                                className="fill-gray-500 xs:hidden"
                                                d="M137.846 512a19.632 19.632 0 0 1-13.925-5.767c-7.69-7.69-7.69-20.16 0-27.85L346.305 256 123.921 33.617c-7.69-7.69-7.69-20.159 0-27.849s20.159-7.69 27.849 0l236.308 236.308c7.69 7.69 7.69 20.159 0 27.85L151.77 506.233A19.629 19.629 0 0 1 137.846 512z"
                                            ></path>
                                            <path
                                                className="fill-gray-500 hidden xs:block"
                                                d="M256 393.846a19.629 19.629 0 0 1-13.924-5.767L5.768 151.771c-7.69-7.69-7.69-20.159 0-27.849s20.159-7.69 27.849 0L256 346.305l222.382-222.383c7.69-7.69 20.16-7.69 27.85 0s7.69 20.159 0 27.849L269.925 388.079A19.632 19.632 0 0 1 256 393.846z"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div className="w-full xs:w-4/5 ">
                                <div
                                    className="w-full h-full grid place-content-center mb-4 "
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    data-aos-delay="800"
                                >
                                    <div className="relative w-72 h-72 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                                        <Image
                                            src={
                                                image[nthimahge]
                                                    ? image[nthimahge]
                                                    : "/product_image_not_available.png"
                                            }
                                            fill={true}
                                            alt="Phone Image"
                                            className=" shadow-xl rounded-lg object-cover bg-stone-200 dark:bg-stone-800"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-64 sm:h-auto  md:w-1/2  ">
                        <div className="flex justify-center h-full">
                            <table className="w-full text-left dark:text-white text-lg ">
                                <tbody>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            Phone
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.Phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            Brand
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.brand}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            RAM
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.RAM.map((ram) => ram + " ")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            Storage
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.Storage.map(
                                                (storage) => storage + " ",
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            Display Type
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.Display[0]}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            Display Size
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.Display[1]}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-xs sm:text-xl">
                                            Price
                                        </th>
                                        <td className="text-xs sm:text-xl">
                                            {data.Price}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Show;
