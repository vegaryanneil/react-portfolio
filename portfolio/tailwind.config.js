module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        primary: '#FFC947',
        secondary: '#EFEFEF',
        accent: '#185ADB',
        text: '#0A1931',
      },
      fontFamily: {
        body: ['Raleway']
      }
    },
  }
}
  