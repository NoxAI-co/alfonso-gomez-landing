import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        // Paleta oficial Pacto Histórico
        pacto: {
          amarillo: '#FEAE33',
          azul: '#343598', 
          rojo: '#F8280C',
          verde: '#03AD43',
          morado: '#8F3292',
          // Colores auxiliares
          aux1: '#E25916',
          aux2: '#039042', 
          aux3: '#AC155B'
        },
        // Aliases para facilitar uso
        primary: '#343598', // Azul principal
        secondary: '#FEAE33', // Amarillo secundario
        accent: '#F8280C', // Rojo de acento
      },
      keyframes: {
        'testimonials-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'testimonials-scroll': 'testimonials-scroll linear infinite',
      },
    },
    fontFamily: {
      sans: ["LEMON MILK", "Inter", ...defaultTheme.fontFamily.sans],
      heading: ["LEMON MILK", "system-ui", "sans-serif"],
      body: ["LEMON MILK", "Gill Sans", "system-ui", "sans-serif"],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
