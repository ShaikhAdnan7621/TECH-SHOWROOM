import React from "react";
import posts from "@/app/models/postsmodles";
import BackButton from "@/components/buttons/BackButton";
import Link from "next/link";
import Image from "next/image";

const getpostlist = async () => {
    try {
        const results = await posts.find();
        return results;
    } catch (err) {
        console.log(err);
    }
};

async function Page() {
    const data = await getpostlist();

    return (
        <div className="dark:text-white pt-10">
            <div className="flex">
                <BackButton text={"Back"} />
                <h1 className="text-3xl font-bold ml-2">Posts</h1>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-5">
                {data.map((post, index) => (
                    <div
                        key={index}
                        className="dark:bg-gray-950 bg-gray-50 dark:text-white rounded-lg overflow-hidden shadow-xl dark:shadow-transparent border-t "
                    >
                        <div className="w-72 h-110 dark:border-gray-950 bg-white dark:bg-gray-950   ">
                            <div>
                                <div className="h-64 w-64 mx-auto mt-3 rounded-lg shadow-lg dark:shadow-gray-950 overflow-hidden relative">
                                    <Image
                                        src={post.image[0].url}
                                        alt="Image"
                                        fill={true}
                                        className="w-64 h-64 rounded-lg object-cover dark:border-white border bg-white"
                                    />
                                </div>
                                <div className="p-2">
                                    <h6 className=" line-clamp-2 h-[72x] font-bold">
                                        {post.title}
                                    </h6>
                                    <hr className="my-2 " />
                                    <p className="line-clamp-2 opacity-60">
                                        {post.description}
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-2 items-center h-11 justify-center">
                                    <Link
                                        href={`/Post/Show?id=${post.id}`}
                                        className="p-2 w-40 text-black text-center dark:text-white hover:font-bold rounded-full hover:dark:border-white border-2 hover:border-black border-gray-500 focus:border-gray-800 duration-150 ease-out focus:outline-none hover:scale-110   dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-sm hover:shadow-gray-600 dark:hover:shadow-gray-500 "
                                    >
                                        View Post
                                    </Link>
                                    <Link
                                        href={`/Admin/Post/Edit?id=${post.id}`}
                                        className="px-2 p-0.5 h-full w-12 group gap-1 relative flex items-center text-black text-center dark:text-white hover:font-bold rounded-full duration-200
                                        hover:w-20 hover:dark:border-white border-2 hover:scale-110   dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-sm hover:shadow-gray-600 dark:hover:shadow-gray-500"
                                    >
                                        <span className=" z-10">Edit</span>
                                        <div className=" w-10 h-10 p-2 absolute opacity-0 right-0 top-0 group-hover:opacity-100 duration-200">
                                            <svg
                                                className="w-full h-full"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 512 512"
                                            >
                                                <g>
                                                    <path
                                                        d="M51.2 353.28 0 512l158.72-51.2zM87.16 316.492 336.96 66.69l108.61 108.61L195.77 425.102zM504.32 79.36 432.64 7.68c-10.24-10.24-25.6-10.24-35.84 0l-23.04 23.04 107.52 107.52 23.04-23.04c10.24-10.24 10.24-25.6 0-35.84z"
                                                        className="fill-black dark:fill-white z-0"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
