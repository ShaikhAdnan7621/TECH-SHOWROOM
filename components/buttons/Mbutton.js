'use client';
import React from "react";

//create react functional component to make button to use every where

const Mbutton = (props) => {
    return (
        <button
            className={`border text-center text-black dark:text-white px-2  rounded-md  w-72 border-gray-800 dark:border-gray-300 p-2 `}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};
export default Mbutton;
