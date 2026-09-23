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
      // Sharper, more technical look: globally reduced corner radii.
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.5rem',
        '2xl': '0.625rem',
        '3xl': '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        'glow-sky': '0 8px 30px -6px rgba(56, 189, 248, 0.30)',
        'glow-amber': '0 8px 30px -6px rgba(251, 191, 36, 0.22)',
        'glow-pink': '0 8px 30px -6px rgba(244, 114, 182, 0.30)',
        card: '0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 8px 24px -8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 16px 40px -12px rgba(0, 0, 0, 0.14)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      colors: {        clarity: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0284c7',
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
