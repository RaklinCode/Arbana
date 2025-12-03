/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hunter: '#102A24',
        'deep-green': '#0A1F1C',
        gold: '#C6A87C',
        cream: '#F5F5F0',
      }
    },
  },
  plugins: [],
}
