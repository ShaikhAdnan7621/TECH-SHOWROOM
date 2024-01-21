import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";

export async function POST(req, resp) {
    try {
        const data = await req.formData();
        const file = data.get("file");
        if (!file) {
            return NextResponse.json({
                message: "File not found",
                status: false,
            });
        }
        const bytedata = await file.arrayBuffer();
        const buffer = Buffer.from(bytedata);

        const today = new Date();
        const datePath = `${today.getFullYear()}-${String(
            today.getMonth() + 1,
        ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

        const folderPath = `./public/Postimage/${datePath}`;
        const location = `/Postimage/${datePath}/${file.name}`;
        await mkdir(folderPath, { recursive: true });
        const path = `${folderPath}/${file.name}`;
        await writeFile(path, buffer);

        return NextResponse.json({
            message: "File saved successfully",
            status: true,
            path: location,
        });
    } catch (err) {
        console.log(err);
    }
}
