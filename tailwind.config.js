// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        merriWeather: ['Merriweather', 'serif'],
        workSans: ['Work Sans', 'sans-serif']
      },
      color: {
        primary: {
          meduimseagreen: '#34dd8a',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
