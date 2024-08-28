/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Button: "#366DFE",
        Main: "#AADAFF",
        Text: "#191A1C",
        Point: "#FFFDF8",
        BackGround: "#F5F6FA",
        LightGrey: "#D9D9D9",
        grey: "#888888",
        green: "#06B04D",
      },
      height: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
      },
      fontFamily: {
        sans: ["Goorm Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
