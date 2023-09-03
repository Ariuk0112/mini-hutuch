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
        "primary-green": "#27AE60",
        "primary-gray": "#36383C",
        "secondary-gray": "#444444",
        "neutral-gray": "#6B6F75",
      },
    },
  },
  plugins: [],
};
