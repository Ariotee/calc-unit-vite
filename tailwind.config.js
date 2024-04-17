/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      base: "1000px",
      inp: '100%',
      fromto: '150px',
      modal: '80px'
    },
    height: {
      base: "350px",
      screen: '100vh',
      block: '100%',
      fromto: '40px'
    },
    padding: {
      cont: '50px 80px',
      btn: '7px 10px',
      inp: '10px'

    },
    borderRadius: {
      rad10: '10px',
      btn: '5px'
    },
    backgroundColor: {
      btn: '#909090',
      main: '#343434',
      block: '#DBDBDB'
    },
    fontSize: {
      h1: '30px'
    },

    extend: {},
  },
  plugins: [],
}

