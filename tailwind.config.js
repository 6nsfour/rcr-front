/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        rcr: {
          "primary": "#284B63",
          "secondary": "#B4B8AB",
          "accent": "#153243",
          "neutral": "#F4F9E9",
          "base-100": "#EEF0EB",
          "info": "#bfdbfe",
          "success": "#4ade80",
          "warning": "#b32e00",
          "error": "#ff3656",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

