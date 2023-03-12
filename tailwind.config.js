/** @type {import('tailwindcss').Config} */
const Color = require('color');
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const colors = {
  primary: '#2b4efe',
  secondary: '#0e1133',
  success: '#54D62C',
  danger: '#FF4842',
  warning: '#FFC107',
  info: '#1890FF',
  light: '#f6f6f6',
  dark: '#4b4b4b'
};

const colorVariants = color => {
  return {
    'lighten-5': lighten(color, 0.05),
    'lighten-10': lighten(color, 0.1),
    'lighten-15': lighten(color, 0.15),
    'lighten-20': lighten(color, 0.2),
    'lighten-25': lighten(color, 0.25),
    'lighten-30': lighten(color, 0.3),
    'lighten-35': lighten(color, 0.35),
    'lighten-40': lighten(color, 0.4),
    'lighten-45': lighten(color, 0.45),
    'lighten-50': lighten(color, 0.5),
    'lighten-55': lighten(color, 0.55),
    'lighten-60': lighten(color, 0.6),
    'lighten-65': lighten(color, 0.65),
    'lighten-70': lighten(color, 0.7),
    'lighten-75': lighten(color, 0.75),
    'lighten-80': lighten(color, 0.8),
    'lighten-85': lighten(color, 0.85),
    'lighten-90': lighten(color, 0.9),
    'lighten-95': lighten(color, 0.95),
    DEFAULT: color,
    'darken-5': darken(color, 0.05),
    'darken-10': darken(color, 0.1),
    'darken-15': darken(color, 0.15),
    'darken-20': darken(color, 0.2),
    'darken-25': darken(color, 0.25),
    'darken-30': darken(color, 0.3),
    'darken-35': darken(color, 0.35),
    'darken-40': darken(color, 0.4),
    'darken-45': darken(color, 0.45),
    'darken-50': darken(color, 0.5),
    'darken-55': darken(color, 0.55),
    'darken-60': darken(color, 0.6),
    'darken-65': darken(color, 0.65),
    'darken-70': darken(color, 0.7),
    'darken-75': darken(color, 0.75),
    'darken-80': darken(color, 0.8),
    'darken-85': darken(color, 0.85),
    'darken-90': darken(color, 0.9),
    'darken-95': darken(color, 0.95),
    5: alpha(color, 0.05),
    10: alpha(color, 0.1),
    15: alpha(color, 0.15),
    20: alpha(color, 0.2),
    25: alpha(color, 0.25),
    30: alpha(color, 0.3),
    35: alpha(color, 0.35),
    40: alpha(color, 0.4),
    45: alpha(color, 0.45),
    50: alpha(color, 0.5),
    55: alpha(color, 0.55),
    60: alpha(color, 0.6),
    65: alpha(color, 0.65),
    70: alpha(color, 0.7),
    75: alpha(color, 0.75),
    80: alpha(color, 0.8),
    85: alpha(color, 0.85),
    90: alpha(color, 0.9),
    95: alpha(color, 0.95)
  };
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class',
  // important: true,
  theme: {
    extend: {
      // colors
      colors: {
        primary: colorVariants(colors.primary),
        secondary: colorVariants(colors.secondary),
        success: colorVariants(colors.success),
        danger: colorVariants(colors.danger),
        warning: colorVariants(colors.warning),
        info: colorVariants(colors.info),
        card: {
          DEFAULT: '#ffffff'
        },
        background: {
          DEFAULT: '#ffffff'
        },
        body: {
          DEFAULT: '#6e6b7b'
        },
        headings: {
          DEFAULT: '#5e5873'
        },
        section: {
          title: colors.secondary,
          subtitle: '#53545b'
        },
        banner: {
          DEFAULT: '#edeef3'
        },
        footer: {
          DEFAULT: '#0e1233',
          link: '#a1a2ab'
        }
      },
      boxShadow: {
        custom:
          '0px 0px 1px rgba(12,26,75,0.1),0px 4px 20px -2px rgba(50,50,71,0.08)',
        'contact-card': '0px 30px 50px 0px rgb(1 11 60 / 10%);'
      },
      keyframes: {
        fadeInDown: {
          '0%': { transform: 'translate3d(0, -20%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },

        'fade-show': {
          '0% ': {
            width: 0
          },
          '15%': {
            width: '100%'
          },
          '85%': {
            opacity: 1
          },
          '90%': {
            width: '100%',
            opacity: 0
          },
          to: {
            width: 0,
            opacity: 0
          }
        },
        'hero-dot-1': {
          '0%': {
            transform: 'translateY(-100px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
      }
    }
  },
  plugins: []
};
