/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files and pages.
  content: [
    './App.{js,jsx,ts,tsx}',            // your root entry
    './app/**/*.{js,jsx,ts,tsx}',        // all pages/layouts in Expo Router
    './components/**/*.{js,jsx,ts,tsx}', // any shared components
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light: {
          100: '#D6C6FF',
          200: '#A8B5BD',
          300: '#9CA4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23'
        },
        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
};
