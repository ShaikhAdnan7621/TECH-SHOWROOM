"use client";
import BackButton from "@/components/buttons/BackButton";
import Loading from "@/components/Loading";
import Mbutton from "@/components/buttons/Mbutton";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

function Page() {
    const [file, setFile] = useState();
    const [error, setError] = useState(null);
    const [imageview, setimageview] = useState("/imageifnotavilable.jpg");
    const [uploadedimage, setUploadedimage] = useState("");
    const [dragging, setDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isuploaded, setisuploaded] = useState(false);
    const [issleted, setissleted] = useState(false);

    const uploadfile = async (e) => {
        e.preventDefault();
        try {
            setUploading(true);
            const data = new FormData();
            data.set("file", file);
            const response = await axios.post(
                "/api/admin/post/image/add",
                data,
            );
            setisuploaded(true);
            setUploadedimage(response.data.path);
        } catch (error) {
            console.log(error);
        } finally {
            setUploading(false);
        }
    };
    const validateFile = (file) => {
        setError(null);
        const validTypes = ["image/jpeg", "image/png"];
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes
        if (!file) {
            setimageview("/imageifnotavilable.jpg");
            setissleted(false);
            setError("Please select a file.");
            return false;
        }
        if (!validTypes.includes(file.type)) {
            setimageview("/imageifnotavilable.jpg");
            setissleted(false);
            setError("Please select a valid image file. jpeg, png image.");
        } else if (file.size > maxSize) {
            setimageview("/imageifnotavilable.jpg");
            setissleted(false);
            setError("The file is too large. It must be less than 2MB.");
        } else {
            setimageview(URL.createObjectURL(file));
            setissleted(true);
            return true;
        }

        return false;
    };
    const fileInputRef = useRef();

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const onDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            fileInputRef.current.files = files;
            setFile(files[0]);
            validateFile(files[0]);
        }
        setDragging(false);
    };

    return (
        <div className="dark:text-white mb-28 pt-10">
            <div className="flex items-center justify-between ">
                <BackButton text={"Back"} />
                <div className="text-xl py-2 px-3 mb-2 w-10/12">Upload image for Post</div>
            </div>
            <div className="w-72 mx-auto">
                <form onSubmit={uploadfile}>
                    <label
                        htmlFor="fileinput"
                        className="cursor-pointer text-center"
                    >
                        <p>Click to select or drag and drop file</p>
                        <div className="flex justify-center ">
                            <div
                                className={`w-64 h-64 border  border-gray-500  py-2 rounded-lg shadow-lg relative ${
                                    dragging || uploading ? "opacity-50" : ""
                                }`}
                            >
                                <Image
                                    src={imageview}
                                    alt=""
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    className={`mx-auto  rounded-lg border-2 h-60 w-60 border-gray-500  ${
                                        issleted
                                            ? "border-solid"
                                            : "border-dashed"
                                    }`}
                                    width={240}
                                    height={240}
                                />

                                {uploading && (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-2xl">
                                        <Loading
                                            text={"Uploading"}
                                            size={"5"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {dragging && <div className="">Drop here</div>}
                    </label>
                    <input
                        type="file"
                        name="fileinput"
                        id="fileinput"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={(e) => {
                            setFile(e.target.files?.[0]);
                            validateFile(e.target.files?.[0]);
                        }}
                    />
                    <br />

                    {error && <p className="text-xs text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="border text-center text-black dark:text-white px-2 mt-5 rounded-md  w-72 border-gray-800 dark:border-gray-300 p-2"
                    >
                        upload
                    </button>
                </form>
            </div>
            <div className="mt-10">
                {isuploaded ? (
                    <div>
                        {" "}
                        <div className="w-72 mx-auto text-center">
                            <p>Image uploaded successfully</p>
                            <div
                                className={`w-64 h-64 border  border-gray-500  py-2 rounded-lg shadow-lg mx-auto `}
                            >
                                <Image
                                    src={uploadedimage}
                                    alt=""
                                    className={`mx-auto  rounded-lg border-2 h-60 w-60 border-gray-500 `}
                                    width={240}
                                    height={240}
                                />
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <p className="text-xs ">
                                Image path:{" "}
                                <span className=" text-gray-400 bg-gray-100">
                                    {uploadedimage}
                                </span>
                            </p>
                            <div className="mt-5">
                                <Mbutton
                                    text={"Copy"}
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            uploadedimage,
                                        );
                                        toast.success("Copied to clipboard");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Page;
