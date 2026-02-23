/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#30bae8",
        "secondary": "#e8aa30", // Warm amber accent
        "background-light": "#f6f7f8",
        "background-dark": "#0d1117", // Deeper, almost black
        "surface-dark": "#1f242cff", // Panel background
        "border-dark": "#30363d",
        "text-muted": "#a0a9b4ff",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "DEFAULT": "4px",
        "lg": "8px",
        "xl": "12px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
  ],
}
