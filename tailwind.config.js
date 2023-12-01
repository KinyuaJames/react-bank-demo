/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html" ,
    // "./src/**/*.{html,js,}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#00040f",
        secondary:"00f6ff",
        dimWhite:"rgba(255,255,255,0.7)",
        dimBlue:"rgba(0,151,124,0.1)",
      },
      fontFamily:{
        poppins:["Poppins", "san-serif"],
        britanny:["britanny", "san-serif"],
        glacialindiff:["glacialindiff", "san-serif"],
        glacialbold:["glacialbold", "san-serif"],
      },
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"760px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px",
    },
  },
  plugins: [],
}

