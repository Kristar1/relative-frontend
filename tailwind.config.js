/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'tomorrow':'Tomorrow'
    },
    extend: {
      colors: {
        'name-gray': '#737bae',
      }
    },
  },
  plugins: [],
}