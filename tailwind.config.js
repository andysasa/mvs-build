// eslint-disable-next-line no-undef
module.exports = {
  content: ['./dist/*.{html,js}'], // purge
  media: false, // darkMode
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
      '14': '14px'
    },
    extend: {
      colors: {
        'indigo': '#1B047C',
        'lavender': '#CABDFF',
        'coral': '#FF6F61',
        'offwhite': '#FFFAF1',
        'haze': '#9085BE',
      },
      fontFamily: {
        'maven-pro': ['"Maven Pro"', 'sans-serif'],
        'Freehand': ['"Freehand"', 'cursive']
      },
      height: {
        '128': '32rem',
        '152': '38rem',
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};