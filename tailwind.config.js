/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      red: "#d61d22",
      grey: "#afadad",
      lapisLazuli: "#2a61ab",
      batteryChargedBlue: "#21aae2",
      coralRed: "#f44336",
      dollarBill: "#8bc24a",
      pumpkin: "#ff7d1e",
      chineseSilver: "#cccccc",
      lightGreen: "#94E394",
      blueGrey: "#d2d8f9",
      oxfordBlue: "#0a2548",
      faintOxfordBlue: "#10346320",
      deepKaomaru: "#294260",
      shadowBlue: "#7e8d9f",
      oceanGreen: "#5bc391",
      maastrichtBlue: "#001530",
      faintMaastrichtBlue: "#03152CE6",
      pictonBlue: "#3EAFFF",
      faintPictonBlue: "#3EAFFF63",
      yankeesBlue: "#172B45",
      foregroundMaastrichtBlue: "#001C3F",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      titillium: ["Titillium Web", "sans-serif"],
    },
    screens: {
      // => @media (min-width: 300px) { ... }
      xxs: "300px",

      // => @media (min-width: 456px) { ... }
      xs: "481px",

      // => @media (min-width: 640px) { ... }
      sm: "640px",

      // => @media (min-width: 768px) { ... }
      md: "768px",

      // => @media (min-width: 1024px) { ... }
      lg: "1024px",

      // => @media (min-width: 1280px) { ... }
      xl: "1280px",

      // => @media (min-width: 1536px) { ... }},
      xxl: "1536px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
