"use client";
import React, { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import Image from "next/image";

function Show(props) {
    const [data, setdata] = useState(props.data);
    const [images, setimage] = useState(props.data.image);
    const [nthimahge, setnthimahge] = useState(0);
    const [comenttext, setcomenttext] = useState("");
    const [commentloading, setcommentloading] = useState(false);
    const [likeloading, setlikeloading] = useState(false);
    const addcomment = async (id) => {
        try {
            setcommentloading(true);
            const data = { id: id, comment: comenttext };
            const response = await axios.post("/api/post/addcomment", data);
            if (response.data.redirect) {
                window.location.href = "/Login";
            }
            setdata(response.data.data);
            setcomenttext("");
        } catch (error) {
            console.log(error);
        } finally {
            setcommentloading(false);
        }
    };

    const addlike = async (id) => {
        try {
            setlikeloading(true);
            const data = { id: id };
            const response = await axios.post("/api/post/addlike", data);
            if (response.data.redirect) {
                window.location.href = "/Login";
            }
            setdata(response.data.data);
            setcomenttext("");
        } catch (error) {
            console.log(error);
        } finally {
            setlikeloading(false);
        }
    };

    return (
        <div>
            <div className="dark:text-white  mx-auto grid place-content-center mb-4 relative w-72 h-72 md:w-110 md:h-110 sm:w-64 sm:h-64">
                <Image
                    src={
                        images[nthimahge]
                            ? images[nthimahge].url
                            : "https://eurogrid.in/wp-content/uploads/2017/06/product_image_not_available.png"
                    }
                    fill={true}
                    alt="Phone Image"
                    className=" object-cover shadow-xl rounded-lg bg-stone-200 dark:bg-stone-800"
                />
                {images.length > 1 && (
                    <div className=" md:w-110  sm:w-64 flex justify-center gap-2.5 items-center mx-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-20 w-full text-white ">
                        <div
                            className=" rounded-full hover:-mt-1 text-xl shadow-lg cursor-pointer "
                            onClick={() =>
                                nthimahge === 0
                                    ? setnthimahge(images.length - 1)
                                    : setnthimahge(nthimahge - 1)
                            }
                        >
                            {"<"}
                        </div>
                        {images.length > 0 &&
                            images.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-4 h-4 rounded-full hover:-mt-1 shadow-lg cursor-pointer bg-gray-500 "
                                    onClick={() => setnthimahge(index)}
                                    onMouseOver={() => setnthimahge(index)}
                                ></div>
                            ))}
                        <div
                            className=" rounded-full text-xl hover:-mt-1  shadow-lg cursor-pointer "
                            onClick={() =>
                                nthimahge === images.length - 1
                                    ? setnthimahge(0)
                                    : setnthimahge(nthimahge + 1)
                            }
                        >
                            {">"}
                        </div>
                    </div>
                )}
            </div>
            <hr className="mt-10 mb-8 dark:text-white" />
            <div className="flex gap-1">
                <h1 className="text-3xl  dark:text-white sm:w-11/12 mx-auto">
                    {data.title}
                </h1>

                <div>
                    <div className="h-10 flex justify-center items-center rounded-lg shadow-lg text-white group border ">
                        <button
                            className="w-10 h-10 p-1 group-active:scale-110 focus:outline-none"
                            onClick={() => {
                                addlike(data._id);
                            }}
                        >
                            {likeloading ? (
                                <div className="h-full w-full px-1">
                                    <Loading text={""} size={"5"} />
                                </div>
                            ) : (
                                <svg
                                    viewBox="0 0 512 512"
                                    className="h-full w-full "
                                >
                                    <g>
                                        <path
                                            d="M476.229 223.454c-13.977-16.845-35.861-27.309-57.113-27.309h-56.219c12.652-20.162 22.174-40.451 27.977-59.771 8.855-29.482 8.545-55.182-.897-74.322-10.635-21.558-32.187-33.431-60.683-33.431a16 16 0 0 0-14.792 9.902C292.314 92.34 234.44 169.69 179.913 220.645c-5.564-19.327-23.395-33.511-44.488-33.511h-68.5c-25.529 0-46.299 20.77-46.299 46.298v203.646c0 25.529 20.77 46.299 46.299 46.299h68.5c15.617 0 29.443-7.781 37.833-19.661 12.692 12.211 29.518 19.661 47.955 19.661h172.481c19.068 0 36.048-8.119 49.106-23.479 10.764-12.663 18.409-29.77 22.107-49.471L490.33 275c3.411-18.17-1.597-36.476-14.101-51.546zM149.723 437.079c0 7.884-6.414 14.299-14.298 14.299h-68.5c-7.884 0-14.299-6.415-14.299-14.299V233.433c0-7.884 6.415-14.298 14.299-14.298h68.5c7.884 0 14.298 6.414 14.298 14.298zm309.156-167.983-25.422 135.428c-4.252 22.651-16.931 46.854-39.764 46.854H221.212c-21.774 0-39.488-19.694-39.488-43.902V261.735c60.311-50.068 127.854-136.057 157.672-200.327 15.909 2.692 20.279 11.549 21.884 14.801 10.385 21.051 1.766 69.522-41.697 126.199a15.999 15.999 0 0 0 12.697 25.736h86.837c11.8 0 24.552 6.179 32.486 15.742 4.467 5.386 9.357 14.13 7.276 25.21z"
                                            className="fill-black z-10 dark:fill-white origin-center group-hover:rotate-[-10deg] group-focus:rotate-[-10deg] group-active:rotate-[-20deg] scale-75 group-active:scale-95 duration-100"
                                        ></path>
                                    </g>
                                </svg>
                            )}
                        </button>
                        <div className="py-1">
                            <span className="border mx-1 h-full border-gray-400 mt5 "></span>
                        </div>
                        <span className="px-2 text-black dark:text-white">
                            {data.likes.length}
                        </span>
                    </div>
                </div>
            </div>

            <p className="mt-10 dark:text-white sm:w-4/5 mx-auto ">
                {data.description}
            </p>
            <hr className="mt-10 dark:text-white" />
            <div className="mt-5 dark:text-white sm:w-11/12 mx-auto ">
                <h1 className="text-3xl mb-5">Comments</h1>
                <div className="border rounded-lg flex items-center p-1 gap-1">
                    <input
                        type="text"
                        className="w-full p-2 dark:bg-black rounded-lg shadow-lg focus:outline-none border "
                        placeholder="Add Comment"
                        value={comenttext}
                        onChange={(e) => setcomenttext(e.target.value)}
                    />
                    <button
                        className="p-2 rounded-lg shadow-lg text-white group border focus:outline-none "
                        onClick={() => {
                            if (comenttext === "") {
                                return;
                            }

                            addcomment(data._id);
                        }}
                    >
                        {commentloading ? (
                            <div className="w-7">
                                <Loading text={""} size={"5"} />
                            </div>
                        ) : (
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 512.001 512.001"
                                className="group-hover:translate-x-1 group-focus:translate-x-1 group-focus:-translate-y-1 group-hover:-translate-y-1 duration-300 ease-in-out group-active:translate-x-5 group-active:-translate-y-5 group-active:duration-200 group-active:opacity-0 "
                            >
                                <g>
                                    <path
                                        d="M511.969 9.4c-.184-2.437-1.174-4.868-2.799-6.501-2.717-2.729-7.252-3.68-10.847-2.211L6.236 200.708a10 10 0 0 0-1.24 17.922l87.408 50.545 74.552 161.02c3.029 6.542 12.362 7.672 16.872 2.054.025-.031.054-.058.078-.089l59.336-75.761 93.812 54.249c5.005 2.894 11.954.785 14.267-4.877L511.349 13.734c.54-1.324.733-2.83.62-4.334zM32.698 211.543 402.331 61.298 101.917 251.57l-69.219-40.027zm150.94 95.729c-1.501 1.468-2.647 3.724-2.925 5.854l-10.118 77.322-56.816-122.714 313.278-198.42-243.419 237.958zm7.187 83.612 8.055-60.138 26.873 15.54-34.928 44.598zm146.311-3.294-130.091-75.227L342.22 180.22 474.613 50.799 337.136 387.59zM122.591 389.419c-1.929-1.929-4.5-2.892-7.071-2.892-2.572 0-5.144.965-7.071 2.892l-76.384 76.377c-3.788 3.787-3.899 10.242 0 14.141 3.86 3.86 10.292 3.851 14.143 0l76.383-76.377c3.901-3.9 3.901-10.24 0-14.141zM10.852 491.148c-5.368 0-10.002 4.669-10.002 10.001 0 5.35 4.497 10 10.001 10.001 5.442 0 10.002-4.57 10.002-10 .001-5.283-4.723-10.001-10.001-10.002z"
                                        className="fill-black dark:fill-white"
                                    ></path>
                                    <path
                                        d="M261.115 416.922c-1.928-1.929-4.499-2.891-7.07-2.891-2.573 0-5.145.965-7.072 2.891l-49.509 49.505c-3.9 3.901-3.9 10.24-.001 14.141 3.789 3.789 10.374 3.771 14.143 0l49.509-49.505c3.901-3.9 3.901-10.24 0-14.141zM76.083 298.91c-3.817-3.817-10.346-3.797-14.143 0l-28.295 28.283c-3.861 3.86-3.857 10.293 0 14.15 1.895 1.895 4.484 2.834 7.072 2.832 2.596-.002 5.191-.95 7.082-2.831l28.284-28.293c3.901-3.9 3.901-10.24 0-14.141z"
                                        className="fill-black dark:fill-white"
                                    ></path>
                                    <circle
                                        cx="176.03"
                                        cy="502.001"
                                        r="10"
                                        className="fill-black dark:fill-white"
                                    ></circle>
                                    <circle
                                        cx="12"
                                        cy="362.991"
                                        r="10"
                                        className="fill-black dark:fill-white"
                                    ></circle>
                                </g>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="mt-5">
                    {data.comments.length > 0
                        ? data.comments.map((comment, index) => (
                              <div
                                  key={index}
                                  className="p-2 rounded-lg shadow-lg mb-3 border-t "
                              >
                                  <div className="will-change-contents">
                                      <p className="">@{comment.username}</p>
                                      <hr className="border-gray-400 dark:border-gray-500 mt-1" />
                                  </div>
                                  <p className="pl-1 mt-1 ">
                                      {comment.comment}
                                  </p>
                              </div>
                          ))
                        : "No Comments Yet"}
                </div>
            </div>
        </div>
    );
}

export default Show;
