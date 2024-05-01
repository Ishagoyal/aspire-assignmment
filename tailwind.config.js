/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0C365A", // Adjusted to match the sidebar background color
        "teal-accent": "#14B8A6", // Teal color for icons and highlights
        "light-blue": "#E0F2FE", // Light blue for background sections or cards
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Assuming 'Inter' is the font used
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", // Custom shadow for cards or elements
      },
    },
  },
  plugins: [],
};
