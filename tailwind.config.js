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
        colors: {
            'dark': "#0c0c0d",
            'light': "#e5e7eb",
            "rust": "#cd412b"
        }
      },
    },
    plugins: [],
  }