/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b0b0f",
          800: "#0f0f15"
        }
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};


