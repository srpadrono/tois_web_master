import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9f2',
          100: '#dcf4e0',
          200: '#bce8c4',
          300: '#8dd69e',
          400: '#5ac474',
          500: '#2b9348',
          600: '#248239',
          700: '#1e6a2f',
          800: '#195527',
          900: '#164521',
          950: '#0d2714'
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace']
      },
      zIndex: {
        fixed: '1030',
        modal: '1040',
        dropdown: '1000',
        tooltip: '1060',
        toast: '1070'
      }
    }
  },
  plugins: []
}

export default config 