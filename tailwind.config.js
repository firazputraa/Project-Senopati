/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
      screens:{
        'IphoneSE':'375px',
        'IphoneXR':'414px',
      },
      colors: {
        font: '#fff000',
        nav: '#1e3a8a',
        latar: '#3e6b98',
        
      },
      fontFamily:{
        logo:['Bridone'],
      }
    },
  },
  plugins: [],
}

