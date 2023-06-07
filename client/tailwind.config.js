/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './common/**/*.{tsx,mdx}',
    './app/**/*.{tsx,mdx}',
    './modules/**/*.{tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
