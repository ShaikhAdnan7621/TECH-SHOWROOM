"use client"

import Link from "next/link";
import { useState } from "react";

const Searchbar = () => {
    const [field, setField] = useState("brand");
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    return (
        <>
            <div
                className={`universalsearch py-2 px-3 border-2 dark:bg-black rounded-full mb-2 focus:outline-none border-gray-300 focus:border-gray-600 overflow-hidden bg-white flex focus:ring dark:placeholder-bg-gray-600 ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
            >                <select
                    id="countries"
                    onClick={(e) => {
                        setField(e.target.value);
                        setValue("");
                        setError(false);
                    }}
                    className="text-black dark:text-white dark:bg-black bg-opacity-40 focus:outline-none focus:border-none sm:w-20"
                >
                    <option className="bg-transparent" defaultValue value="brand">
                        Brand
                    </option>
                    <option className="bg-transparent" value="RAM">RAM</option>
                    <option className="bg-transparent" value="Storage">Storage</option>
                    <option className="bg-transparent" value="FrontCamera">FrontCamera</option>
                    <option className="bg-transparent" value="RearCamera">RearCamera</option>
                    <option className="bg-transparent" value="OS">OS</option>

                </select>

                <span className="border my-1 mx-1 border-gray-400 mt5"></span>
                <input
                    className="text-black dark:text-white bg-transparent focus:outline-none focus:border-none w-16 px-2 sm:w-40 border-solid"
                    type="search"
                    name="search"
                    value={value}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        let isValid = true;
                        if (inputValue == ""){
                            setValue(inputValue)
                            setError(true);
                            return;
                        }
                        switch (field) {
                            case "brand":
                            case "OS":
                                isValid = /^[a-zA-Z]+$/.test(inputValue);
                                break;
                            case "RAM":
                            case "Storage":
                            case "FrontCamera":
                            case "RearCamera":
                                isValid = /^[0-9]+$/.test(inputValue);
                                break;
                            default:
                                isValid = true;
                                break;
                        }

                        if (inputValue === "" || !isValid) {
                            
                            setError(true);
                        } else {
                            setError(false);
                        }

                        if (isValid) {
                            setValue(inputValue);
                        }
                    }}
                    placeholder="Search"
                    onKeyUp={(e) => {
                        if (e.key === "Enter" && value === "") {
                            setError(true);
                        } else if (e.key === "Enter") {
                            window.location.href = `/Products/Search?field=${field}&value=${value}`;
                        }
                    }}
                />
                <span className="border my-1 mx-1 sm:block hidden border-gray-400"></span>

                <Link
                    href={{
                        pathname: "/Products/Search",
                        query: { fild: field, valuse: value },
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