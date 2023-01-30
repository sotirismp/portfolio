/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rg-dark": "radial-gradient(#cbd5e1 0.75px, rgba(0,0,0,0) 0.95px)",
        "rg-white": "radial-gradient(#1e293b 0.75px, rgba(0,0,0,0) 0.95px)",
      },
      transformOrigin: {
        hand: "70% 70%",
      },
      animation: {
        blink: "blinker 1s step-start infinite",
        wave: "waveAnime 1s infinite",
      },
      keyframes: {
        waveAnime: {
          "0%": { transform: "rotate( 0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate( 0.0deg)" },
          "100%": { transform: "rotate( 0.0deg)" },
        },
        blinker: {
          "50%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
