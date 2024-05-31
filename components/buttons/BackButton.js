"use client";

import { useRouter } from "next/navigation";
import React from "react";

function BackButton(params) {
    const text = params.text;

    const router = useRouter();

    return (
        <div className="py-2 px-3 border dark:text-white dark:bg-black rounded-full mb-2 focus:outline-none border-gray-300 focus:border-gray-600 hover:scale-110 hover:font-bold  dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-700 duration-100">
            <button
                onClick={() => {
                    router.back();
                }}
                className="focus:outline-none"
            >
                {text}
            </button>
        </div>
    );
}
// <BackButton   text={"Back"}/>

export default BackButton;
