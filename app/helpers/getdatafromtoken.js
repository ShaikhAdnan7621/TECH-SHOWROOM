import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export function getdatafromtoken(req) {
    try {
        const token = req.cookies.get("token")?.value || "";
        const decodedtoken = Jwt.verify(token, process.env.TOKEN_SECRET);
        return decodedtoken.id;
    } catch (error) {
        throw new Error(error.message);
    }
}
