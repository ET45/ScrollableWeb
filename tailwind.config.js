/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        100: "5rem",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};
