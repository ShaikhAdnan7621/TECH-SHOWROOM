"use client";

import React, { useState } from "react";

const Filters = () => {
    const [f1, setf1] = useState(false);
    const [f2, setf2] = useState(false);
    const [f3, setf3] = useState(false);
    const [f4, setf4] = useState(false);
    const [f5, setf5] = useState(false);
    const [f6, setf6] = useState(false);
    const [f7, setf7] = useState(false);
    const [f8, setf8] = useState(false);
    const [minprice, setminprice] = useState(0);
    const [maxprice, setmaxprice] = useState(0);

    return (
        <div className=" gap-2 p-2 w-full flex max-w-xs sm:max-w-sm    ">
            <div className="sm:w-28 w-24 text-center">
                <div className="">
                    <div className="border flex justify-center gap-2 mx-auto rounded-2xl dark:border-gray-100 border-gray-950  w-24 dark:shadow-[inset_0_0_2px_3px_#ffffff45] shadow-[inset_0_0_3px_3px_#00000045] my-4 py-0.5 ">
                        <span>from</span> <span>{minprice}</span>
                    </div>
                    <div className="border flex justify-center gap-2 mx-auto rounded-2xl dark:border-gray-100 border-gray-950  w-24 dark:shadow-[inset_0_0_2px_3px_#ffffff45] shadow-[inset_0_0_3px_3px_#00000045] my-2 py-0.5 ">
                        <span>To</span> <span>{maxprice}</span>
                    </div>
                </div>
                <div className=" mt-1 mb-1 sm:mt-6 sm:mb-4 flex gap-4 sm:h-80 h-72 justify-center relative">
                    <div className="px-1 py-3 dark:shadow-[inset_0_0_5px_3px_#ffffff45] shadow-[inset_0_0_5px_3px_#00000045] rounded-3xl">
                        <input
                            type="range"
                            className="vertical w-5 h-full"
                            onChange={(e) => {
                                setminprice(e.target.value);
                            }}
                            min={0}
                            value={minprice}
                            max={100}
                            name=""
                            id=""
                        />
                    </div>
                    <div className="px-1 py-3 dark:shadow-[inset_0_0_5px_3px_#ffffff45] shadow-[inset_0_0_5px_3px_#00000045] rounded-3xl">
                        <input
                            type="range"
                            className="vertical w-5 h-full"
                            onChange={(e) => {
                                setmaxprice(e.target.value);
                            }}
                            min={0}
                            value={maxprice}
                            max={100}
                            name=""
                            id=""
                        />
                    </div>
                </div>
            </div>
            <div className=" h-full grow pt-1">
                <div className="flex gap-2 justify-around ">
                    <div>
                        <div>
                            <button
                                className={
                                    (f1 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f1 ? setf1(false) : setf1(true);
                                }}
                            >
                                {f1 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                        <div>
                            <button
                                className={
                                    (f2 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f2 ? setf2(false) : setf2(true);
                                }}
                            >
                                {f2 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                        <div>
                            <button
                                className={
                                    (f3 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f3 ? setf3(false) : setf3(true);
                                }}
                            >
                                {f3 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                        <div>
                            <button
                                className={
                                    (f4 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f4 ? setf4(false) : setf4(true);
                                }}
                            >
                                {f4 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button
                                className={
                                    (f5 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f5 ? setf5(false) : setf5(true);
                                }}
                            >
                                {f5 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                        <div>
                            <button
                                className={
                                    (f6 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f6 ? setf6(false) : setf6(true);
                                }}
                            >
                                {f6 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                        <div>
                            <button
                                className={
                                    (f7 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f7 ? setf7(false) : setf7(true);
                                }}
                            >
                                {f7 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                        <div>
                            <button
                                className={
                                    (f8 ? "bg-gray-300 dark:bg-gray-700" : "") +
                                    " border shadow dark:border-gray-100 border-gray-950 flex px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full mb-2"
                                }
                                onClick={() => {
                                    f8 ? setf8(false) : setf8(true);
                                }}
                            >
                                {f8 ? <span>☑</span> : <span>☐</span>}{" "}
                                &nbsp;filtone
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-600">
                    <div>hhh</div>
                    <div>hhh</div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
