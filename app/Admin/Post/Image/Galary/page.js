import React from "react";
import fs from "fs";
import Copytextbutton from "@/components/buttons/Copytextbutton";
import BackButton from "@/components/buttons/BackButton";
import Image from "next/image";

function Page() {
    const path = `./public/Postimage/`;
    const subFolders = fs.readdirSync(path);

    return (
        <div className=" dark:text-white">
            <div className=" flex pt-10">
                <BackButton text={"Go Back"} />
            </div>
            <h1 className="text-3xl">Post Image Galary</h1>
            {subFolders.map((subFolder) => {
                return (
                    <>
                        <div className="justify-center">
                            <div className="flex">
                                <h1 className=" mt-4 mb-5 bg-slate-500 rounded-lg py-1 px-2">
                                    {subFolder}
                                </h1>
                            </div>
                            <div className="flex flex-wrap gap-4 p-2 border border-gray-500 rounded-lg">
                                {fs
                                    .readdirSync(path + subFolder)
                                    .map((subFile, index) => {
                                        return (
                                            <div
                                                className="p-2 border border-gray-500 rounded-lg mb-3 mx-auto sm:mx-0"
                                                key={index}
                                            >
                                                <div className="relative h-64 w-64 sm:w-40 sm:h-40 ">
                                                    <Image
                                                        src={`/Postimage/${subFolder}/${subFile}`}
                                                        alt="Image"
                                                        fill={true}
                                                        className="h-64 sm:w-40 sm:h-40  w-64"
                                                    />
                                                </div>
                                                <h1 className="w-64 sm:w-40 sm:text-xs whitespace-nowrap overflow-hidden my-2 ">
                                                    {subFile}
                                                </h1>
                                                <Copytextbutton
                                                    text={`/Postimage/${subFolder}/${subFile}`}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Page;
