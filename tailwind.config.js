/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  // I like this option for development so I have all the classes to work with
  safelist: process.env.NODE_ENV === 'development' ? [{ pattern: /.*/ }] : [],
};
