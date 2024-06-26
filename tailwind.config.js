/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        width:1536,
      },
      colors: {
        primary: "#333333",
        secandari: "#B88E2F",
        brand: "#FFFFFF",
        navegrey: "#244255",
      },
      fontFamily: {
        nunitoFont: ["Nunito", "sans-serif"],
        interFont: ["Inter", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
        lugrasimo: ["Lugrasimo", "cursive"],
        lobster: ["Lobster", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        poppins:["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

