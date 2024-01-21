import Image from "next/image";
import Link from "next/link";
import React from "react";

function Postframe(props) {
    const data = props.data;

    return (
        <Link href={`/Post/Show?id=${data.id}`}>
            <div className=" pb-2 w-72 mb-5 dark:bg-gray-950 bg-gray-50 dark:text-white rounded-lg shadow-xl dark:shadow-transparent border-t  ">
                {data.image.length > 0 ? (
                    <div className="relative h-64 w-64 mt-3 mx-auto mb-4">
                        <Image
                            src={data.image[0].url}
                            alt="post Image"
                            fill={true}
                            className="w-64 h-64 rounded-lg object-cover dark:border-white border "
                        />
                    </div>
                ) : (
                    <div className="relative h-64 w-64 mt-3 mb-4">
                        <Image
                            src="/imageifnotavilable.jpg"
                            fill={true}
                            alt="Image Not work"
                            className="w-64 h-64 rounded-lg object-cover dark:border-white border "
                        />
                    </div>
                )}
                <div className="px-2">
                    <h1 className="line-clamp-1 ">{data.title}</h1>
                    <hr className="my-2" />
                    <div className="h-14">
                        <p className="line-clamp-2  opacity-60 mb-3">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Postframe;
