module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        betis: '#F3DCC9',
      },
      colors: {
        'red-betis': '#D73D41',
        'brown-betis': '#743A15',
        'ground-betis': '#513320',
        'silver-betis': '#F5F6FA',
        'green-betis': '#5B6A00',
        'black-betis': '#001702',
        'fading-betis': '#8A8A8A',
      },
      fontSize: {
        '5xl-betis': '44px',
      },
      padding: {
        '30-betis': '30px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
