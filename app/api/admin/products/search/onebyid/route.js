import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextResponse } from "next/server";
import products from "@/app/models/productsmodles";
import users from "/app/models/usermodles";
const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, resp) {
    try {
        const reqBody = await req.json();
        const findproduct = await products.findOne({ _id: reqBody.id });
        return NextResponse.json({
            message: "product founded sucessfully",
            findproduct,
        });
    } catch (error) {
        console.log(error.message);
    }
}


//  .skip(skip)
//  .limit(pageSize)
//  .toArray();
