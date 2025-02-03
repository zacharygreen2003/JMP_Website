/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hk: ["var(--font-hk)"],
        javanese: ["var(--font-javanese)"],
      },
      colors: {
        jm: {
          red: "#BA001E",
          "blue-100": "#8EA7C7",
          "blue-200": "#6577AB",
          "blue-300": "#3A4F85",
        },
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
        flyAcross: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        flyAerialShow: {
          "0%": { transform: "translate(-10%, 50%) rotate(0deg)" },
          "10%": { transform: "translate(10%, 45%) rotate(5deg)" },
          "20%": { transform: "translate(30%, 50%) rotate(0deg)" },
          "30%": { transform: "translate(50%, 55%) rotate(-5deg)" },
          "40%": { transform: "translate(70%, 50%) rotate(0deg)" },
          "50%": { transform: "translate(90%, 45%) rotate(5deg)" },
          "60%": { transform: "translate(110%, 50%) rotate(0deg)" },
          "100%": { transform: "translate(-10%, 50%) rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        flyAcross: "flyAcross 15s linear infinite",
        flyAerialShow: "flyAerialShow 15s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
