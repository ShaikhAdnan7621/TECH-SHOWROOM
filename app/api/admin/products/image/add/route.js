import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

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
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const folderPath = `${__dirname}/public/Productimage/${datePath}`;
        await mkdir(folderPath, { recursive: true });
        const location = `/Productimage/${datePath}/${file.name}`;
        const path = `${folderPath}/${file.name}`;
        await writeFile(path, buffer);

        console.log(`File saved at: ${path}`); // This will log the path of the file

        return NextResponse.json({
            message: "File saved successfully",
            status: true,
            path: location,
        });
    } catch (err) {
        console.log(err);
    }
}
