"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function Show(props) {
    const data = props.data;
    const image = props.data.image;
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
                className=" bg-stone-200 dark:bg-stone-900  dark:text-white shadow-xl mb-10 dark:opacity-100 p-4 rounded-3xl "
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className=" md:flex gap-5 md:items-center">
                    <div className=" md:w-1/2">
                        <div className=" flex gap-5 flex-col items-center ">
                            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
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
                            <div className="w-full bg-stone-300 dark:bg-stone-800 rounded-lg relative shadow-xl overflow-hidden px-3 ">
                                <div className="flex gap-4 w-full text-center overflow-x-auto no-scrollbar py-4 snap-x">
                                    {image.map((img, index) => (
                                        <div
                                            onMouseOver={() => see(index)}
                                            key={index}
                                            className="snap-start "
                                        >
                                            <button
                                                onClick={() => see(index)}
                                                className=""
                                                name={"button-" + index}
                                            >
                                                <div className="relative w-16 h-16 ">
                                                    <Image
                                                        src={img}
                                                        fill={true}
                                                        alt="Phone Image"
                                                        className="object-contain-contain object-cover  rounded-lg shadow-lg "
                                                    />
                                                </div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-1/2 ">
                        <table className="w-full text-left dark:text-white text-lg  border-separate border-spacing-y-3">
                            <tbody className="">
                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        Phone
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-e-lg pl-4">
                                        {data.Phone}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        Brand
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg   rounded-e-lg pl-4">
                                        {data.brand}
                                    </td>
                                </tr>

                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        RAM
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg   rounded-e-lg pl-4">
                                        {data.RAM.map((ram) => ram + ", ")}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        Storage
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg   rounded-e-lg pl-4">
                                        {data.Storage.map(
                                            (storage) => storage + " ",
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        Display Type
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg   rounded-e-lg pl-4">
                                        {data.Display[0]}
                                    </td>
                                </tr>

                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        Display Size
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg   rounded-e-lg pl-4">
                                        {data.Display[1]}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg rounded-s-lg pl-4">
                                        Price
                                    </th>
                                    <td className="text-md sm:text-xl p-2 bg-stone-300 dark:bg-stone-800 shadow-lg   rounded-e-lg pl-4">
                                        {data.Price}/-
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Show;
