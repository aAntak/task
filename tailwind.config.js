/** @type {import('tailwindcss').Config} */

/* TODO: I kept color token names consistent as in figma but:
  1. Figma has inconsistent color naming
  2. I'd argue we should use semantic color naming (primary, secondary, danger, warning, etc.) 
  --primitives--hover--purple: #5c33e7;
*/

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
          headlineLarge: '30px',
          headlineMedium: '18px',
          body: '14px',
          subtitle: '13px',
          subtitleMedium: '13px',
          subtitleSmall: '11px',
        },
        fontWeight: {
          normal: 400,
          medium: 500,
        },
        colors: {
          grey: {
            92: '#E0E0E1',  
            50: '#7A7C85',
          },
          black: {
            26: '#41424B',
            22: '#373842',
            18: '#2E3038',
            15: '#292A32',
            12: '#202128',
          },
          purple: '#673AFF', 
          'light-purple': '#808CF4',
          yellow: {
            1: '#D79053',
            2: '#B08B69', 
          },
          red: '#CA4365', 
        },
      },
    },
  plugins: [],
}

