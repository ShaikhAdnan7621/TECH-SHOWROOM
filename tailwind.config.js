/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            width: {
                110: "28rem", // h-96: 24rem * 16px/rem = 448px
                128: "32rem", // h-128: 32rem * 16px/rem = 512px
                192: "48rem", // h-192: 48rem * 16px/rem = 768px
                256: "64rem", // h-256: 64rem * 16px/rem = 1024px
                384: "96rem", // h-384: 96rem * 16px/rem = 1536px
                512: "128rem", // h-512: 128rem * 16px/rem = 2048px
                768: "192rem", // h-768: 192rem * 16px/rem = 3072px
                1024: "256rem", // h-1024: 256rem * 16px/rem = 4096px
                1536: "384rem", // h-1536: 384rem * 16px/rem = 6144px
                2048: "512rem", // h-2048: 512rem * 16px/rem = 8192px
            },
            height: {
                110: "28rem", // h-96: 24rem * 16px/rem = 448px
                128: "32rem", // h-128: 32rem * 16px/rem = 512px
                192: "48rem", // h-192: 48rem * 16px/rem = 768px
                256: "64rem", // h-256: 64rem * 16px/rem = 1024px
                384: "96rem", // h-384: 96rem * 16px/rem = 1536px
                512: "128rem", // h-512: 128rem * 16px/rem = 2048px
                768: "192rem", // h-768: 192rem * 16px/rem = 3072px
                1024: "256rem", // h-1024: 256rem * 16px/rem = 4096px
                1536: "384rem", // h-1536: 384rem * 16px/rem = 6144px
                2048: "512rem", // h-2048: 512rem * 16px/rem = 8192px
            },
            screens: {
                xxs: "400px",
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
