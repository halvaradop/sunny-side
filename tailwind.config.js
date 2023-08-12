/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        base: '900px'
      },
      colors: {
        yellow: {
          DEFAULT: 'hsl(51, 100%, 49%)'
        },
        red: {
          DEFAULT: 'hsl(7, 99%, 70%)'
        },
        cyan: {
          DEFAULT: 'hsl(167, 40%, 24%)',
          100: 'hsl(198, 62%, 26%)',
          200: 'hsl(168, 34%, 41%)',
          300: '#3ebefd'
        },
        blue: {
          DEFAULT: 'hsl(212, 27%, 19%)',
          100: 'hsl(213, 9%, 39%)',
          200: 'hsl(232, 10%, 55%)',
          300: 'hsl(210, 4%, 67%)'
        }
      },
      fontFamily: {
        barlow: "'Barlow', sans-serif",
        fraunces: "'Fraunces', serif"
      },
      backgroundImage: {
        header: "url('./src/assets/mobile/header.jpg')"
      }
    },
  },
  plugins: [],
}

