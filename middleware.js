import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const searchfild = request.nextUrl.search ? request.nextUrl.search : "";

    // public path)
    const ispublicpath =
        path === "/Login" ||
        path === "/Signup" ||
        path === "/" ||
        path === "/Post/Search" ||
        path.startsWith("/Products");
    // authontication path
    const authonticationpath = path === "/Login" || path === "/Signup";
    const token = request.cookies.get("token")?.value || "";
    const managertoken = request.cookies.get("managertoken")?.value || "";
    const admintoken = request.cookies.get("admintoken")?.value || "";

    if (path.startsWith("/Admin") && !token) {
        return NextResponse.redirect(
            new URL(`/Login?from=${path + searchfild}`, request.nextUrl),
        );
    }
    if (path.startsWith("/Manager") && !token) {
        return NextResponse.redirect(
            new URL(`/Login?from=${path + searchfild}`, request.nextUrl),
        );
    }

    if (path.startsWith("/Admin") && !admintoken) {
        return NextResponse.redirect(new URL("/Restricted", request.nextUrl));
    }

    if (path.startsWith("/Manager") && !managertoken) {
        return NextResponse.redirect(new URL("/Restricted", request.nextUrl));
    }

    if (authonticationpath && token) {
        return NextResponse.redirect(new URL("/Profile", request.nextUrl));
    }

    if (ispublicpath && token) {
        return;
    }

    if (!ispublicpath && !token) {
        return NextResponse.redirect(
            new URL(`/Login?from=${path + searchfild}`, request.nextUrl),
        );
    }
}

export const config = {
    matcher: [
        "/",
        "/Profile",
        "/Login",
        "/Signup",
        "/Admin",
        "/Manager",
        "/Editadmin",
        "/Admin/:path*",
        "/Manager/:path*",
        "/Post/:path*",
        "/Products/:path*",
    ],
};
