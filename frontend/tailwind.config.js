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
      'black-shade': "rgba(0, 0, 0, .5)",
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
      'green': "#0f0",
      'green-alt': "rgba(3, 147, 3, 0.619)",
      'green-bg': "rgba(3, 147, 3, 0.089)",
      'black-fade': "rgba(0, 153, 255, 0.06)",
      'gray-alt': "rgb(110, 110, 110)"
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
      '270px': "290px",
      '400px': '400px',
      '1120px': '1120px',
      '600px': '600px',
      '1300px': "1300px",
      '1080px': '1080px',
      '840px': '840px',
      '609px': '609px'
    },

    extend: {
      backgroundImage: {
        heroImage: "linear-gradient(rgba(8,0, 58, .5), rgba(8, 0, 58, .7)), url('./public/Princeton-header.jpg')",
        sobHero: "linear-gradient(rgba(8,0, 58, .5), rgba(8, 0, 58, .5)), url('./public/school-of-business-logo.webp')",
        contactImg: "url('./public/gallery-1.png')",
        contactImgMod: "linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .3)), url('./public/gallery-1.png')",
        sotHero: "linear-gradient(rgba(8,0, 58, .3), rgba(8, 0, 58,.3)), url('./public/princeton cs.jpg')",
        educ: "url('./public/educ.jpg')",
        math: "url('./public/math.jpg')",
        tech: "url('./public/princeton-sot.jpg')",
        med: "url('./public/school-of-med.jpg')",
        somedHero: "linear-gradient(rgba(8,0, 58, .3), rgba(8, 0, 58,.3)), url('./public/med.jpg')",
        smsHero: "linear-gradient(rgba(8,0, 58, .6), rgba(8, 0, 58, .5)), url('./public/soms.jpeg')",
        soeHero: "linear-gradient(rgba(8,0, 58, .6), rgba(8, 0, 58, .5)), url('./public/soe.jpeg')",
        profile: " url('./public/school-of-business-logo.webp')"
        
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}