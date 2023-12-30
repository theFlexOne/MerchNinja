/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gray: {
          950: undefined,
          1000: '#0E1422',
          1100: '#0A101D',
          1200: '#070C18',
          1300: '#030712',
        },
        neutral: {
          725: '3A3A3A',
          750: '333333',
          775: '2C2C2C',
        },
        f1: {
          dark: {
            bg: '#1A1D21',
            panel: '#212529',
            field: '#262A2F',
            alt: '#292E32',
          },
        },
        primary: {
          100: '#F8EDD2',
          DEFAULT: '#DAA520',
          500: '#DAA520',
          900: '#41310A',
        },
      },
      keyframes: {
        'spin-opposite': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'slidein-top': {
          '0%': { transform: 'translateY(-1000%)' },
          '90%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-opposite-slow': 'spin-opposite 2s linear infinite',
        'slidein-top': 'slidein-top 0.25s ease-out',
      },
      inset: {
        '3/2': '150%',
        '4/3': '133.333333%',
        '5/4': '125%',
        '11/10': '110%',
      },
      margin: {
        headerHeight: 'var(--admin-header-height)',
        sidebarWidth: 'var(--admin-sidebar-width)',
      },
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('vacant', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`vacant${separator}${className}`)}:placeholder-shown`;
        });
      });
    },
  ],
};
