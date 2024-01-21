import { NextResponse } from "next/server";
import products from "@/app/models/productsmodles";

const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, res) {
    try {
        const reqbody = await req.json();
        const product = await products.findById({ _id: reqbody.id });
        return NextResponse.json(
            { message: "product found", product: product, found: true },
            { status: 200 },
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "product not found", found: false },
            { status: 404 },
        );
    }
}
