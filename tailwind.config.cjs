/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // ------------- Gray Scale ----------------
      "light-color": "#fff",
      "practically-light-color": "#e6e6e6",
      "almost-light-color": "#ccc",
      "nearly-light-color": "#b3b3b3",
      "mid-light-color": "#555555",
      "mid-color": "#808080",
      "mid-dark-color": "#666",
      "nearly-dark-color": "#4d4d4d",
      "almost-dark-color": "#333",
      "practically-dark-color": "#1a1a1a",
      "dark-color": "#000",

      // ------------- Base Colors ---------------

      "main-color": "#06d6a0",
      "custom-color": "#118ab2",
      "extra-color": "#ef476f",

      "blue-color": "#2f3895",

      // -------- base backgrounds colors --------

      primary: "#e6eef1",
      secondary: "#f2f2f2",
      "glass-400": "rgba(0, 0, 25, 0.4)",
      "glass-700": "rgba(0, 0, 25, 0.7)",
    },
    fontFamily: {
      main: ["Futura"],
      custom: ["Nexa"],
    },
    screens: {
      xs: "365px",
      sm: "569px",
      md: "769px",
      lg: "1025px",
      xl: "1250px",
    },
  },
};
