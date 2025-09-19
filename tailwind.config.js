/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mattone: ['Mattone', 'sans-serif'],
        inter: ['Inter', 'Inter Variable', 'sans-serif'],
        leiko: ['Leiko', 'serif'],
        display: ['Mattone', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Leiko', 'serif'],
      },
    },
  },
  plugins: [],
};
