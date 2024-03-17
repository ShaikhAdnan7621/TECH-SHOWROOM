import { NextResponse } from "next/server";
import products from "@/app/models/productsmodles";

const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { brand, product_Count } = reqBody;
        if (product_Count === 0) {
            const response_products = await products.find().limit(12);
            return NextResponse.json(
                {
                    message: "product found",
                    response_products: response_products,
                    status: true,
                },
                { status: 200 },
            );
        }

        if (brand && product_Count) {
            const response_products = await products
                .find({ brand: brand })
                .limit(product_Count);
            return NextResponse.json(
                {
                    message: "product found",
                    response_products: response_products,
                    status: true,
                },
                { status: 200 },
            );
        }
        if (!brand && product_Count) {
            const response_products = await products
                .find()
                .limit(product_Count);
            return NextResponse.json(
                {
                    message: "product found",
                    response_products: response_products,
                    status: true,
                },
                { status: 200 },
            );
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "No more suggertions", status: false },
            { status: 404 },
        );
    }
}
