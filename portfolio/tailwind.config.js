// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  "#2563eb", // primary
          green: "#16a34a", // accent
          white: "#ffffff",
          ink:   "#0b1220", // near-black for text
          soft:  "#f8fafc", // soft background
        },
      },
      container: { center: true, padding: "1rem" },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
}
