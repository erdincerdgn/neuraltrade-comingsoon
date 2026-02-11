/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        'primary-glow': 'rgba(0, 255, 136, 0.5)',
        secondary: '#00F0FF',
        accent: '#8A2BE2',
        'background-dark': '#050505',
        'surface-dark': '#0a0f0d',
        'surface-glass': 'rgba(255, 255, 255, 0.03)',
        'border-glass': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
        'cyber-gradient': "radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
