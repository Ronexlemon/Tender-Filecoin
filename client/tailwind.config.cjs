module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xsm: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2560px",
      // => @media (min-width: 2560px) { ... }
    },
    // colors: {
    //   "primary-color": "#1F1C9B",
    //   "secondary-color": "#FE873F",
    //   "secondary-darker": "#061835",
    //   white: "#fff",
    //   green: "#17A625",
    //   orange: "#FFA500",
    //   gray: "#dddddd",
    //   "light-purple": "#EFEFFF",
    // },
  },

  plugins: [],
};
