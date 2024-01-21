import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productcard = (props) => {
    const index = props.index;
    const phone = props.phone;
    const Price = props.Price;
    const rank = props.rank;
    const ram = props.ram;
    const storage = props.storage;
    const id = props.id;

    return (
        <div
            key={index}
            className="sm:mt-7 border-t-2 border-gray-600  mt-5 shadow-lg dark:shadow-lg shadow-gray-500  overflow-hidden dark:shadow-gray-700 rounded-md"
        >
            <h1 className="text-xl mb-2 mt-4 text-black  sm:text-3xl text-center font-bold dark:text-white">
                {phone}
            </h1>
            <hr className="mb-2 border-gray-900 dark:border-gray-200" />
            <div className="flex p-1">
                <div className="">
                    <div className="w-40 h-40 dark:z-10 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-md overflow-hidden relative">
                        <div>
                            <Image
                                src="/image.jpg"
                                fill={true}
                                className="-z-10 object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className=" grow pb-2 lg:pl-9 mt-2 pl-3 md:pr-5 pr-3">
                    <p className=" whitespace-nowrap py-1 md:mt-7 sm:mt-3 items-center flex md:justify-between justify-end">
                        <ul className="md:flex items-center hidden">
                            <li className=" text-black py-1 ">
                                <p className=" flex items-center pl-1 bg-stone-200 rounded-md mr-1">
                                    <span>Storage </span>{" "}
                                    <svg
                                        width="16"
                                        height="16"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                    >
                                        <g>
                                            <path
                                                fill="#000000"
                                                d="M13.707 5.293a1 1 0 1 0-1.414 1.414L16.586 11H5a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"
                                                data-original="#000000"
                                            ></path>
                                        </g>
                                    </svg>
                                </p>
                            </li>
                            {storage
                                ? storage.map((element, i) => {
                                      return (
                                          <li
                                              className=" text-black "
                                              key={`${index}+${i}`}
                                          >
                                              <span className="p-1 bg-stone-200 rounded-md mr-1">
                                                  {element}
                                              </span>
                                          </li>
                                      );
                                  })
                                : ""}
                        </ul>
                        <span className="md:text-3xl text-right sm:text-2xl ">
                            Rank {rank}
                        </span>
                    </p>
                    <h1 className="mt-4 flex text-indigo-800 items-center  md:justify-between justify-end md:mt-7 ">
                        <ul className="md:flex items-center hidden">
                            <li className=" text-black py-1 ">
                                <p className=" flex items-center pl-1 bg-stone-200 rounded-md mr-1">
                                    <span>ram </span>{" "}
                                    <svg
                                        width="16"
                                        height="16"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                    >
                                        <g>
                                            <path
                                                fill="#000000"
                                                d="M13.707 5.293a1 1 0 1 0-1.414 1.414L16.586 11H5a1 1 0 1 0 0 2h11.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"
                                                data-original="#000000"
                                            ></path>
                                        </g>
                                    </svg>
                                </p>
                            </li>
                            {ram
                                ? ram.map((element, i) => {
                                      return (
                                          <li
                                              className=" text-black "
                                              key={`${index}+${i}`}
                                          >
                                              <span className="p-1 bg-stone-200 rounded-md mr-1">
                                                  {element}
                                              </span>
                                          </li>
                                      );
                                  })
                                : ""}
                        </ul>
                        <span className="text-right text-lg sm:text-3xl">
                            Price{" "}
                            <span className="text-red-600 font-bold">
                                {Price}
                            </span>
                        </span>
                    </h1>

                    <div className="flex mt-5 justify-end ">
                        <Link
                            className="max-w-xs w-36 sm:w-4/5 border py-1 text-center bg-gray-200 border-gray-600 dark:text-black rounded-md sm:text-2xl md:text-3xl md:py-2 md:px-3 sm:mt-4 "
                            href={`/Products/Show/${id}`}
                        >
                            View Product
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productcard;
