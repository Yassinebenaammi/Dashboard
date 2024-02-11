import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        '50': '#f4f6fb',
        '100': '#e8ecf6',
        '200': '#cdd7ea',
        '300': '#a0b5d9',
        '400': '#6e8fc2',
        '500': '#4b71ac',
        '600': '#395890',
        '700': '#2f4775',
        'bgSoft': '#182237',
        'secondary': '#273653',
        'primary': '#151c2c',
      },
     
      
    },
  },
  plugins: [],
} satisfies Config

export default config