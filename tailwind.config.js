/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue1: '#071777',
        Blue2: '#505de7',
        Blue2hover: '#7075f3',
        Preto: "#191a1f",
        Branco: "#f0f4f8",
        quasePreto: "#1f222b",

        Claro_Primario: "#e6eedf",
        Claro_Secundario: "#ced6d2",

        Escuro_Primario: "#1a1212",
        Escuro_Secundario: "#1e1515",
        
        Parallax_Primario: "#e25b4c",
        Parallax_Secundario: "#feddc8",


        Parallax_Dark_Primario: "#2d112b",
        Parallax_Dark_Secundario: "#2c3e50",

        indigo500: "#6366F1",
        indigo600: "#4F46E5",
        cinza600: "#4B5563",
        cinza500: "#6B7280",
        
      }
    },
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}