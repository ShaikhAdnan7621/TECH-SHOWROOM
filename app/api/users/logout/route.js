import { NextResponse } from "next/server";
export async function GET() {
    try {
        const responce = NextResponse.json({
            message: "logout successful",
            success: true,
        });
        //delete tokens
        responce.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
        });
        responce.cookies.set("managertoken", "", {
            httpOnly: true,
            expires: new Date(0),
        });
        responce.cookies.set("admintoken", "", {
            httpOnly: true,
            expires: new Date(0),
        });

        return responce;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
