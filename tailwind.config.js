// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        fullScreen: "calc(100vw)",
      },

      height: {
        fullScreen: "calc(100vh)",
        "580px": "580px",
      },

      colors: {
        hitam: "#262626",
        abu: "#918A82",
        coklat: "#CCC9C0",
        garis: "#918A82",
      },
    },
  },
  plugins: [],
};
