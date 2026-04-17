/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kerala-dark': '#2d5e3f',
        'kerala-green': '#3a7a4f',
        'kerala-light': '#f5f1e8',
        'kerala-cream': '#fffaf7',
        'kerala-gold': '#d4af37',
        'kerala-accent': '#d4a574',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
