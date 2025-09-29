/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'young': "linear-gradient(rgba(0, 41, 83, 0.8), rgba(0, 41, 83, 0.8)), url('/images/young.png')",
      },
      spacing: {
        '17px': '17px',
        '20px': '20px',
        '27px': '27px',
        '35px': '35px',
        '40px': '40px',
        '54px': '54px',
        '118px': '118px',
        '329px': '329px',
        '532px': '532px',
        '477px': '477px',
      },
      fontSize: {
        '16px': '16px',
        '55px': '55px',
      },
      letterSpacing: {
        '-0.01em': '-0.01em',
      },
      colors: {
        gray: {
          500: '#838383',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
}

