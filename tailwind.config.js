/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md2: "885px",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/bg2.png')",
        "hero-appartment": "url('/public/view.avif')",
      },
    },
  },
  plugins: [],
};
