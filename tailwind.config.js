const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          // 'text-shadow': '0px 0px 16px #7DD3FC',
          'text-shadow': '0px 0px 24px #FFFFFF77',
        },
        '.text-glow-none': {
          'text-shadow': 'none',
        },
      });
    }),
  ],
}
