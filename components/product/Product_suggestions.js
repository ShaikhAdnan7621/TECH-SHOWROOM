"use client";
import React, { useEffect, useState } from "react";
import PhoneFrame from "@/components/product/Phoenframe";
import axios from "axios";

const Product_suggestions = (props) => {
    const product_Count = props.count;
    const brand = props.brand;
    const id = props.id;
    const [result, setResult] = useState({});

    const getproduct = async (brand, product_Count) => {
        const response = await axios.post("/api/products/suggestion", {
            brand,
            product_Count,
        });
        const filteredProducts = response.data.response_products.filter(
            (product) => product._id !== id,
        );
        setResult({ ...response, products: filteredProducts });
    };

    useEffect(() => {
        getproduct(brand, product_Count);
    }, [brand, product_Count]);

    return (
        <div className="">
            {result.status ? (
                <div>
                    {result.products.length > 0 && (
                        <>
                            <div>
                                <h1 className="text-2xl font-bold mt-5 mb-8 ">
                                    Phone Suggestions
                                </h1>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {result.products.map((product, index) => {
                                    const productdata = {
                                        Phone: product.Phone,
                                        image: product.image,
                                        likeCount: product.Like.length,
                                        _id: product._id.toString(),
                                    };
                                    return (
                                        <div key={index}>
                                            <PhoneFrame
                                                specification={productdata}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <hr className="my-10 dark:text-white" />
                        </>
                    )}
                </div>
            ) : (
                <div>{result.msg}</div>
            )}
        </div>
    );
};

export default Product_suggestions;
