"use client";
import Loading from "@/components/Loading";
import BackButton from "@/components/buttons/BackButton";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
    const [loading, setloading] = useState(true);
    const [dataifavilable, setdataifavilable] = useState(false);
    const [storagechipcreater, setstoragechipcreater] = useState("");
    const [ramchipcreater, setramchipcreater] = useState("");
    const [RearCamerachipcreater, setRearCamerachipcreater] = useState("");
    const [FrontCamerachipcreater, setFrontCamerachipcreater] = useState("");

    const [brand, setbrand] = useState("");
    const [Phone, setPhone] = useState("");
    const [ReleaseDate, setReleaseDate] = useState("");
    const [OS, setOS] = useState("");
    const [Display, setDisplay] = useState([]);
    const [Processor, setProcessor] = useState("");
    const [Storage, setStorage] = useState([]);
    const [RAM, setRAM] = useState([]);
    const [RearCamera, setRearCamera] = useState([]);
    const [FrontCamera, setFrontCamera] = useState([]);
    const [Price, setPrice] = useState(0);
    const [olddata, setolddata] = useState({});

    useEffect(() => {
        getproductdata();
    });

    const getproductdata = async () => {
        try {
            const responce = await axios.post(
                "/api/admin/products/search/onebyid",
                params,
            );
            const data = responce.data.findproduct;
            if (!data._id === params.id) {
                setdataifavilable(false);
                return;
            }
            setdataifavilable(true);

            setbrand(data.brand);
            setPhone(data.Phone);
            setOS(data.OS);
            setPrice(data.Price);
            setRAM([...data.RAM]);
            setStorage([...data.Storage]);
            setDisplay(data.Display);
            setRearCamera([...data.RearCamera]);
            setFrontCamera([...data.FrontCamera]);
            setReleaseDate(data.ReleaseDate);
            setolddata(data);
            setProcessor(data.Processor);
        } catch (error) {
            console.log(error.message);
        } finally {
            setloading(false);
        }
    };

    const updateproduct = async () => {
        {
            const productdata = {
                brand: brand,
                Phone: Phone,
                ReleaseDate: ReleaseDate,
                OS: OS,
                Display: Display,
                Processor: Processor,
                Storage: Storage,
                RAM: RAM,
                RearCamera: RearCamera,
                FrontCamera: FrontCamera,
                Price: Price,
            };
            try {
                const responce = await axios.post("/api/admin/products/edit", {
                    data: olddata,
                    productdata: productdata,
                });
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <div className="dark:text-white">
            <div className="flex gap-5 items-center">
                <BackButton text={"Go Back"} />
                <h1 className="text-3xl mb-2">Edit Product : {Phone} </h1>
            </div>
            <hr className="mt-4 mb-4 border-gray-700 dark:border-gray-300" />

            {loading ? (
                <Loading text={"Please wait gating product data"} size={"5"} />
            ) : (
                <div>
                    <div>
                        <div className="flex gap-4  sm:flex-row flex-col justify-center">
                            {/* brant and Phone start here */}
                            <div className="flex flex-col">
                                {" "}
                                {/* Brand input */}
                                <label htmlFor="brand" className="text-left">
                                    Brand
                                </label>
                                <input
                                    id="brand"
                                    type="text"
                                    value={brand}
                                    placeholder="Brand"
                                    className="p-2 border w-72 dark:bg-black rounded-lg mb-2 focus:outline-none border-gray-300 focus:border-gray-600"
                                    onChange={(e) => setbrand(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                {" "}
                                {/* Phone input */}
                                <label htmlFor="phone" className="text-left">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="p-2 border w-72 border-gray-300 dark:bg-black rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                                    value={Phone}
                                    placeholder="phone"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4  sm:flex-row flex-col justify-center">
                            {/* brant and Phone start here */}
                            <div className="flex flex-col">
                                {" "}
                                {/* Brand input */}
                                <label htmlFor="OS" className="text-left">
                                    OS
                                </label>
                                <input
                                    id="OS"
                                    type="text"
                                    value={OS}
                                    placeholder="OS"
                                    className="p-2 border w-72 dark:bg-black rounded-lg mb-2 focus:outline-none border-gray-300 focus:border-gray-600"
                                    onChange={(e) => setOS(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                {" "}
                                {/* Phone input */}
                                <label
                                    htmlFor="Processor"
                                    className="text-left"
                                >
                                    Processor
                                </label>
                                <input
                                    id="Processor"
                                    type="text"
                                    onChange={(e) => e.target.value}
                                    className="p-2 border w-72 border-gray-300 dark:bg-black rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                                    value={Processor}
                                    placeholder="Processor"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        {" "}
                        {/* Display input */}
                        <label htmlFor="Display" className="text-left ">
                            Display
                        </label>
                        <div className="flex mt-4 sm:flex-row flex-col  gap-4 justify-center">
                            <input
                                type="text"
                                className="p-2 border w-72  dark:bg-black border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                                value={Display[0]}
                                placeholder="Display Dimensions"
                                onChange={(e) => {
                                    const display = [...Display];
                                    display[0] = e.target.value;
                                    setDisplay(display);
                                }}
                            />
                            <input
                                type="text"
                                className="p-2 border w-72 border-gray-300 rounded-lg mb-2 focus:outline-none dark:bg-black focus:border-gray-600"
                                value={Display[1]}
                                placeholder="Display Specifications"
                                onChange={(e) => {
                                    const display = [...Display];
                                    display[1] = e.target.value;
                                    setDisplay(display);
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        {" "}
                        {/* stoage input start here */}
                        <div className="flex flex-col">
                            <label htmlFor="stoage" className="text-left">
                                stoage
                            </label>
                            <div className="flex justify-between  sm:flex-row flex-col  items-center">
                                <div className="w-72">
                                    {Storage.length > 0 ? (
                                        <ul className="flex gap-1 mb-2 items-center">
                                            {Storage.map((item, index) => (
                                                <li
                                                    className="px-1 py-0.5 rounded-md bg-slate-500"
                                                    key={`Storage${index}`}
                                                >
                                                    <span>{item}</span>
                                                    <span className=" border my-1 mx-1 border-gray-400 "></span>
                                                    <button
                                                        onClick={() => {
                                                            ((index) => {
                                                                const newstoage =
                                                                    [
                                                                        ...Storage,
                                                                    ];
                                                                newstoage.splice(
                                                                    index,
                                                                    1,
                                                                );
                                                                setStorage([
                                                                    ...newstoage,
                                                                ]);
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
                                            placeholder="stoage"
                                            className=" w-24 dark:bg-black focus:outline-none"
                                            value={storagechipcreater}
                                            onChange={(e) => {
                                                setstoragechipcreater(
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                        <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                        <span>GB</span>
                                        <span className=" border my-1 mx-1 border-gray-400 "></span>
                                        <button
                                            onClick={() => {
                                                setStorage([
                                                    ...Storage,
                                                    `${storagechipcreater}GB`,
                                                ]);
                                                setstoragechipcreater("");
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
                    {/* stoage input ended here */}

                    <div className="flex justify-center">
                        {" "}
                        {/* RAM input start here */}
                        <div className="flex flex-col">
                            <label htmlFor="RAM" className="text-left">
                                RAM
                            </label>
                            <div className="flex justify-between  sm:flex-row flex-col  items-center">
                                <div className="w-72">
                                    {RAM.length > 0 ? (
                                        <ul className="flex gap-1 mb-2 items-center">
                                            {RAM.map((item, index) => (
                                                <li
                                                    className="px-1 py-0.5 rounded-md bg-slate-500"
                                                    key={`RAM${index}`}
                                                >
                                                    <span>{item}</span>
                                                    <span className=" border my-1 mx-1 border-gray-400 "></span>
                                                    <button
                                                        onClick={() => {
                                                            ((index) => {
                                                                const newremarr =
                                                                    [...RAM];
                                                                newremarr.splice(
                                                                    index,
                                                                    1,
                                                                );
                                                                setRAM([
                                                                    ...newremarr,
                                                                ]);
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
                                            placeholder="RAM"
                                            className=" w-24 dark:bg-black focus:outline-none"
                                            value={ramchipcreater}
                                            onChange={(e) => {
                                                setramchipcreater(
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                        <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                        <span>GB</span>
                                        <span className=" border my-1 mx-1 border-gray-400 "></span>
                                        <button
                                            onClick={() => {
                                                setRAM([
                                                    ...RAM,
                                                    `${ramchipcreater}GB`,
                                                ]);
                                                setramchipcreater("");
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
                    {/* RAM input ended here */}

                    <div className="flex justify-center">
                        {" "}
                        {/* RearCamera input start here */}
                        <div className="flex flex-col">
                            <label htmlFor="RearCamera" className="text-left">
                                RearCamera
                            </label>
                            <div className="flex justify-between  sm:flex-row flex-col  items-center">
                                <div className="w-72">
                                    {RearCamera.length > 0 ? (
                                        <ul className="flex gap-1 mb-2 items-center">
                                            {RearCamera.map((item, index) => (
                                                <li
                                                    className="px-1 py-0.5 rounded-md bg-slate-500"
                                                    key={`RearCamera${index}`}
                                                >
                                                    <span>{item}</span>
                                                    <span className=" border my-1 mx-1 border-gray-400 "></span>
                                                    <button
                                                        onClick={() => {
                                                            ((index) => {
                                                                const newremarr =
                                                                    [
                                                                        ...RearCamera,
                                                                    ];
                                                                newremarr.splice(
                                                                    index,
                                                                    1,
                                                                );
                                                                setRearCamera([
                                                                    ...newremarr,
                                                                ]);
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
                                            value={RearCamerachipcreater}
                                            onChange={(e) => {
                                                setRearCamerachipcreater(
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                        <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                        <span>MP</span>
                                        <span className=" border my-1 mx-1 border-gray-400 "></span>
                                        <button
                                            onClick={() => {
                                                setRearCamera([
                                                    ...RearCamera,
                                                    `${RearCamerachipcreater}MP`,
                                                ]);
                                                setRearCamerachipcreater("");
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
                    {/* RAM input ended here */}

                    <div className="flex justify-center">
                        {" "}
                        {/* RAM input start here */}
                        <div className="flex flex-col">
                            <label htmlFor="FrontCamera" className="text-left">
                                FrontCamera
                            </label>
                            <div className="flex justify-between  sm:flex-row flex-col  items-center">
                                <div className="w-72">
                                    {FrontCamera.length > 0 ? (
                                        <ul className="flex gap-1 mb-2 items-center">
                                            {FrontCamera.map((item, index) => (
                                                <li
                                                    className="px-1 py-0.5 rounded-md bg-slate-500"
                                                    key={`RAM${index}`}
                                                >
                                                    <span>{item}</span>
                                                    <span className=" border my-1 mx-1 border-gray-400 "></span>
                                                    <button
                                                        onClick={() => {
                                                            ((index) => {
                                                                const newFrontCamera =
                                                                    [
                                                                        ...FrontCamera,
                                                                    ];
                                                                newFrontCamera.splice(
                                                                    index,
                                                                    1,
                                                                );
                                                                setFrontCamera([
                                                                    ...newFrontCamera,
                                                                ]);
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
                                            placeholder="FrontCamera"
                                            className=" w-24 dark:bg-black focus:outline-none"
                                            value={FrontCamerachipcreater}
                                            onChange={(e) => {
                                                setFrontCamerachipcreater(
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                        <span className=" border my-1 mx-1.5 border-gray-400 "></span>
                                        <span>MP</span>
                                        <span className=" border my-1 mx-1 border-gray-400 "></span>
                                        <button
                                            onClick={() => {
                                                setFrontCamera([
                                                    ...FrontCamera,
                                                    `${FrontCamerachipcreater}MP`,
                                                ]);
                                                setFrontCamerachipcreater("");
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
                    {/* RAM input ended here */}

                    <div>
                        <div className="flex gap-4 mt-4  sm:flex-row flex-col justify-center">
                            {/* brant and Phone start here */}
                            <div className="flex flex-col">
                                {" "}
                                {/* Price input */}
                                <label htmlFor="Price" className="text-left">
                                    OS
                                </label>
                                <input
                                    id="Price"
                                    type="number"
                                    value={Price}
                                    placeholder="Price"
                                    className="p-2 border w-72 dark:bg-black rounded-lg mb-2 focus:outline-none border-gray-300 focus:border-gray-600"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                {" "}
                                {/* Phone input */}
                                <label
                                    htmlFor="OS"
                                    className="text-left font-thin text-gray-400"
                                >
                                    Please check all entry correctly
                                </label>
                                <button
                                    className="p-2 border w-72 dark:bg-black rounded-lg mb-2 focus:outline-none border-gray-300 focus:border-gray-600"
                                    onClick={updateproduct}
                                >
                                    Update product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
