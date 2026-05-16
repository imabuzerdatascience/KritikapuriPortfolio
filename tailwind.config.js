/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        pinkPrimary: '#fbcfe8', // Light pink (pink-200)
        pinkLight: '#fdf2f8', // Very light pink (pink-50)
        pinkAccent: '#f472b6', // Darker pink for accents (pink-400)
        textDark: '#1f2937', 
        textLight: '#4b5563',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
