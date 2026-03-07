import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          dark: '#0b1220'
        }
      },
      boxShadow: {
        card: '0 12px 30px -12px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
