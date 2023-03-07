/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B65C6",
        secondary: "#EEF1F6",
        tertiary: "#0e1133",

        lightBlue: "#E1F6FE",
        lightPink: "#FDEEDC",
        lightGreen: "#E1FDE2",
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
      fontFamily: {
        IBMPlex: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
