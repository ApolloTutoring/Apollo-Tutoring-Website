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
        "standard_white": "#F4F7F5",
        "standard_navy": "#3247D1",
        "standard_teal": "#82D4BB",
        "nav_colour": "#083D77"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        headFont: ['"oswald"', "sans-serif"],
        paraFont: ['"lato"', "sans-serif"],
        // Add more custom font families as needed
      }
    },
  },
  plugins: [],
};
