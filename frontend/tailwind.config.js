const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: "jit", // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        purple: {
          light: "#c0b3c5",
          DEFAULT: "#532565",
          dark: "",
        },
        magenta: {
          light: "#dabeca",
          DEFAULT: "#982568",
          dark: "",
        },
        red: {
          light: "#dbb9b3",
          DEFAULT: "#981f32",
          dark: "",
        },
        coral: {
          light: "#eecdcb",
          DEFAULT: "#bf362e",
          dark: "",
        },
        orange: {
          light: "f5d8c3",
          DEFAULT: "#e07c3e",
          dark: "",
        },
        gray: {
          light: "#dddddd",
          DEFAULT: "#818a91",
          dark: "#373a3c",
        },
        blue: {
          light: "",
          DEFAULT: "#0044B3",
          dark: "",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
