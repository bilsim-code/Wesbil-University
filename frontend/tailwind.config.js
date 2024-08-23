/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gold': 'rgb(236, 201, 1)',
      'gold-fade': "rgba(255, 217, 1, 0.777)",
      'gold-fade-x': 'rgba(255, 217, 0, 0.616)',
      'white': '#fff',
      'white-fade': "rgba(255,255,255,.2)",
      'black': "#000",
      'royalblue': 'royalblue',
      'transparent': 'transparent',
      'almost-black': "#333",
      'red': "red",
      'gray': '#959595',
      'gray-fade': "rgba(128, 128, 128, 0.216)",
      'blue-shade-1': 'rgb(7, 28, 95)',
      'blue-shade-fade': 'rgba(7, 28, 95, 0.582)',
      'heroBg': "rgba(8,0, 58, .1)",
      'purple': 'purple',
      'green': "#0f0"
    },
    screens: {
      'nav-ul-md': '890px',
      '480px': '480px',
      'footer-md': "768px",
      'lg': '1040px',
      'test-xl': "980px",
      'test-lg': "560px",
      'test-md': "370px",
      'test-sm': "320px",
      '308': '308px',
      '430px': '430px',
      '240px': '240px',
      '400px': '400px',
      '1120px': '1120px'
    },

    extend: {
      backgroundImage: {
        heroImage: "linear-gradient(rgba(8,0, 58, .5), rgba(8, 0, 58, .7)), url('./src/assets/Princeton header.jpg')",
        sobHero: "linear-gradient(rgba(8,0, 58, .5), rgba(8, 0, 58, .5)), url('./src/assets/school-of-business-logo.webp')",
        contactImg: "url('./src/assets/gallery-1.png')",
        sotHero: "linear-gradient(rgba(8,0, 58, .3), rgba(8, 0, 58,.3)), url('./src/assets/princeton cs.jpg')",
        educ: "url('./src/assets/educ.jpg')",
        math: "url('./src/assets/math.jpg')",
        tech: "url('./src/assets/princeton-sot.jpg')",
        med: "url('./src/assets/school-of-med.jpg')",
        somedHero: "linear-gradient(rgba(8,0, 58, .3), rgba(8, 0, 58,.3)), url('./src/assets/med.jpg')",
        smsHero: "linear-gradient(rgba(8,0, 58, .6), rgba(8, 0, 58, .5)), url('./src/assets/soms.jpeg')",
        soeHero: "linear-gradient(rgba(8,0, 58, .6), rgba(8, 0, 58, .5)), url('./src/assets/soe.jpeg')"
        
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}