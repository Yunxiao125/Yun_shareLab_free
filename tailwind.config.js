/**
 * tailwind.config.js
 * Tailwind CSS configuration for the self‑awareness site.
 */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        neutral: "#F7FFF7",
      },
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
