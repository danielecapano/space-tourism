/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["'Bellefair'", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        "barlow-cond": ['"Barlow Condensed"', "sans-serif"],
      },
      fontSize: {
        display: "144px",
        "display-mobile": [
          "80px",
          {
            lineHeight: "1.2",
          },
        ],
        h1: [
          "100px",
          {
            lineHeight: "1.15",
          },
        ],
        h2: [
          "56px",
          {
            lineHeight: "1.15",
          },
        ],
        "h2-tablet": [
          "40px",
          {
            lineHeight: "1.15",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "1.15",
          },
        ],
        h4: [
          "28px",
          {
            lineHeight: "1.15",
          },
        ],
        "h4-mobile": [
          "18px",
          {
            lineHeight: "1.15",
          },
        ],
        lg: [
          "28px",
          {
            letterSpacing: "4px",
          },
        ],
        "lg-tablet": [
          "20px",
          {
            letterSpacing: "4px",
          },
        ],
        "lg-mobile": [
          "24px",
          {
            lineHeight: "1.15",
          },
        ],
        md: [
          "18px",
          {
            letterSpacing: "4px",
          },
        ],
        base: [
          "16px",
          {
            letterSpacing: "2px",
          },
        ],
        small: [
          "14px",
          {
            letterSpacing: "2px",
          },
        ],
        desc: [
          "18px",
          {
            lineHeight: "180%",
          },
        ],
        "desc-tablet": [
          "16px",
          {
            lineHeight: "180%",
          },
        ],
        "desc-mobile": [
          "15px",
          {
            lineHeight: "180%",
          },
        ],
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
        "large-desktop": "1280px",
      },
      colors: {
        "primary-900": "#0B0D17",
        "primary-300": "#D0D6F9",
      },
      backgroundImage: {
        destination: "url('/public/background-destination-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
