/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        xl: "2rem",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
        fontFamily: {
            sans: ["var(--font-sans)", "system-ui", "sans-serif"],
            display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
            mono: ["var(--font-jetbrainsMono)", "monospace"],
        },
        colors: {
            primary: "#FFFFFF",
            secondary: "#EEF1F6",
            surface: "#F7F8FB",
            accent: {
                DEFAULT: "#0047FF",
                hover: "#0035C8"
            },
            ink: "#0A0E1F",
            muted: "#5D6678",
            border: "rgba(10,14,31,0.08)",
        },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(var(--float-x, 12px), var(--float-y, -18px))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
        float: "float 8s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
