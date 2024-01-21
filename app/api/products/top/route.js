import { Connect } from "@/app/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import products from "@/app/models/productsmodles";
import toast from "react-hot-toast";
Connect();

export async function POST(req, res) {
    try {
        const topresult = await products.find({}).sort({ rank: -1 }).limit(10);
        return NextResponse.json({ receivedProduct: topresult });
    } catch (error) {
        toast.error(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
