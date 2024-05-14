"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Usercardimage from "@/components/profile/usercardimage";
import BackButton from "@/components/buttons/BackButton";

const Profile = () => {
    const router = useRouter();
    const [data, setdata] = useState("");

    const onlogout = async () => {
        try {
            const responce = await axios.get("./api/users/logout");
            toast.success("logout successfully");
            router.push("/Login");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getuserdata();
    }, []);

    const getuserdata = async () => {
        const responce = await axios.get("/api/users/userdata");
        setdata(responce.data.data);
        console.log(responce.data.data)
    };
    
    return (
        <>
            <div className="flex justify-between mt-10">
                <BackButton text={"Back"} />
                <button
                    onClick={onlogout}
                    className="text-center p-2 py-2 px-3 border dark:text-white dark:bg-black rounded-full mb-2 focus:outline-none border-gray-300 focus:border-gray-600"
                >
                    Logout
                </button>
            </div>
            <div className=" text-black dark:text-white ">
                <Usercardimage data={data} />
                {data.isAdmin && (
                    <div className="mt-4">
                        <Link
                            href="Admin"
                            className="text-center p-2 py-2 px-3 border dark:text-white dark:bg-black rounded-full mb-2 focus:outline-none border-gray-300 focus:border-gray-600"
                        >
                            Admin
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;



// localhost:3000/Profile