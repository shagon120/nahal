import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f4fcf2",
            foreground: "#11181C",
            primary: {
              foreground: "#000000",
              DEFAULT: "#26D367",
            },
            secondary: { DEFAULT: "#99991c", foreground: "#000000" },
            content: { DEFAULT: "#DB4EF1", foreground: "#000000" },
          },
        },
        dark: {
          colors: {
            background: "#394a41",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#000000",
              DEFAULT: "#26D367",
            },
            secondary: { DEFAULT: "#d2d448", foreground: "#000000" },
            content: { DEFAULT: "#DB4EF1", foreground: "#000000" },
          },
        },
      },
    }),
  ],
};
