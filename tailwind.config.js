/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      'xs':'320px',
      'sm': '640px',
      'md': '768px',
      'xmd':'800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    

    extend: {
      
      colors: {
        bla: '#161918',
        gre: '#03BE5E',
        deepblack:'#00160B',
        Tblack: '#222624',
        Ablack:'#0F2010',
        
      },
      fontFamily:{
        Sora: ['Sora'],
      }
    },
  },
  plugins: [],
}

