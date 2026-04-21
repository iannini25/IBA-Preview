import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#169B62',
          600: '#0F7C4F',
          700: '#0B5E3B',
        },
        accent: {
          500: '#FF883E',
          700: '#9E4715',
        },
        neutral: {
          50: '#FAFAF7',
          100: '#F2F1EC',
          200: '#E5E3DB',
          300: '#C9C6BA',
          500: '#6B6960',
          700: '#3A3832',
          900: '#1A1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
    },
  },
  plugins: [],
};

export default config;
