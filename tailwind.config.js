/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMenBackground: "#95ecd7",
        menBackground: "#2bd9af",
        menBackgroundHover: "#239b85",
        lightWomenBackground: "#ffaec2",
        womenBackground: "#ff5e84",
        womenBackgroundHover: "#cc4b69",
        appHeader: "#282c34",
        appLink: "#61dafb",
        likeblack: "#0e0e0e",
        bluep: "#0e42fd",
      },
      borderRadius: {
        "3xl": "50px",
        "50px": "50px",
        "40px": "40px",
      },
      boxShadow: {
        lg: "10px 15px 20px 0px #00000026",
      },
      fontSize: {
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
          "75%": { transform: "translateX(-2px)" },
        },
      },
      spacing: {
        96: "24rem",
        "550px": "550px",
        "800px": "800px",
      },

      animation: {
        vibrate: "vibrate 0.2s linear infinite",
      },
      lineClamp: {
        4: "4",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".line-clamp-4": {
          display: "-webkit-box",
          "-webkit-line-clamp": "4",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
