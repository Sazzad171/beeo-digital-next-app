const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        volkhov: ['var(--font-volkhov)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
