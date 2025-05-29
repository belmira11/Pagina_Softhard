/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'text-muted': 'var(--text-muted)',
        'text-semi-muted': 'var(--text-semi-muted)',
        'color-hover': 'var(--color-hover)',
        'color-overlay': 'var(--color-overlay)',
        'color-border': 'var(--color-border)',
        'color-bg-muted': 'var(--color-bg-muted)',
      },
      spacing: {
        '2': 'var(--spacing-2)',
        '4': 'var(--spacing-4)',
        '6': 'var(--spacing-6)',
        '8': 'var(--spacing-8)',
        '10': 'var(--spacing-10)',
        '15': 'var(--spacing-15)',
        '20': 'var(--spacing-20)',
        '90': 'var(--spacing-90)',
      },
      fontFamily: {
        primary: ['var(--font-family-primary)'],
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      borderRadius: {
        'full': 'var(--radius-full)',
        '15': 'var(--radius-15)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
} 