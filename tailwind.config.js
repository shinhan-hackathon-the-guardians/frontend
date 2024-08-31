/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Button: "#0046ff",
        // Button: "#0033ff",
        // Button: "#3366ff",
        Main: "#AADAFF",
        Text: "#191A1C",
        Point: "#FFFDF8",
        BackGround: "#F5F6FA",
        LightGrey: "#D9D9D9",
        grey: "#888888",
        green: "#06B04D",
        red: "#FF0909",
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
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
