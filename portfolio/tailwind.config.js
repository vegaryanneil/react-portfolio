module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        primary: '#E1DFCC',
        secondary: '#EFE2BA',
        accent: '#F13C20',
        text: '#1D1D1B',
        other: '#C5CBE3',
      },
      fontFamily: {
        body: ['Raleway']
      }
    },
  }
}
  