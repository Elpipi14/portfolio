/** @type {import('tailwindcss').Config} */
import flyonui from "flyonui";
import flyonuiPlugin from "flyonui/plugin";

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        customMedia: "678px",
      },
    },
  },
  plugins: [
    flyonui,
    flyonuiPlugin
  ],
};
