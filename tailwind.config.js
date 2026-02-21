/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Wajib ditambahkan untuk manual toggle
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Menggunakan variabel CSS untuk tema dinamis
        background: 'var(--background)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        foreground: 'var(--foreground)', // Warna teks utama
        muted: 'var(--muted)',           // Warna teks redup
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}