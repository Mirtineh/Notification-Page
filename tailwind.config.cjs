/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./index.html',
  ],
  theme: {
    colors:{
      'white':'hsl(0, 0%, 100%)',
      'red':'hsl(1, 90%, 64%)',
      'blue':'hsl(219, 85%, 26%)',
      'blue-light':'hsl(210, 60%, 98%)',
      'grey-blue-light': 'hsl(211, 68%, 94%)',
      'grey-blue-light-2': 'hsl(205, 33%, 90%)',
      'grayish-blue': 'hsl(219, 14%, 63%)',
      'dark-grayish-blue': 'hsl(219, 12%, 42%)',
      'very-dark-blue': 'hsl(224, 21%, 14%)'
    },
    fontFamily:{
      sans:['Plus', 'Jakarta', 'Sans']
    },
    extend: {},
  },
  plugins: [],
}