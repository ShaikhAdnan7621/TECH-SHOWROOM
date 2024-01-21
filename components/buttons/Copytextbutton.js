// client component
"use client";

import React from "react";
import toast from "react-hot-toast";

function Copytextbutton(props) {
    return (
        <div>
            <button
                onClick={() => {
                    navigator.clipboard.writeText(props.text);
                    toast.success("Copied to clipboard");
                }}
            >
                COPY
            </button>
        </div>
    );
}

export default Copytextbutton;
