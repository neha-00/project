// tailwind.config.js
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        'primary-light': '#dcfce7',
        background: 'rgba(255,255,255,0.1)',
        'background-blur': 'rgba(255,255,255,0.2)',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
      },
    },
  },
  plugins: [],
}
