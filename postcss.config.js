const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html']
});

module.exports = {
  plugins: [
    require('tailwindcss')(),
    require("autoprefixer")(),
    /**...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],*/
    require("postcss-clean")(),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
        "case-insensitive-attributes": true,
        "hexadecimal-alpha-notation": true,
        "place-properties": true
      }
    })
  ]
};
