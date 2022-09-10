/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx}',
  ],
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serrat': ['Montserrat', 'sans-serif']
      },
      gridTemplateColumns: {
        gallery: 'repeat(3,1fr)'
      }
    },
  },
  plugins: [],
}
