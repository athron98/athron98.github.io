/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      colors: {
        clarity: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        nobo: {
          'bg-primary': '#18181b',
          'bg-secondary': '#27272a',
          'bg-tertiary': '#3f3f46',
          'text-primary': '#fafafa',
          'text-secondary': '#a1a1aa',
          'text-muted': '#71717a',
          amber: '#fbbf24',
          teal: '#2dd4bf',
        },
        tuner: {
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          pink: {
            400: '#f472b6',
            500: '#ec4899',
          },
        },
      },
    },
  },
  plugins: [],
};
