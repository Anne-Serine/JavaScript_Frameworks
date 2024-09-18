/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        'ecom-bg': '#DCDBD5',
        'ecom-light': '#F6F6F6',
        'ecom-white': '#FFFFFF',
        'ecom-dark': '#383733',
        'ecom-black': '#040201',
      },
    },
  },
  plugins: [],
}

