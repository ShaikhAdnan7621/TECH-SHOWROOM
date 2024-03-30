"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";
import { z } from "zod";

const Login = (obj) => {
    const { searchParams } = obj;
    const frome = searchParams.from;
    const [user, setuser] = useState({
        email: "",
        password: "",
    });
    const [buttondisabled, setbuttondisabled] = useState(false);
    const [loding, setloding] = useState(false);

    const userSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    });

    const onLogin = async () => {
        try {
            setloding(true);

            if (!userSchema.safeParse(user).success) {
                toast.error("Invalid Email Address or Password");
                setbuttondisabled(true);
                return;
            }

            if (buttondisabled) {
                return;
            }
            const response = await axios.post("./api/users/login", user);
            if (!response.data.success) {
                toast.error(response.data.message);
                return;
            }
            window.location.href = `${frome ? frome : "/"}`;
            toast.success("login secessfully");
        } catch (error) {
            console.log("err", error.message);
        } finally {
            setloding(false);
        }
    };

    useEffect(() => {
        if (userSchema.safeParse(user).success) {
            setbuttondisabled(false);
        } else {
            setbuttondisabled(true);
        }
    }, [user]);
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen dark:text-white ">
                <h1 className="text-4xl ">
                    {loding ? <Loading text={"Login "} size={"7"} /> : "Login"}
                </h1>
                <hr className="border-t w-72 mt-2 border-gray-600 h-7" />
                <label htmlFor="email" className="text-left">
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    className="p-2 border w-72 border-gray-300 rounded-lg mb-4 focus:outline-none text-black  focus:border-gray-600"
                    value={user.email}
                    onChange={(e) =>
                        setuser({ ...user, email: e.target.value })
                    }
                    placeholder="Email"
                />
                <label htmlFor="password" className="text-left">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="p-2 border dark:bg w-72 border-gray-300 rounded-lg mb-2  focus:outline-none text-black focus:border-gray-600" //input mode left to right
                    value={user.password}
                    onChange={(e) =>
                        setuser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                />
                <button
                    onClick={onLogin}
                    className="p-2 border text-black dark:text-white w-72 border-gray-800  dark:border-gray-300 rounded-lg mt-5 focus:outline-none focus:border-gray-600 "
                >
                    <span>{buttondisabled ? "Fill Details" : "Login now"}</span>
                </button>
                <Link className="mt-4 underline " href="/Signup">
                    tap to SignUp
                </Link>
            </div>
        </>
    );
};

export default Login;
