/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        glitch: 'glitch 1s infinite',
        glow: 'glow 2s infinite',
      },
      boxShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
};