"use client";
import React, { useEffect, useState } from "react";
import Show from "@/components/product/Show";
import Hedder from "@/components/hedder/Hedder";
import axios from "axios";
import Loading from "@/components/Loading";
function Page(obj) {
    const { searchParams } = obj;
    const id = searchParams.id;
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(true);
    const [productfound, setproductfound] = useState(false);
    useEffect(() => {
        getProductData(id);
    },[id]);

    const getProductData = async (id) => {
        try {
            setloading(true);
            const responce = await axios.post("/api/products/findproduct", {
                id,
            });
            setproductfound(responce.data.found);
            setdata(responce.data.product);
            setloading(false);
        } catch (err) {
            console.log(err);
        } finally {
            setloading(false);
        }
    };

    return (
        <>
            <Hedder />
            {loading ? (
                <Loading text={"Login"} size={"5"} />
            ) : (
                <div>
                    {productfound ? (
                        <Show data={data} />
                    ) : (
                        <h1>Product not found</h1>
                    )}
                </div>
            )}
        </>
    );
}

export default Page;
