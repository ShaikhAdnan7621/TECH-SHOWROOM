import React from "react";
import fs from "fs";
import BackButton from "@/components/buttons/BackButton";
import Copytextbutton from "@/components/buttons/Copytextbutton";
import Image from "next/image";

function Page() {
    const path = `./public/Productimage/`;
    const subFolders = fs.readdirSync(path);

    return (
        <div className=" dark:text-white">
            <div className=" flex mt-5">
                <BackButton text={"Go Back"} />
            </div>
            <h1>products Image Galary</h1>
            {subFolders.map((subFolder) => {
                return (
                    <>
                        <div className="justify-center">
                            <div className="flex">
                                <h1 className=" mt-8 mb-5 bg-slate-500 rounded-lg py-1 px-2">
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
                                                        className="h-64 sm:w-40 sm:h-40  w-64"
                                                        src={`/Productimage/${subFolder}/${subFile}`}
                                                        alt=""
                                                        fill={true}
                                                    />
                                                </div>
                                                <h1 className="w-64 sm:w-40 sm:text-xs whitespace-nowrap overflow-hidden my-2 ">
                                                    {subFile}
                                                </h1>

                                                <Copytextbutton
                                                    text={`/Productimage/${subFolder}/${subFile}`}
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
