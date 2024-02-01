"use client";
import Link from "next/link";
import React, {  useState } from "react";

const Searchbar = () => {
    const [fild, setfild] = useState("brand");
    const [valuse, setvaluse] = useState("");

    return (
        <>
            <div className="univarsalsearch  py-2 px-3 border-2 dark:bg-black rounded-full mb-2 focus:outline-none border-gray-300 focus:border-gray-600 overflow-hidden flex focus:ring dark:placeholderbg-gray-600 ">
                <select
                    id="countries"
                    onClick={(e) => {
                        setfild(e.target.value);
                    }}
                    className="text-black dark:text-white dark:bg-black bg-white bg-transparent  focus:outline-none focus:border-none sm:w-20"
                >
                    <option defaultValue value="brand">
                        Brand
                    </option>
                    <option value="RAM">RAM</option>
                    <option value="Storage">Storage</option>
                    <option value="FrontCamera">FrontCamera</option>
                    <option value="RearCamera">RearCamera</option>
                    <option value="OS">OS</option>
                </select>

                <span className=" border my-1 mx-1 border-gray-400 mt5 "></span>
                <input
                    className=" text-black dark:text-white bg-transparent focus:outline-none focus:border-none w-16 px-2 sm:w-40 border-solid "
                    type="search"
                    name="search"
                    onChange={(e) => {
                        setvaluse(e.target.value);
                    }}
                    placeholder="Search"
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            window.location.href = `/Products/Search?fild=${fild}&valuse=${valuse}`;
                        }
                    }}
                />
                <span className=" border my-1 mx-1 sm:block hidden border-gray-400 "></span>

                <Link
                    href={{
                        pathname: "/Products/Search",
                        query: { fild: fild, valuse: valuse },
                    }}
                    className="focus:outline-none focus:border-none pl-1 pr-2"
                >
                    <svg
                        className="text-lime-400 h-5 w-auto my-auto fill-current"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        space="preserve"
                        width="512px"
                        height="512px"
                    >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </Link>
            </div>
        </>
    );
};

export default Searchbar;
