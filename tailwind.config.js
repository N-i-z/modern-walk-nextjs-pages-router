/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        likeWhite: "#f5f5f5",
        likeblack: "#0e0e0e",
        alertBlack: "#182132",
        priceBlue: "#0e42fd",
        elephantContrast: "#F0F2F5",
        elephantGrey: "#F7F8F9",
        inverseHoverClick: "#EBB888",
        inverseHover: "#F7CDA6",
        selected: "#D16400",
        hover: "#F17502",
        normal: "#EB8120",
        inactiveBorder: "#C6CBD5",
        activeBorder: "#7C89A1",
        main: "#001948",
        linkBlue: "#6A81FD",
        linkHover: "#5467CE",
        linkActive: "#4054C1",
        linkDisabled: "#A5B0E3",
        dangerRed: "#E1273D",
        dangerGlow: "#ED9AA4",
        dangerInactive: "#F0939E",
        dangerDisabled: "#F9D4D8",
        dangerHover: "#C01227",
        dangerActive: "#9D0215",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "3xl": "50px",
        "50px": "50px",
        "40px": "40px",
      },
      boxShadow: {
        boxNormal: "0px 0px 30px 0px rgba(0, 25, 72, 0.15)",
        boxHover: "0px 10px 40px 0px rgba(0, 25, 72, 0.25)",
        boxSelected: "0px 5px 30px 0px rgba(0, 25, 72, 0.25)",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      spacing: {
        96: "24rem",
        "550px": "550px",
        "800px": "800px",
      },
      animation: {
        vibrate: "vibrate 0.2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      lineClamp: {
        4: "4",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
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
