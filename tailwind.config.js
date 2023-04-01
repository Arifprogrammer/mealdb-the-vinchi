/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7874f2",

          secondary: "#fcd0c4",

          accent: "#7ff485",

          neutral: "#231C27",

          "base-100": "#FAFAFA",

          info: "#7399F2",

          success: "#148F76",

          warning: "#FACC57",

          error: "#EA7B7E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
