"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/components/Loading";

const Signup = () => {
    const router = useRouter();
    const [user, setuser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttondisabled, setbuttondisabled] = useState(false);
    const [loding, setloding] = useState(false);

    const onsignup = async () => {
        try {
            setloding(true);
            const response = await axios.post("./api/users/signup", user);
            toast.success("signup secessfully");
            router.push("/Login");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setloding(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setbuttondisabled(false);
        } else {
            setbuttondisabled(true);
        }
    }, [user]);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-black dark:text-white">
                <h1 className="text-4xl ">
                    {loding ? <Loading text={"SignUp"} size={"8"} /> : "SignUp"}
                </h1>
                <hr className="border-t border-gray-600 h-7" />
                <label htmlFor="username" className="text-left">
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
                <label htmlFor="email" className="text-left">
                    Email
                </label>

                <input
                    id="email"
                    type="text"
                    className="p-2 border text-black w-72 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
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
                    className="p-2 border text-black w-72 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    value={user.password}
                    onChange={(e) =>
                        setuser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                />
                <button
                    onClick={onsignup}
                    className="p-2 border text-black dark:text-white w-72 border-gray-800  dark:border-gray-300 rounded-lg mt-5 focus:outline-none focus:border-gray-600 "
                >
                    {buttondisabled ? (
                        <span>Fill Details</span>
                    ) : (
                        <span>signup now</span>
                    )}
                </button>
                <Link href="/Login">tap to Login</Link>
            </div>
        </>
    );
};

export default Signup;
