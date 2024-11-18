/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'lg': '1024px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          default: '#565add',
          hover: '#6469FF',
          active: '#292DB8',
          light: '#F0F1FF',
          focus: '#6569ff',
        },
        purple: {
          dark: '#2b1c50',
          medium: '#3d2e7c',
          light: '#4b42ae',
          darkest: '#1b0448',
        },
        neutral: {
          background: '#fcfcfc',
          border: '#ebeff6',
          overlay: '#e0daf3',
        }
      },
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        seravek: ['Seravek', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 0 0 4px rgba(85, 89, 221, 0.4)',
        'menu': '0 0 0 1px rgba(85, 89, 221, 0.1)',
      },
      blur: {
        'banner': '80px',
      },
      backgroundImage: {
        'gradient-banner': 'linear-gradient(to right, rgba(210, 213, 255, 1), rgba(240, 241, 255, 0))',
      },
      height: {
        '13': '52px',
        '15': '60px',
        '130': '130px',
        '75': '300px',
        '30': '120px',
      },
      width: {
        '780': '780px',
        '75': '300px',
      },
      padding: {
        '25': '100px',
        '30': '120px',
      },
      borderWidth: {
        '2': '2px',
      },
      textSize: {
        '22': '22px',
        '26': '26px',
        '32': '32px',
      },
      maxWidth: {
        'header-lg': '1024px',
      },
      minWidth: {
        'sm': '640px',
      },
      margin: {
        '60': '60px',
        '30': '120px',
      },
    },
  },
  plugins: [],
}

