module.exports = {
    mode: "jit",
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            transitionDuration: {
                0: "0ms",
                2000: "2000ms",
                4000: "4000ms",
            },
        },
        fontFamily: {
            'typewriter': ['"Special Elite"', 'monospace'],
        }
    },
    variants: {
        extend: {},
        display: ["responsive", "group-hover", "group-focus"],
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
        require('@tailwindcss/typography'),
    ],
};
