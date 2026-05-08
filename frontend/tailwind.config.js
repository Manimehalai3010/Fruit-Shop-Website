/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },

        leaf: {
          500: "#65a30d",
          600: "#4d7c0f",
        },
      },

      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        "card-hover": "0 20px 40px rgba(0,0,0,0.12)",
        fruit: "0 10px 20px rgba(34,197,94,0.2)",
      },
    },
  },

  plugins: [],
};