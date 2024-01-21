import React from "react";
import { Connect } from "@/app/dbconfig/dbconfig";
import products from "@/app/models/productsmodles";
import PhoneFrame from "@/components/product/Phoenframe";
import Hedder from "@/components/hedder/Hedder";

Connect();

async function getproduct(fild, valuse) {
    valuse.toLowerCase();
    const search = new Object({ [fild]: { $regex: valuse } });

    try {
        const productsearch = await products.find(search);
        return {
            msg: "Product Geted Sucessfully",
            status: true,
            productsearch: productsearch,
        };
    } catch (error) {
        console.log(error);
        return {
            msg: "Products not Available At This Time",
            status: false,
        };
    }
}
async function Page(obj) {
    const { searchParams } = obj;
    const result = await getproduct(searchParams.fild, searchParams.valuse);
    return (
        <div className="dark:text-white">
            <Hedder />
            <h1 className=" text-2xl font-bold my-5 ">
                Search Result For {searchParams.valuse}
            </h1>
            <hr className=" my-5" />

            <div className="flex flex-wrap justify-center gap-4">
                {result.status && result.productsearch.length > 0 ? (
                    result.productsearch.map((product, index) => {
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
                    <div>
                        {result.msg} {"  "} {result.productsearch.length}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
