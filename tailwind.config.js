/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','about.html',],
  content: ['index.html','about.html'],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 20s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
      colors: {
        font: '#fff000',
        nav: '#1e3a8a',
        latar: '#3e6b98',
        
      },
      fontFamily:{
        custom:['Bridone','Times new roman','Serif'],
      }
    },
  },
  plugins: [],
}

