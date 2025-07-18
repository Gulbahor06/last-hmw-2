 /** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{html,js}"],
   theme: {
     extend: {
      backgroundImage: {
        'soft-diagonal': 'linear-gradient(135deg, #FFFFFF, #D4E7FE)',
     },
   },
   plugins: [],
 }
}