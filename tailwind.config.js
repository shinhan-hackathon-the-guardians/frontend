/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Button: "#366DFE",
        Main: "#AADAFF",
        Text: "#191A1C",
        Point: "#FAFFAF",
        BackGround: "#F5F6FA",
        LightGrey: "#D9D9D9",
        grey: "#888888",
      },
    },
  },
  plugins: [],
};
