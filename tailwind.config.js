/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        screens: {
          "850px": {
            "max": "850px"
          },
          "730px": {
            "max": "730px"
          },
          "620px": {
            "max": "620px"
          },
          "540px": {
            "max": "540px"
          },
          "400px": {
            "max": "400px"
          }
        },
        colors: {
            'dark': "#0c0c0d",
            'light': "#e5e7eb",
            "rust": "#cd412b"
        }
      },
    },
    plugins: [],
  }