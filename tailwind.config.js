module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
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
    },

    extend: {
      colors: {
        // Configure your color palette here
        lightGrey: "#eee",
        medGrey: "#353535",
        darkGrey: "#1c1c1c",
        black: "#000",
        white: "#fff",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
