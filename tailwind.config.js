module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      screens: {
        'md': '768px',
        'lg': '992px'
      },
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
          "headline-large": ['1.875rem', {
            lineHeight: '1.25',
            fontWeight: '500',
          }],
          "headline-medium": ['1.125rem', {
            lineHeight: '1.25',
            fontWeight: '500',
          }],
          "body": ['0.875rem', {
            lineHeight: '1.5',
            fontWeight: '400',
          }],
          "subtitle": ['0.8125rem', {
            lineHeight: '1.25',
            fontWeight: '400',
          }],
          "subtitle-medium": ['0.8125rem', {
            lineHeight: '1.5',
            fontWeight: '500',
          }],
          "subtitle-small": ['0.6875rem', {
            lineHeight: '1.5',
            fontWeight: '500',
          }],
        },
        fontWeight: {
          normal: 400,
          medium: 500,
        },
        colors: {
          grey: {
            95: '#EAEAEB', // Was not in initial list of color tokens, but was added after inspecting designs.
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
      boxShadow: {
        'xl': '0 0 60px 0 rgba(0, 0, 0, 0.35)',
      }
    },
  plugins: [],
}

