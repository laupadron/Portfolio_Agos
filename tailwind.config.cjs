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
      bgApp:'#E5E5CB',
      bgCircle: '#F2F7A1',
      letter:'#4F4557',
      bgModal:'#F7F1E5'
        
      
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
  },
  plugins: [],
}