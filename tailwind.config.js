/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#051930',
        blue: '#005f99',
        sky: '#2b90d9',
        accent: '#00b4d8',
        ice: '#f4f9ff',
        white: '#ffffff',
        gray: '#f7fafc',
        border: '#e4ebf3',
        text: '#1a202c',
        muted: '#4a5568',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
      keyframes: {
        hZoom: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.07) translateX(-1%)' },
        },
        glowLine: {
          '0%': { boxShadow: '0 0 6px rgba(0,200,240,0.4), 0 0 14px rgba(0,200,240,0.15)' },
          '100%': { boxShadow: '0 0 16px rgba(0,200,240,0.9), 0 0 32px rgba(0,200,240,0.35)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        hZoom: 'hZoom 24s ease-in-out infinite alternate',
        glowLine: 'glowLine 3s ease-in-out infinite alternate',
        fadeUp: 'fadeUp 0.7s ease forwards',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
