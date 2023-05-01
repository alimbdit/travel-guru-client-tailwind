/** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e1ea5b",
        
"secondary": "#71f7c6",
        
"accent": "#ea9570",
        
"neutral": "#2A3237",
        
"base-100": "#FCFCFD",
        
"info": "#0D74F2",
        
"success": "#7DE3B5",
        
"warning": "#F9A51A",
        
"error": "#EC797B",
        },
      },
    ],
  },
  // plugins: [
  //   daisyui(),
  // ],
  plugins: [require("daisyui")],
}