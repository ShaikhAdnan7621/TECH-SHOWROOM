import React from "react";
import { Connect } from "@/app/dbconfig/dbconfig";
import products from "@/app/models/productsmodles";
import PhoneFrame from "@/components/product/Phoenframe";
import Hedder from "@/components/hedder/Hedder";

Connect();

async function topproduct() {
    try {
        const topresult = await products.aggregate([
            { $addFields: { likeCount: { $size: "$Like" } } },
            { $sort: { likeCount: -1 } },
            { $limit: 12 },
        ]);
        return {
            msg: "Products not Available At This Time",
            status: true,
            topresults: topresult,
        };
    } catch (error) {
        console.log(error);
        return {
            msg: "Products not Available At This Time",
            status: false,
        };
    }
}

async function Page() {
    const result = await topproduct();
    return (
        <div className="container dark:text-white ">
            <Hedder />
            <h1 className=" text-2xl font-bold my-5">Top Rated Products</h1>
            <hr className=" my-5" />
            <div className="flex flex-wrap justify-center gap-4">
                {result.status ? (
                    result.topresults.map((product, index) => {
                        const productdata = {
                            Phone: product.Phone,
                            image: product.image,
                            likeCount: product.Like.length,
                            _id: product._id.toString(),
                        };
                        return (
                            <div key={index}>
                                <PhoneFrame specification={productdata} />
                            </div>
                        );
                    })
                ) : (
                    <div>{result.msg}</div>
                )}
            </div>
        </div>
    );
}

export default Page;
