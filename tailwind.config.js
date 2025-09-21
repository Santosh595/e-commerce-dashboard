/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        blue: "#E3F5FF",
        purple: "#E5ECF6",
        primary: {
          light: "#F7F9FB",
          dark: "rgba(255,255,255,0.05)",
        },
        background: {
          light: "#FFFFFF",
          dark: "#1C1C1C",
        },
        text: {
          light: "#1C1C1C",
          dark: "#FFFFFF",
        },
        borderc: {
          light: "rgba(28,28,28,0.1)",   // #1C1C1C/10
          dark: "rgba(255,255,255,0.1)", // #FFFFFF/10
        },
      },
      fontSize: {
        base: "14px", 
        sm: "12px",    
        lg: "24px",    
      },
    },
  },
  plugins: [],
}
