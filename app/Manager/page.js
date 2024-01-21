"use client";
import Loading from "@/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Manager() {
    const router = useRouter();
    const [loading, setloading] = useState(true);
    const [respo, setrespo] = useState(false);
    const [showdashbord, setshowdashbord] = useState(false);

    useEffect(() => {
        getuserdata();
        setloading(false);
    }, []);
    const getuserdata = async () => {
        const responce = await axios.get("/api/managers/managerdata");
        if (responce.data.data === undefined) {
            setrespo(true);
            return;
        }
        if (responce.data.data.isManager) {
            setshowdashbord(true);
        }
    };
    return (
        <div className="dark:bg-black dark:text-white">
            {loading ? (
                <Loading
                    text={"Please wait while we check your Account information"}
                    size={"5"}
                />
            ) : (
                ""
            )}
            {respo ? (
                <div className="h-full w-full flex itme justify-center text-black dark:text-white">
                    <h1>Only Managers Have This Page Permition</h1>
                </div>
            ) : (
                ""
            )}
            {showdashbord ? (
                <>
                    <Link href={"/Manager/Editadmin"}> Editadmin</Link>
                </>
            ) : (
                ""
            )}
        </div>
    );
}
