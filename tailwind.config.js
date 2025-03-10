/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  // Ensure this line is included
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],  // Ensure daisyUI is properly added
};
