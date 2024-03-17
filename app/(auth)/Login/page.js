"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";

const Login = (obj) => {
    const { searchParams } = obj;
    const frome = searchParams.from
    const [user, setuser] = useState({
        email: "",
        password: "",
    });
    const [buttondisabled, setbuttondisabled] = useState(false);
    const [loding, setloding] = useState(false);
    const onLogin = async () => {
        try {
            setloding(true);
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
        if (user.email.length > 0 && user.password.length > 0) {
            setbuttondisabled(false);
        } else {
            setbuttondisabled(true);
        }
    }, [user]);
    return (
        <>
            <div className="flex flex-col items-center  justify-center min-h-screen py-2 dark:text-white ">
                <h1 className="text-4xl ">
                    {loding ? <Loading text={"Login "} size={"5"} /> : "Login"}
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
                    className="p-2 border dark:bg w-72 border-gray-300 rounded-lg mb-2 focus:outline-none text-black focus:border-gray-600"
                    value={user.password}
                    onChange={(e) =>
                        setuser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                />
                <button
                    onClick={onLogin}
                    className={`p-2 border w-72 text-black dark:text-white border-gray-800  dark:border-gray-300 rounded-lg mt-5 focus:outline-none focus:border-2 focus:border-gray-800 ${
                        buttondisabled ? " opacity-30 " : "  "
                    }`}
                    disabled={buttondisabled}
                >
                    <span>Login now</span>
                </button>
                <Link
                    className=" mt-3 underline text-blue-500 focus:outline-none focus:text-blue-900 focus:font-semibold"
                    href="/Signup"
                >
                    tap to SignUp
                </Link>
            </div>
        </>
    );
};

export default Login;
