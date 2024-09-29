/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--textColor)',
        mainBg: 'var(--mainColor)',
        secondary: 'var(--secondColor)',
      },
      screens: {
        hmd: '968px',
      },
      animation: {
        'scroll-mobile': 'scroll 10s linear infinite',
        'scroll-tablet': 'scroll 22s linear infinite',
        'scroll-desktop': 'scroll 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
