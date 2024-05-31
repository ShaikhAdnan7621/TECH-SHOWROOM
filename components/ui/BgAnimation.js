"use client";

import { useEffect, useState, useMemo } from "react";

function useWindowSize() {
    const [size, setSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return size;
}

function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleMouseMove(e) {
                setPosition({ x: e.clientX, y: e.clientY });
            }
            window.addEventListener("mousemove", handleMouseMove);
            return () =>
                window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return position;
}

export default function BgAnimation() {
    const { width, height } = useWindowSize();
    const { x, y } = useMousePosition();

    const dotSize = 20;
    const numberOfRows = Math.floor(height / dotSize);
    const numberOfColumns = Math.floor(width / dotSize);

    const dots = useMemo(() => {
        // Only render dots on the client side

        if (typeof window !== "undefined") {
            return Array.from({ length: numberOfRows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-1">
                    {Array.from({ length: numberOfColumns }).map(
                        (_, colIndex) => {
                            const distance = Math.sqrt(
                                Math.pow(
                                    colIndex * dotSize + dotSize / 2 - x,
                                    2,
                                ) +
                                    Math.pow(
                                        rowIndex * dotSize + dotSize / 2 - y,
                                        2,
                                    ),
                            );
                            let dotClass = "bg-gray-300 dark:bg-gray-900";
                            if (distance < 30)
                                dotClass = "bg-gray-900 dark:bg-gray-300 scale-125 duration-200";
                            else if (distance < 60)
                                dotClass = "bg-gray-600 dark:bg-gray-500 scale-110 duration-200";
                            else if (distance < 80)
                                dotClass = "bg-gray-400 dark:bg-gray-700 scale-105 duration-200";

                            return (
                                <div
                                    key={`dot-${rowIndex}-${colIndex}`}
                                    className={`dot rounded-full h-4 w-4 ${dotClass} transition-all `}
                                ></div>
                            );
                        },
                    )}
                </div>
            ));
        }
    }, [numberOfRows, numberOfColumns, x, y]);

    return (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-black w-full h-screen p-1 -z-10">
            <div className="flex flex-col gap-1">{dots}</div>
        </div>
    );
}
