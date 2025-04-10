/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ptsans: ['"PT Sans"', 'sans-serif'],
        quantico: ['Quantico', 'sans-serif'],
      },
      colors: {
        rtlblue: {
          DEFAULT: '#1E90FF',
          dark: '#2A3F58',
          300: '#CBD5E1',
          500: '#5B7395',
          200: '#E3E8EF',
        },
        primary: '#007882',
        purple: '#D3C7E4',
      },
    },
  },
  plugins: [],
}