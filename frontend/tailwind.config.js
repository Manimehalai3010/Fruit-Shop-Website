/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
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
          700: "#15803d",
        },

        leaf: {
          100: "#d9f99d",
          400: "#84cc16",
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
        fruit: "0 20px 40px rgba(34,197,94,0.25)",
      },

      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at top right, rgba(34,197,94,0.08), transparent 35%)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};