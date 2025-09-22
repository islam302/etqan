/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        arab: ['Cairo', 'Tajawal', 'Noto Kufi Arabic', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#2D4354',
          sage: '#73766A',
          cream: '#FED7A5',
          rose: '#9E6752',
          mauve: '#534145',
          night: '#20212B',
        },
        primary: {
          50: '#e7edf2',
          100: '#cfd9e0',
          200: '#a6bcc8',
          300: '#7e9fb1',
          400: '#567398',
          500: '#2D4354',
          600: '#273a49',
          700: '#21313e',
          800: '#1b2833',
          900: '#152028',
        },
        accent: {
          50: '#fff3e4',
          100: '#ffe7cb',
          200: '#FED7A5',
          300: '#f2b788',
          400: '#e0976d',
          500: '#c67d57',
          600: '#9E6752',
          700: '#735048',
          800: '#534145',
          900: '#3a2e31',
        },
        neutral: {
          50: '#f6f6f7',
          100: '#e6e7e8',
          200: '#cfd1d3',
          300: '#b3b6b9',
          400: '#8f9498',
          500: '#73766A',
          600: '#5f6258',
          700: '#4b4e46',
          800: '#363832',
          900: '#20212B',
        },
      },
      boxShadow: {
        'elevated': '0 10px 25px -5px rgba(0,0,0,0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


