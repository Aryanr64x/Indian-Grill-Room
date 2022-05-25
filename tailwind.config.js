module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cabin: [ 'Cabin', 'sans-serif' ],
        makondo: [ 'Macondo', 'cursive' ]
      }
    },
    colors:{
      primary: '#A7CDBD',
      secondary: '#C16714',
      white: '#ffffff',
      black: '#000000',
      star: "#FDBD31"
    }
  },
  plugins: [],
}
