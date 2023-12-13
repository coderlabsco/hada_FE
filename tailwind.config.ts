import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/UI/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)']
      }
    }
  },
  plugins: []
}
export default config
