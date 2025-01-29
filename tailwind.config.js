/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '321px',
        sm: '426px',   // Default: min-width of 640px
        md: '769px',   // Default: min-width of 768px
        lg: '1024px',  // Default: min-width of 1024px
        xl: '1280px',  // Default: min-width of 1280px
        '2xl': '1536px', // Default: min-width of 1536px
      },
      
    },
  },
  plugins: [],
}