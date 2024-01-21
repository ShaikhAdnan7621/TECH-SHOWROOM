import { getdatafromtoken } from "@/app/helpers/getdatafromtoken";
import { NextResponse } from "next/server";
import products from "@/app/models/productsmodles";
import users from "/app/models/usermodles";
const { Connect } = require("@/app/dbconfig/dbconfig");

Connect();
export async function POST(req, resp) {
    try {
        const reqBody = await req.json();
        const userId = await getdatafromtoken(req);
        const admin = await users.findOne({ _id: userId });

        if (!admin) {
            return NextResponse.json({ message: "user is not founded" });
        }
        if (!admin.isAdmin) {
            return NextResponse.json({ message: "user is not Admin" });
        }

        const savedproduct = await products.updateOne(
            { _id: reqBody.data._id },
            { $set: { ...reqBody.productdata } },
        );

        return NextResponse.json({ message: "Product Updated", savedproduct });
    } catch (error) {
        console.log(error.message);
    }
}
