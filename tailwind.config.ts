import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

module.exports = defineConfig({
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        sepia: {
          DEFAULT: 'hsl(48, 87%, 88%)',
          dark: 'hsl(48, 66%, 66%)',
        },
        chino: 'hsl(41, 29%, 72%)',
        sand: 'hsl(48, 87%, 91%)',
        teal: 'hsl(187, 69%, 55%)',
        black: 'hsl(0, 13%, 8%)',
        grey: 'hsl(0, 9%, 76%)',
      },
      backgroundImage: (theme) => ({
        dreamer: "url('/assets/dreamer-hand-plant.png')",
        fractal: "url('/assets/fractal-alex-grey.jpg')",
      }),
    },
  },
})
