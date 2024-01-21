"use client";
import { useRouter } from "next/navigation";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

export const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

const Profile = () => {
    const router = useRouter();
    const [data, setdata] = useState("");

    const onlogout = async () => {
        try {
            const responce = await axios.get("./api/users/logout");
            toast.success("logout successfully");
            router.push("/Login");
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getuserdata();
    }, []);

    const getuserdata = async () => {
        const responce = await axios.get("/api/users/userdata");
        setdata(responce.data.data);
    };
    return (
        <>
            <div className="fixed  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-orange-500 p-3  border-2 rounded-xl dark:text-white text-black w-full sm:max-w-sm lg:max-w-lg max-w-xs">
                <div className="mb-3 ">
                    <button
                        onClick={() => {
                            router.back();
                        }}
                        className="px-4 py-0.5 border-2 flex border-orange-500 rounded-full dark:text-w "
                    >
                        <svg
                            width="20"
                            height="20"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path
                                    d="M411.5 281h-298c-13.81 0-25-11.19-25-25s11.19-25 25-25h298c13.81 0 25 11.19 25 25s-11.19 25-25 25z"
                                    opacity="1"
                                    className=" fill-black dark:fill-white"
                                ></path>
                                <path
                                    d="M227.99 399.25c-6.08 0-12.18-2.21-16.99-6.67L83.5 274.33a25 25 0 0 1 .25-36.89l131-118.25c10.25-9.25 26.06-8.44 35.31 1.81s8.44 26.06-1.81 35.31l-110.72 99.94L245 355.92c10.12 9.39 10.72 25.21 1.33 35.33-4.93 5.31-11.62 8-18.34 8z"
                                    className=" fill-black dark:fill-white"
                                ></path>
                            </g>
                        </svg>
                        back
                    </button>
                </div>
                <div className="flex  gap-4 mb-3">
                    <div className=" relative w-2/5 max-h-32 flex justify-center items-center ">
                        <div className="relative  h-28 w-28 mt-2 overflow-hidden mb-2 rounded-full border-2 border-orange-500">
                            <Image
                                src="/image.jpg"
                                fill={true}
                                className="z-10"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" w-3/5 ">
                        <h1 className={" mt-3 " + orbitron.className}>
                            {data.username}
                        </h1>
                        <h4 className={" mt-1 " + orbitron.className}>
                            <span>🤍</span>
                            <span>favorite</span>
                        </h4>
                    </div>
                </div>
                <hr className=" border-orange-500 border" />
                <div className="flex mt-5 justify-around">
                    <button
                        onClick={onlogout}
                        className="border-2 border-orange-500 rounded-full py-1 w-32 "
                    >
                        Logout
                    </button>
                    <button className="border-2 border-orange-400  rounded-full py-1 w-32">
                        dashbord
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;
