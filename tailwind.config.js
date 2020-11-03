module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "accent-1": "#333",
            },
        },
        fontFamily: {
            serif: ["Rubik"],
        },
        inset: {
            "1/2": "50%",
            "0": 0,
        },
    },
    variants: {},
    plugins: [],
};
