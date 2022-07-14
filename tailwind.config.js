/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lift: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(8px) rotate(5deg)'
          }
        }
      },
      animation: {
        lift: 'lift 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
