module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Sora'],
    },
    extend: {
      fontFamily: {
        hero: ['Sora'],
        paragraph: ['Inter'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
