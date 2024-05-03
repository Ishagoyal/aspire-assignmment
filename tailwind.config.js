/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0C365A", // Adjusted to match the sidebar background color
        active: "#01D167",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Assuming 'Inter' is the font used
      },
      boxShadow: {
        "custom-gray": "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
