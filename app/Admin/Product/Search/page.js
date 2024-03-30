"use client";
import BackButton from "@/components/buttons/BackButton";
import Loading from "@/components/Loading";
import Productstripe from "@/components/product/Productstripe";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
    const [loading, setloading] = useState(false);
    const [isdata, setisdata] = useState(true);
    const [errinputsearch, seterrinputsearch] = useState(false);

    const [productarr, setproductarr] = useState([]);
    const [pagenum, setpagenum] = useState({ nthpage: 0 });

    const getproducts = async (pagenumber) => {
        try {
            setloading(true);
            const responce = await axios.post(
                "/api/admin/products/search/bypage",
                pagenumber,
            );
            setproductarr(responce.data.findproduct);
            if (responce.data.findproduct.length > 0) {
                setisdata(true);
            } else {
                setisdata(false);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        getproducts(pagenum);
    }, [pagenum]);

    return (
        <div
            className="mb-10"
            onKeyUp={(e) => {
                if (e.key === "ArrowLeft") {
                    if (pagenum.nthpage > 0) {
                        setpagenum({
                            nthpage: pagenum.nthpage - 1,
                        });
                        getproducts({
                            nthpage: pagenum.nthpage - 1,
                        });
                    }
                }
                if (e.key === "ArrowRight") {
                    setpagenum({
                        nthpage: pagenum.nthpage + 1,
                    });
                    getproducts({
                        nthpage: pagenum.nthpage + 1,
                    });
                }
            }}
        >
            <div className="flex justify-between">
                <div className="">
                    <BackButton text={"Back"} />
                </div>
                <div className="flex items-center justify-end dark:bg-black dark:text-white gap-4">
                    {loading ? <Loading text={"Please wait"} size={"5"} /> : ""}
                    <div className="flex gap-1">
                        <div>
                            <button
                                className="h-10 w-10 rounded-full border-2 border-gray-500 dark:hover:border-white hover:border-black p-0.5 focus:outline-none dark:focus:border-white focus:border-black"
                                onClick={() => {
                                    if (pagenum.nthpage > 0) {
                                        setpagenum({
                                            nthpage: pagenum.nthpage - 1,
                                        });
                                        getproducts({
                                            nthpage: pagenum.nthpage - 1,
                                        });
                                    }
                                }}
                            >
                                {"<"}
                            </button>
                        </div>
                        <div className="flex align-middle rounded-full border-2 px-1 items-center p-0.5">
                            <input
                                type="number"
                                min={0}
                                value={pagenum.nthpage}
                                onChange={(e) => {
                                    let v = e.target.value;
                                    v = Number(v);
                                    if (pagenum.nthpage === 0) {
                                        setpagenum({
                                            nthpage: e.nativeEvent.data,
                                        });
                                        return;
                                    }
                                    setpagenum({ nthpage: v });
                                }}
                                placeholder="Page"
                                className="h-9 w-16 rounded-full bg-transparent dark:text-white focus:outline-none text-center border-2  focus:border-slate-600 border-gray-500 dark:hover:border-white hover:border-black"
                                name=""
                                id=""
                            />
                            <button
                                className="h-9 w-9 my-auto rounded-full focus:outline-none border-2 focus:border-slate-600 border-gray-500 dark:hover:border-white hover:border-black"
                                onClick={() => {
                                    getproducts({ nthpage: pagenum.nthpage });
                                }}
                            >
                                GO
                            </button>
                        </div>
                        <div>
                            <button
                                className="h-10 w-10 rounded-full border-2 border-gray-500 dark:hover:border-white hover:border-black p-0.5 focus:outline-none dark:focus:border-white focus:border-black"
                                onClick={() => {
                                    setpagenum({
                                        nthpage: pagenum.nthpage + 1,
                                    });
                                    getproducts({
                                        nthpage: pagenum.nthpage + 1,
                                    });
                                }}
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div>{errinputsearch ? "error" : ""}</div>
                </div>
            </div>
            <hr className="mt-2 mb-4 border-gray-700 dark:border-gray-300" />{" "}
            <div>
                {productarr.length > 0
                    ? productarr.map((item, index) => (
                          <div key={`item${index + 1}`}>
                              <div>
                                  <Productstripe item={item} />
                              </div>
                          </div>
                      ))
                    : ""}
                {isdata ? (
                    ""
                ) : (
                    <h1 className="text-gray-500 text-center mt-3">
                        Data not avilable
                    </h1>
                )}
            </div>
        </div>
    );
}
