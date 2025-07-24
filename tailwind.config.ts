import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3498db",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#2c3e50",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#e74c3c",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#34495e",
          foreground: "#94a3b8",
        },
        accent: {
          DEFAULT: "#16213e",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1a1a2e",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#2c3e50",
          foreground: "#ffffff",
        },
        slate: {
          800: "#1e293b",
          900: "#0f172a",
        },
        blue: {
          400: "#3498db",
          600: "#2980b9",
          700: "#21618c",
        },
        red: {
          400: "#e74c3c",
          600: "#c0392b",
          700: "#a93226",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
