/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors:{
      hover:'#647E68',
      bgApp:'#2C3333',
      bgCircle: '#F2F7A1',
      letter:'#E5E5CB',
      bgModal:'#F7F1E5',
      bgForm:'#7F8487',
      bgButton:'white'
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
    },
    scale: {
      'hover-120': '1.2', // Ajusta el valor según el tamaño de agrandamiento deseado
    },
   
  },
  plugins: [],
}