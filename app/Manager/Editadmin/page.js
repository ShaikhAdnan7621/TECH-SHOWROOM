"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";
import Adminedit from "@/components/admin/Adminedit";
import Link from "next/link";

function Createadminid() {
    const [email, setemail] = useState("");
    const [haveuser, sethaveuser] = useState(false);
    const [user, setuser] = useState(false);
    const [loading, setloading] = useState(false);

    const getadmindata = async () => {
        try {
            setloading(true);
            const responce = await axios.post("/api/managers/findadminedit", {
                email: email,
            });
            if (!responce.data.data) {
                sethaveuser(false);
                toast.error("User not founded please check email");
                return;
            }
            sethaveuser(true);
            toast.success("User founded");
            const data = responce.data.data;
            setuser(data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setloading(false);
        }
    };

    return (
        <div className="h-full w-full flex-col text-center text-black dark:text-white flex items-center justify-center">
            <Link href={"/Manager"}>Go Back</Link>
            <div>
                <h1>
                    <input
                        className="border-2 rounded-md  w-72 border-gray-800 text-black dark:text-white dark:bg-black dark:border-gray-300 p-2 "
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />
                </h1>
                <button
                    className="border text-center text-black dark:text-white px-2 mt-5 rounded-md  w-72 border-gray-800 dark:border-gray-300 p-2"
                    onClick={getadmindata}
                >
                    seach user
                </button>
                <div>
                    {loading ? <Loading text={"please wait"} size={"5"} /> : ""}
                </div>
            </div>
            <div className="mt-12">
                {haveuser ? (
                    <Adminedit
                        userid={user._id}
                        username={user.username}
                        admin={user.isAdmin}
                        email={user.email}
                    />
                ) : (
                    "Pleas search User"
                )}
            </div>
        </div>
    );
}

export default Createadminid;
