"use client";
import Loading from "@/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [ramarr, setramarr] = useState([]);
    const [addram, setaddram] = useState("");
    const [storagearr, setstoragearr] = useState([]);
    const [addstorage, setaddstorage] = useState("");
    const [rearCameraarr, setrearCameraarr] = useState([]);
    const [addrearCamera, setaddrearCameraarr] = useState("");
    const [frontCameraarr, setfrontCameraarr] = useState([]);
    const [addfrontCamera, setaddfrontCameraarr] = useState("");

    const [product, setproduct] = useState({
        brand: "",
        Phone: "",
        ReleaseDate: "",
        OS: "",
        Display: ["", ""],
        Processor: "",
        Storage: [storagearr],
        RAM: [ramarr],
        RearCamera: [],
        FrontCamera: [],
        Price: 0,
        rank: 0,
    });

    const addproduct = async () => {
        try {
            setloading(true);
            const responce = await axios.post(
                "/api/admin/products/add",
                product,
            );
            router.push(
                `/Admin/Product/Edit/${responce.data.savedproduct._id}`,
            );
        } catch (error) {
            toast.error(error.message);
        } finally {
            setloading(false);
        }
    };

    return (
        <div className="dark:text-white text-black py-10  ">
            <h1 className="text-3xl text-center">Add Products </h1>
            <Link className="text-lg mt-6 hover:scale-105 dark:hover:bg-gray-800 hover:bg-gray-200 duration-100  focus:outline-none  hover:shadow-sm hover:shadow-gray-600 dark:hover:shadow-gray-500 " href="/Admin">Back</Link>
            <hr className="mt-4 mb-4 border-gray-700 dark:border-gray-300" />
            <div className="flex gap-4  sm:flex-row flex-col justify-center">
                <div className="flex flex-col">
                    <label htmlFor="brand" className="text-left">
                        Brand
                    </label>
                    <input
                        id="brand"
                        type="text"
                        value={product.brand}
                        placeholder="Brand"
                        className="p-2 border w-72  rounded-lg mb-2 focus:outline-none text-black dark:text-white dark:bg-black border-gray-300 focus:border-gray-600"
                        onChange={(e) =>
                            setproduct({ ...product, brand: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    {" "}
                    <label htmlFor="phone" className="text-left">
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="text"
                        onChange={(e) =>
                            setproduct({ ...product, Phone: e.target.value })
                        }
                        className="p-2 border w-72 border-gray-300 dark:bg-black rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black dark:text-white "
                        value={product.Phone}
                        placeholder="phone"
                    />
                </div>
            </div>
            <div className="flex gap-4 sm:flex-row flex-col justify-center">
                <div className="flex flex-col">
                    <label htmlFor="OS" className="text-left">
                        OS
                    </label>
                    <input
                        id="OS"
                        type="text"
                        onChange={(e) =>
                            setproduct({ ...product, OS: e.target.value })
                        }
                        className="p-2 border w-72 border-gray-300  dark:bg-black rounded-lg mb-2 focus:outline-none text-black focus:border-gray-600 dark:text-white "
                        value={product.OS}
                        placeholder="OS"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="ReleaseDate" className="text-left">
                        Release Date
                    </label>
                    <input
                        id="ReleaseDate"
                        type="date"
                        onChange={(e) =>
                            setproduct({
                                ...product,
                                ReleaseDate: e.target.value,
                            })
                        }
                        className="p-2 border w-72 border-gray-300 rounded-lg mb-2 focus:outline-none dark:bg-black focus:border-gray-600"
                        value={product.ReleaseDate}
                        placeholder="ReleaseDate"
                    />
                </div>
            </div>
            <div className="flex gap-4 mt-4 sm:flex-row flex-col  justify-center">
                <div className="flex flex-col">
                    <label htmlFor="processor" className="text-left">
                        Processor
                    </label>
                    <input
                        id="processor"
                        type="text"
                        onChange={(e) =>
                            setproduct({
                                ...product,
                                Processor: e.target.value,
                            })
                        }
                        className="p-2 border w-72 border-gray-300 rounded-lg mb-2 focus:outline-none dark:bg-black focus:border-gray-600 text-black dark:text-white "
                        value={product.Processor}
                        placeholder="Processor"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price" className="text-left">
                        price
                    </label>
                    <input
                        id="price"
                        type="text"
                        onChange={(e) =>
                            setproduct({ ...product, Price: e.target.value })
                        }
                        className="p-2 border w-72 dark:bg-black border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black dark:text-white "
                        value={product.Price}
                        placeholder="price"
                    />
                </div>
            </div>
            <div className="text-center mt-4">
                <div className="w-full text-left sm:text-center">
                    <label
                        htmlFor="Display"
                        className="text-left sm:text-center  "
                    >
                        Display
                    </label>
                </div>
                <div className="flex  sm:flex-row flex-col  gap-4 justify-center">
                    <input
                        type="text"
                        className="p-2 border w-72  dark:bg-black border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                        value={product.Display[0]}
                        placeholder="Display Dimensions"
                        onChange={(e) => {
                            const newValue = e.target.value;
                            const updatedProduct = { ...product };
                            updatedProduct.Display[0] = newValue;
                            setproduct(updatedProduct);
                        }}
                    />
                    <input
                        type="text"
                        className="p-2 border w-72 border-gray-300 rounded-lg mb-2 focus:outline-none dark:bg-black focus:border-gray-600 text-black dark:text-white "
                        value={product.Display[1]}
                        placeholder="Display Specifications"
                        onChange={(e) => {
                            const newValue = e.target.value;
                            const updatedProduct = { ...product };
                            updatedProduct.Display[1] = newValue;
                            setproduct(updatedProduct);
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                {" "}
                {/* Storage input start here */}
                <div className="flex flex-col">
                    <label htmlFor="Storage" className="text-left">
                        Storage
                    </label>
                    <div className="flex justify-between  sm:flex-row flex-col items-center">
                        <div className="w-72">
                            {storagearr.length > 0 ? (
                                <ul className="flex gap-1 mb-2 items-center">
                                    {storagearr.map((item, index) => (
                                        <li
                                            className="px-1 py-0.5 rounded-md bg-slate-500"
                                            key={`storage${index}`}
                                        >
                                            <span>{item}</span>
                                            <span className=" border my-1 mx-1 border-gray-400 "></span>
                                            <button
                                                onClick={() => {
                                                    ((index) => {
                                                        const newstoragearr = [
                                                            ...storagearr,
                                                        ];
                                                        newstoragearr.splice(
                                                            index,
                                                            1,
                                                        );
                                                        setstoragearr(
                                                            newstoragearr,
                                                        );

                                                        const updatedProduct = {
                                                            ...product,
                                                        };
                                                        updatedProduct.Storage =
                                                            newstoragearr;
                                                        setproduct(
                                                            updatedProduct,
                                                        );
                                                    })(index);
                                                }}
                                            >
                                                x
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-56 flex  justify-between">
                            <div className="border-gray-300 p-2 focus:border-gray-600 mb-2 rounded-lg focus:outline-none border">
                                <input
                                    type="text"
                                    placeholder="Storage"
                                    className=" w-24 dark:bg-black focus:outline-none"
                                    value={addstorage}
                                    onChange={(e) => {
                                        setaddstorage(e.target.value);
                                    }}
                                />
                                <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                <span>GB</span>
                                <span className=" border my-1 mx-1 border-gray-400 "></span>
                                <button
                                    onClick={() => {
                                        setstoragearr([
                                            ...storagearr,
                                            `${addstorage}GB`,
                                        ]);
                                        setaddstorage("");
                                        const updatedProduct = { ...product };
                                        updatedProduct.Storage = [
                                            ...storagearr,
                                            `${addstorage}GB`,
                                        ];
                                        setproduct(updatedProduct);
                                    }}
                                    className="w-14"
                                >
                                    add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* storage input ended here */}
            <div className="flex  justify-center">
                {" "}
                {/* ram input start here */}
                <div className="flex flex-col">
                    <label htmlFor="Ram" className="text-left">
                        RAM
                    </label>
                    <div className="flex justify-between  sm:flex-row flex-col  items-center">
                        <div className="w-72">
                            {ramarr.length > 0 ? (
                                <ul className="flex gap-1 mb-2 items-center">
                                    {ramarr.map((item, index) => (
                                        <li
                                            className="px-1 py-0.5 rounded-md bg-slate-500"
                                            key={`${index}`}
                                        >
                                            <span>{item}</span>
                                            <span className=" border my-1 mx-1 border-gray-400 "></span>
                                            <button
                                                onClick={() => {
                                                    ((index) => {
                                                        const newramarr = [
                                                            ...ramarr,
                                                        ];
                                                        newramarr.splice(
                                                            index,
                                                            1,
                                                        );
                                                        setramarr(newramarr);
                                                        const updatedProduct = {
                                                            ...product,
                                                        };
                                                        updatedProduct.RAM =
                                                            newramarr;
                                                        setproduct(
                                                            updatedProduct,
                                                        );
                                                    })(index);
                                                }}
                                            >
                                                x
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-56 flex  justify-between">
                            <div className="border-gray-300 p-2  focus:border-gray-600 mb-2 rounded-lg focus:outline-none border">
                                <input
                                    type="text"
                                    placeholder="RAM"
                                    className=" w-24 dark:bg-black focus:outline-none"
                                    value={addram}
                                    onChange={(e) => {
                                        setaddram(e.target.value);
                                    }}
                                />
                                <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                <span>GB</span>
                                <span className=" border my-1 mx-1 border-gray-400 "></span>
                                <button
                                    onClick={() => {
                                        setramarr([...ramarr, `${addram}GB`]);
                                        setaddram("");
                                        const updatedProduct = { ...product };
                                        updatedProduct.RAM = [
                                            ...ramarr,
                                            `${addram}GB`,
                                        ];
                                        setproduct(updatedProduct);
                                    }}
                                    className="w-14"
                                >
                                    add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ram input ended here */}
            <div className="flex  justify-center">
                {" "}
                {/* rearCamera input start here */}
                <div className="flex flex-col">
                    <label htmlFor="RearCamera" className="text-left">
                        RearCamera
                    </label>
                    <div className="flex justify-between  sm:flex-row flex-col  items-center">
                        <div className="w-72">
                            {rearCameraarr.length > 0 ? (
                                <ul className="flex gap-1 mb-2 items-center">
                                    {rearCameraarr.map((item, index) => (
                                        <li
                                            className="px-1 py-0.5 rounded-md bg-slate-500"
                                            key={`${index}`}
                                        >
                                            <span>{item}</span>
                                            <span className=" border my-1 mx-1 border-gray-400 "></span>
                                            <button
                                                onClick={() => {
                                                    ((index) => {
                                                        const newrearCameraarr =
                                                            [...rearCameraarr];
                                                        newrearCameraarr.splice(
                                                            index,
                                                            1,
                                                        );
                                                        setrearCameraarr(
                                                            newrearCameraarr,
                                                        );
                                                        const updatedProduct = {
                                                            ...product,
                                                        };
                                                        updatedProduct.RearCamera =
                                                            newrearCameraarr;
                                                        setproduct(
                                                            updatedProduct,
                                                        );
                                                    })(index);
                                                }}
                                            >
                                                x
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-56 flex  justify-between">
                            <div className="border-gray-300 p-2   focus:border-gray-600 mb-2 rounded-lg focus:outline-none border">
                                <input
                                    type="text"
                                    placeholder="RearCamera"
                                    className=" w-24 dark:bg-black focus:outline-none"
                                    value={addrearCamera}
                                    onChange={(e) => {
                                        setaddrearCameraarr(e.target.value);
                                    }}
                                />
                                <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                <span>MP</span>
                                <span className=" border my-1 mx-1 border-gray-400 "></span>

                                <button
                                    onClick={() => {
                                        setrearCameraarr([
                                            ...rearCameraarr,
                                            `${addrearCamera}MP`,
                                        ]);
                                        setaddrearCameraarr("");
                                        const updatedProduct = { ...product };
                                        updatedProduct.RearCamera = [
                                            ...rearCameraarr,
                                            `${addrearCamera}MP`,
                                        ];
                                        setproduct(updatedProduct);
                                    }}
                                    className="w-14"
                                >
                                    add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rearCamera input ended here */}
            <div className="flex   justify-center">
                {" "}
                {/* frontCamera input start here */}
                <div className="flex flex-col">
                    <label htmlFor="frontCamera" className="text-left">
                        FrontCamera
                    </label>
                    <div className="flex justify-between  sm:flex-row flex-col  items-center">
                        <div className="w-72">
                            {frontCameraarr.length > 0 ? (
                                <ul className="flex gap-1 mb-2 items-center">
                                    {frontCameraarr.map((item, index) => (
                                        <li
                                            className="px-1 py-0.5 rounded-md bg-slate-500"
                                            key={`${index}`}
                                        >
                                            <span>{item}</span>
                                            <span className=" border my-1 mx-1 border-gray-400 "></span>
                                            <button
                                                onClick={() => {
                                                    ((index) => {
                                                        const newfrontCameraarr =
                                                            [...frontCameraarr];
                                                        newfrontCameraarr.splice(
                                                            index,
                                                            1,
                                                        );
                                                        setfrontCameraarr(
                                                            newfrontCameraarr,
                                                        );
                                                        const updatedProduct = {
                                                            ...product,
                                                        };
                                                        updatedProduct.FrontCamera =
                                                            newfrontCameraarr;
                                                        setproduct(
                                                            updatedProduct,
                                                        );
                                                    })(index);
                                                }}
                                            >
                                                x
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="w-56 flex  justify-between">
                            <div className="border-gray-300 p-2 focus:border-gray-600 mb-2 rounded-lg focus:outline-none border">
                                <input
                                    type="text"
                                    placeholder="rearCamera"
                                    className=" w-24 dark:bg-black focus:outline-none"
                                    value={addfrontCamera}
                                    onChange={(e) => {
                                        setaddfrontCameraarr(e.target.value);
                                    }}
                                />
                                <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                <span>MP</span>
                                <span className=" border my-1 mx-1 border-gray-400 "></span>
                                <button
                                    onClick={() => {
                                        setfrontCameraarr([
                                            ...frontCameraarr,
                                            `${addfrontCamera}MP`,
                                        ]);
                                        setaddfrontCameraarr("");
                                        const updatedProduct = { ...product };
                                        updatedProduct.FrontCamera = [
                                            ...frontCameraarr,
                                            `${addfrontCamera}MP`,
                                        ];
                                        setproduct(updatedProduct);
                                    }}
                                    className="w-14"
                                >
                                    add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* frontCamera input ended here */}
            <hr className="mt-4 mb-2 border-gray-700 dark:border-gray-300" />
            <div className="text-right flex justify-end items-center gap-10 ">
                <div className="">
                    {loading ? <Loading text={"Please wait"} size={"5"} /> : ""}
                </div>
                <button
                    className="p-2 mb-2 rounded-lg mt-5 border border-gray-300 text-black dark:text-white w-72 focus:border-gray-900"
                    onClick={addproduct}
                >
                    addproduct
                </button>
            </div>
        </div>
    );
}

/* <label htmlFor="ReleaseDate" className="text-left">ReleaseDate</label>
<input id="ReleaseDate" type="date" onChange={(e) => setproduct({ ...product, ReleaseDate: e.target.value, })}
className="p-2 border w-72 border-gray-300 rounded-lg mb-2 focus:outline-none text-black focus:border-gray-600"
value={product.ReleaseDate} placeholder="ReleaseDate" /> */
