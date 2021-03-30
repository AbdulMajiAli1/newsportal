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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        acidgreen: {
          light: '##89B15E',
          DEFAULT: '##84DB28',
          dark: '#89B15E',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        greenish: {
          dark: '#485218',
          DEFAULT: '#bccf59',
          light: '#8a9d2b',
        },
        chocolate: {
          dark: '#C4620F',
          DEFAULT: '#E8A165',
          light: '#E9AF7E',
        },
        waterblue: {
          dark: '#2288D0',
          DEFAULT: '#42B7F4',
          light: '#42B7F4',
        },
        amaranth: {
          dark: '#9B1059',
          DEFAULT: '#B13978',
          light: '#D26EA2',
        },
        navbarcolor: {
          dark: '#4B3842',
          DEFAULT: '#585255',
          light: '#7A7377',
        },
        bluelight: {
          dark: '#203ED8',
          DEFAULT: '#7382D0',
          light: '#7A7377',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
