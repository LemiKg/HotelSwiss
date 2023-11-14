export default {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      backgroundImage: {
        "shimmer-gradient": "linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      boxShadow: {
        cardImage: "2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      },
      fontFamily: {
        patuaOne: "Patua One",
        robotoRegular: "Roboto Regular"
      },
      colors: {
        primary: {
          DEFAULT: "#354f52",
          100: "#0a0f10",
          200: "#151f20",
          300: "#1f2e30",
          400: "#2a3e40",
          500: "#354f52",
          600: "#527a7e",
          700: "#76a1a6",
          800: "#a4c0c3",
          900: "#d1e0e1",
        },
        secondary: {
          DEFAULT: "#cad2c5",
          100: "#282e23",
          200: "#4f5c47",
          300: "#778a6a",
          400: "#a0af97",
          500: "#cad2c5",
          600: "#d5dcd1",
          700: "#dfe4dc",
          800: "#eaede8",
          900: "#f4f6f3",
        },
        tertiary: {
          DEFAULT: "#52796f",
          100: "#111816",
          200: "#21312d",
          300: "#324943",
          400: "#426159",
          500: "#52796f",
          600: "#6d9c90",
          700: "#92b5ac",
          800: "#b6cdc8",
          900: "#dbe6e3",
        },
        quaternary: {
          DEFAULT: "#2f3e46",
          100: "#090c0e",
          200: "#13191c",
          300: "#1c252a",
          400: "#263238",
          500: "#2f3e46",
          600: "#4e6876",
          700: "#7290a1",
          800: "#a1b5c0",
          900: "#d0dae0",
        },
        quinary: {
          DEFAULT: "#84a98c",
          100: "#19241b",
          200: "#314736",
          300: "#4a6b51",
          400: "#638e6c",
          500: "#84a98c",
          600: "#9cbaa3",
          700: "#b5ccba",
          800: "#ceddd1",
          900: "#e6eee8",
        },
        icons: "rgb(107 114 129)",
        backgroundColor: "#f2f2f2",
        lightBackground: "#f8f8f8",
      },
    },
  },
};
