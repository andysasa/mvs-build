const tailwindcssNesting = require('tailwindcss/nesting');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcssNesting,
    tailwindcss,
    autoprefixer,
  ],
};