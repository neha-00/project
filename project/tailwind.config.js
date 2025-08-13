// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#9cb984',  // pastel sage green
          DEFAULT: '#9cb984', // regular sage
        },
      },
    },
  },
  plugins: [],
};
