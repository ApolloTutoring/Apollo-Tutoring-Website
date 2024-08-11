/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      colors: {
        "standard_white": "#F4F7F5",
        "standard_navy": "#3247D1",
        "standard_teal": "#82D4BB",
        "nav_colour": "#083D77",
        "non_active_bg": "#AAAAAA",
        "non_active_fg": "#6E6E6E"
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
      },
      cursor: {
        'main': 'url(/images/rocket.svg), pointer',
        'hover': 'url(/images/satellite.svg), pointer',
      }
    },
  },
  plugins: [],
};
