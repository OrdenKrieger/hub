import type { Config } from 'tailwindcss'
import * as TailwindPrime  from 'tailwindcss-primeui'

export default {
    important: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        screens: {
          xs: '360px',
        },
      },
    },
    plugins: [TailwindPrime],
} satisfies Config
