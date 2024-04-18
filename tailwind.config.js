/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reddit: ["Reddit Mono", "monospace", "sans-serif"],
        roboto: ["Roboto Mono", "monospace", "sans-serif"]
      }
    },
  },
  plugins: [],
};
