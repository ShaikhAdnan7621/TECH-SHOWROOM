import React, { useState } from "react";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const Adminedit = (props) => {
    const username = props.username;
    const email = props.email;
    const admin1 = props.admin;
    const [loading, setloading] = useState(false);
    const [admin, setadmin] = useState(admin1);

    const userid = props.userid;
    const editadmin = async (turn) => {
        try {
            setloading(true);
            const responce = await axios.post("/api/managers/makeadmin", {
                email: email,
                turn: turn,
            });
            const data = responce.data.saveuser;
            setadmin(data.isAdmin);
            admin
                ? toast.success("Admin Removed Sucessfully")
                : toast.success("Admin Create Sucessfully");
        } catch (error) {
            console.log(error);
        } finally {
            setloading(false);
        }
    };
    return (
        <div>
            <div className="text-left text-black dark:text-white">
                <div>
                    {" "}
                    UserName: <span>{username}</span>
                </div>
                <div className="mt-4">
                    {" "}
                    email : <span>{email}</span>
                </div>
                <div className="">
                    {" "}
                    {loading ? <Loading text={"please wait"} size={"5"} /> : ""}
                </div>
            </div>
            <hr className="mt-5 border-gray-800" />
            <button
                className="p-2 border  text-black dark:text-white w-72 border-gray-800  dark:border-gray-300 rounded-lg mt-5 focus:outline-none focus:border-gray-600"
                onClick={() => (admin ? editadmin(false) : editadmin(true))}
            >
                {" "}
                {admin ? "Remove Admin" : "create Admin"}
            </button>
        </div>
    );
};

export default Adminedit;
