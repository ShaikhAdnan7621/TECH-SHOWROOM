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
        const user = await users.findOne({ _id: userId }); 

        if (!user) {
            return NextResponse.json({ message: "user is not founded" });
        }
        if (!user.isAdmin) {
            return NextResponse.json({ message: "user is not Admin" });
        }
        reqBody.userid = userId;
        const newproduct = new products(reqBody);
        const savedproduct = await newproduct.save();
        return NextResponse.json({ message: "user founded", savedproduct });
    } catch (error) {
        console.log(error.message);
    }
}
