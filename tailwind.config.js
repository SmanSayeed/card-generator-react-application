// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white':'#fff',
        'yellow':'#ffff00',
        'neon-green': '#39ff14',
        'very-dark-slate': '#030B31',
        'dark-blue': '#3C2B6B',
        'slate-black': '#1F1F1F',
      },
      backgroundImage: {
        'card-bg': 'linear-gradient(135deg, rgb(3, 11, 49) 0%, rgb(60, 43, 107) 100%)',
        'card-inner': 'radial-gradient(circle, rgba(3,11,49,0.1), rgba(3,11,49,0.3), rgba(60,43,107,0.15), rgba(31, 31, 31, 0.2))',
      },
      boxShadow: {
        'neon-green': '0 0 10px 2px rgba(10, 255, 20, 0.8)',
        'white':'0 0 10px 2px rgba(255, 255, 255, 0.8)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};