"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";
import { z } from "zod";

const Signup = () => {
    const router = useRouter();
    const [user, setuser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttondisabled, setbuttondisabled] = useState(false);
    const [loding, setloding] = useState(false);

    const userSchema = z.object({
        username: z.string().min(6, "Invalid Username"),
        email: z.string().email("Invalid Email Address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long"),
    });

    const onsignup = async () => {
        try {
            setloding(true);
            const result = userSchema.safeParse(user);

            if (!result.success) {
                toast.error(result.error.message);
                setbuttondisabled(true);
                return;
            }

            if (buttondisabled) {
                return;
            }

            const response = await axios.post("./api/users/signup", user);
            if (response.data.status == 400) {
                toast.error(response.data.error);
            }
            toast.success("signup secessfully");
            router.push("/Login");
        } catch (error) {
            console.log(error.message);
        } finally {
            setloding(false);
        }
    };

    useEffect(() => {
        const result = userSchema.safeParse(user);
        setbuttondisabled(!result.success);
    }, [user]);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-black dark:text-white">
                <h1 className="text-4xl ">
                    {loding ? <Loading text={"SignUp"} size={"6"} /> : "SignUp"}
                </h1>
                <hr className="border-t border-gray-600 h-7" />
                <label htmlFor="username" className="text-left w-72 mb-2">
                    Username
                </label>

                <input
                    id="username"
                    type="text"
                    className="p-2 border text-black w-72 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    value={user.username}
                    onChange={(e) =>
                        setuser({ ...user, username: e.target.value })
                    }
                    placeholder="UserName"
                />
                <label htmlFor="email" className="text-left w-72 mb-2">
                    Email
                </label>

                <input
                    id="email"
                    type="text"
                    className="p-2 border text-black w-72 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    value={user.email}
                    onChange={(e) => {
                        setuser({ ...user, email: e.target.value });
                    }}
                    placeholder="Email"
                />
                <label htmlFor="passwowrd" className="text-left w-72 mb-2">
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    className="p-2 border text-black w-72 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    value={user.password}
                    onChange={(e) =>
                        setuser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                />
                <button
                    onClick={onsignup}
                    className="p-2 border text-black dark:text-white w-72 border-gray-800  dark:border-gray-300 rounded-lg mt-5 focus:outline-none focus:border-gray-600 hover:scale-105 hover:font-bold duration-100 "
                >
                    <span>
                        {buttondisabled ? "Fill Details" : "Signup Now"}
                    </span>
                </button>
                <Link
                    href="/Login"
                    className="mt-4 underline hover:text-blue-500"
                >
                    tap to login
                </Link>
            </div>
        </>
    );
};

export default Signup;
