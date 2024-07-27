/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: 1536,
      },
      colors: {
        primary: "#333333",
        secandari: "#B88E2F",
        brand: "#FFFFFF",
        navegrey: "#3A3A3A",
      },
      fontFamily: {
        Popins: ["Poppins", "sans-serif"],
        nunitoFont: ["Nunito", "sans-serif"],
        Montserrat:["Montserrat", "sans-serif"],
        Raleway:["Raleway", "sans-serif"],
        Opensans:["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
