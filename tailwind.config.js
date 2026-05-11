/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        steel: {
          50: '#f4f6f8',
          100: '#e4e9ed',
          200: '#c9d3db',
          300: '#a3b3bf',
          400: '#768fa0',
          500: '#5a7285',
          600: '#4c5f70',
          700: '#404f5d',
          800: '#38444f',
          900: '#323b45',
          950: '#1a2027',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        rust: '#c0392b',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,158,11,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245,158,11,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
