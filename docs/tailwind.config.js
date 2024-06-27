/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'selector',
  content: [    
    "./*.html",
    "./_includes/*.html",
    "./_layouts/*.html",
    "./pages/**/*.html",
    "./_posts/**/*.markdown",
    "./_posts/**/*.md",
    "./assets/**/*.js",
    "./pages/**/*.html"
  ],
  theme: {
    screens: {
      'xs': '540px',
      'xs-h-max': {'raw': '(max-height: 400px)'},
      ...defaultTheme.screens,
    },
    extend: {      
      backgroundImage: {
        'cream-paper': "url('/assets/images/background.jpg')",
      },
      colors: {
        "primary": {
            50: "var(--primary-color-50)",
            100:"var(--primary-color-100)",
            200:"var(--primary-color-200)",
            300:"var(--primary-color-300)",
            400:"var(--primary-color-400)",
            500:"var(--primary-color-500)",
            600:"var(--primary-color-600)",
            700:"var(--primary-color-700)",
            800:"var(--primary-color-800)",
            900:"var(--primary-color-900)",
            950:"var(--primary-color-100)",
          },
          "secondary": {
            50: "var(--secondary-color-50)",
            100:"var(--secondary-color-100)",
            200:"var(--secondary-color-200)",
            300:"var(--secondary-color-300)",
            400:"var(--secondary-color-400)",
            500:"var(--secondary-color-500)",
            600:"var(--secondary-color-600)",
            700:"var(--secondary-color-700)",
            800:"var(--secondary-color-800)",
            900:"var(--secondary-color-900)",
            950:"var(--secondary-color-100)",
          },
      },
    },
  },
  plugins: [
    "tailwindcss ,autoprefixer"
  ]
}