/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clawdao: {
          cyan: "#00E5FF",
          blue: "#0066FF",
          "silver-light": "#F5F7FA",
          "silver-dark": "#8A8F98",
          midnight: "#0B1220",
          graphite: "#2E3440"
        },
        base: {
          900: "#0B1220",
          800: "#0f1525"
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


