import React from "react";

const Loading = (props) => {
    const text = props.text;
    const size = props.size;
    return (
        <div className="flex my-1 items-center justify-center">
            {text && (
                <div className="mr-2 text-black  dark:text-white">{text}</div>
            )}
            <div className={`animate-spin  h-${size} w-${size} transition-all duration-1000  `}>
                <svg className="h-full w-full" x="0" y="0" viewBox="0 0 24 24">
                    <g>
                        <path
                            d="M12 23C5.9 23 1 18.1 1 12c0-.6.4-1 1-1s1 .4 1 1c0 5 4 9 9 9s9-4 9-9-4-9-9-9c-.6 0-1-.4-1-1s.4-1 1-1c6.1 0 11 4.9 11 11s-4.9 11-11 11z"
                            className="fill-black dark:fill-white"
                        ></path>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Loading;

// how to use is following
// import Loading from "@/components/Loading";
// const [loading, setloading] = useState(true)
//  <Loading  text={"Login"} size={"5"}  />
