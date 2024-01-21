import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productstripe = (props) => {
    const item = props.item;
    return (
        <div className="h-44 mt-2 px-5 pt-3 pb-5 dark:bg-black dark:text-white rounded-xl border border-gray-600 overflow-x-scroll no-scrollbar overflow-hidden">
            <div className="flex w-fit">
                <div className=" w-36 h-36 mr-5 rounded-lg bg-white overflow-hidden">
                    {item.image.length > 0 ? (
                        <div className="relative w-36 h-36">
                            <Image
                                src={item.image[0]}
                                alt="Image"
                                fill={true}
                                className=" rounded-lg object-cover dark:border-white border bg-white"
                            />
                        </div>
                    ) : (
                        <div className="relative w-36 h-36">
                            <Image
                                // src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                                src="/imageifnotavilable.jpg"
                                alt="Image"
                                fill={true}
                                className=" rounded-lg object-cover dark:border-white border bg-white"
                            />
                        </div>
                    )}
                </div>
                <div className="w-80">
                    <div className="h-16">
                        <span>Phone</span>
                        <h1>{item.Phone}</h1>
                    </div>
                    <div className="h-16">
                        <span>brand</span>
                        <p>{item.brand}</p>
                    </div>
                </div>

                <div className="w-80">
                    <div className="h-16">
                        <span>Operating System</span>
                        <p>{item.OS}</p>
                    </div>
                    <div className="h-16">
                        <span>Processor</span>
                        <p>{item.Processor}</p>
                    </div>
                </div>

                <div className="w-80">
                    <div className="h-16">
                        <span>Display size</span>
                        <p>{item.Display[0]}</p>
                    </div>
                    <div className="h-16">
                        <span>Display secefication</span>
                        <p className="mt-1">{item.Display[1]}</p>
                    </div>
                </div>

                <div className="w-80 ">
                    <div className="h-16">
                        <span>RAM</span>
                        <p className="flex gap-2 ">
                            {item.RAM
                                ? item.RAM.map((element, i) => (
                                      <span
                                          className="px-2 py-1 rounded-md bg-slate-400"
                                          key={i}
                                      >
                                          {element}
                                      </span>
                                  ))
                                : "noram"}
                        </p>
                    </div>
                    <div className="h-16">
                        <span>Storage</span>
                        <p className="flex gap-2">
                            {item.Storage
                                ? item.Storage.map((element, i) => (
                                      <span
                                          className="px-2 py-1 rounded-md bg-slate-400"
                                          key={i}
                                      >
                                          {element}
                                      </span>
                                  ))
                                : "noram"}
                        </p>
                    </div>
                </div>

                <div className="w-80 ">
                    <div className="h-16">
                        <span>RearCamera</span>
                        <p className="flex gap-2 ">
                            {item.RearCamera
                                ? item.RearCamera.map((element, i) => (
                                      <span
                                          className="px-2 py-1 rounded-md bg-slate-400"
                                          key={i}
                                      >
                                          {element}
                                      </span>
                                  ))
                                : "noram"}
                        </p>
                    </div>
                    <div className="h-16">
                        <span>FrontCamera</span>
                        <p className="flex gap-2">
                            {item.FrontCamera
                                ? item.FrontCamera.map((element, i) => (
                                      <span
                                          className="px-2 py-1 rounded-md bg-slate-400"
                                          key={i}
                                      >
                                          {element}
                                      </span>
                                  ))
                                : "noram"}
                        </p>
                    </div>
                </div>

                <div className="w-80">
                    <div className="h-16">
                        <span>ReleaseDate</span>
                        <p>{item.ReleaseDate.substring(0, 10)}</p>
                    </div>
                    <div className="h-16">
                        <span>Price</span>
                        <p>{item.Price}</p>
                    </div>
                </div>

                <div className="w-80">
                    <div className="h-16">
                        <span>Rank</span>
                        <p>{item.Like?.length}</p>
                    </div>
                    <div className="h-11">
                        <div className="flex  gap-4 items-center h-11 ">
                            <Link
                                href={`/Admin/Product/Edit/${item._id}`}
                                className="px-2 p-0.5 h-full w-12 group gap-1 relative flex items-center text-black text-center dark:text-white hover:font-bold rounded-full duration-200
                                        hover:w-20 hover:dark:border-white border-2 hover:border-black border-gray-500 focus:border-gray-800 ease-out focus:outline-none"
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

                            <Link
                                href={`/Admin/Product/Addimage/${item._id}`}
                                className="px-2 p-0.5 h-full w-16 group gap-1 relative flex items-center text-black text-center dark:text-white hover:font-bold rounded-full duration-200
                                        hover:w-24 hover:dark:border-white border-2 hover:border-black border-gray-500 focus:border-gray-800 ease-out focus:outline-none"
                            >
                                <span className=" z-10">Image</span>
                                <div className=" w-10 h-10 p-2 absolute opacity-0 right-0 top-0 group-hover:opacity-100 duration-200">
                                    <svg
                                        className="w-full h-full"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                    >
                                        <g className="group-hover:rotate-90 origin-center duration-200">
                                            <path
                                                d="M244.316 362.668c-58.816 0-106.668-47.852-106.668-106.668S185.5 149.332 244.316 149.332c58.813 0 106.664 47.852 106.664 106.668S303.13 362.668 244.316 362.668zm0-181.336c-41.175 0-74.668 33.496-74.668 74.668s33.493 74.668 74.668 74.668c41.172 0 74.664-33.496 74.664-74.668s-33.492-74.668-74.664-74.668zm0 0"
                                                className="fill-black dark:fill-white z-0"
                                            ></path>
                                            <path
                                                d="M279.793 512h-70.957c-17.066 0-32.148-12.117-35.86-28.82l-8.98-39.938c-14.637-6.207-28.59-14.312-41.687-24.21l-38.891 12.284c-16.684 5.184-34.816-1.898-43.18-16.832l-35.367-61.16c-8.473-15.148-5.613-33.793 6.848-45.527l30.14-27.711c-.914-8.129-1.363-16.191-1.363-24.086s.45-15.957 1.344-24.086l-29.973-27.582c-12.61-11.863-15.488-30.508-7.105-45.46l35.586-61.548c8.254-14.765 26.43-21.781 43.007-16.683l38.954 12.308c13.097-9.898 27.05-18.004 41.687-24.215l9-39.976C176.688 12.118 191.77 0 208.836 0h70.957c17.066 0 32.148 12.117 35.86 28.82l8.98 39.938c14.637 6.207 28.59 14.312 41.687 24.21l38.89-12.284c16.728-5.141 34.817 1.898 43.18 16.832l35.372 61.16c8.468 15.148 5.61 33.793-6.852 45.527l-30.14 27.711c.894 8.129 1.343 16.215 1.343 24.086s-.449 15.957-1.343 24.086l29.992 27.562c.043.043.086.086.148.13a37.197 37.197 0 0 1 6.957 45.331l-35.586 61.547c-8.254 14.762-26.386 21.824-43.027 16.66l-38.957-12.308c-13.098 9.898-27.05 18.004-41.684 24.215l-9.004 39.976C311.941 499.883 296.86 512 279.793 512zM125.574 385.258c3.668 0 7.274 1.258 10.176 3.648 14.656 12.055 30.633 21.356 47.55 27.586a15.988 15.988 0 0 1 10.071 11.496l10.86 48.215c.488 2.219 2.43 3.797 4.628 3.797h70.954c2.199 0 4.14-1.578 4.609-3.754l10.879-48.258a15.988 15.988 0 0 1 10.07-11.496c16.895-6.23 32.895-15.531 47.55-27.586a15.947 15.947 0 0 1 15-2.922l46.954 14.829c2.238.703 4.629-.13 5.652-1.965l35.586-61.547c1.067-1.899.68-4.5-1.023-6.164l-36.012-33.11a15.993 15.993 0 0 1-4.992-14.144c1.406-9.45 2.113-18.836 2.113-27.903 0-9.07-.707-18.457-2.113-27.906a16.011 16.011 0 0 1 4.992-14.144l36.094-33.196c1.621-1.511 2.008-4.16.832-6.27l-35.371-61.163c-1.149-2.028-3.582-2.836-5.801-2.133l-46.89 14.805c-5.165 1.644-10.794.535-14.997-2.922-14.656-12.055-30.636-21.356-47.554-27.586a15.975 15.975 0 0 1-10.067-11.496l-10.86-48.215c-.534-2.176-2.476-3.754-4.671-3.754h-70.957c-2.195 0-4.137 1.578-4.606 3.754l-10.882 48.258a16.017 16.017 0 0 1-10.067 11.496c-16.898 6.23-32.898 15.531-47.531 27.586-4.203 3.457-9.879 4.543-14.996 2.922l-46.957-14.829c-2.195-.68-4.629.13-5.652 1.965l-35.586 61.524c-1.067 1.922-.68 4.566 1.09 6.23l35.968 33.047a15.996 15.996 0 0 1 4.992 14.145c-1.41 9.449-2.113 18.836-2.113 27.902s.703 18.453 2.113 27.902c.79 5.25-1.09 10.54-4.992 14.145L33.52 331.242c-1.622 1.516-2.004 4.16-.833 6.274l35.372 61.16c1.128 2.027 3.562 2.816 5.8 2.137l46.895-14.81c1.578-.51 3.2-.745 4.82-.745zm0 0"
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
        </div>
    );
};

export default Productstripe;
