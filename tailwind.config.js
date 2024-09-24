/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '480px',
      // => @media (min-width: 640px) { ... }
      'tablet': '547px',
      // => @media (min-width: 640px) { ... }

      'laptop': '768px',
      // => @media (min-width: 1024px) { ... }
      'laptop1': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1680px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

