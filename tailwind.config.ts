import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "3xl" : "1920px"
      },
    },
    duration: {
            fast: "1s",
            normal: "3s",
            slow: "5s",
    },
    backgroundImage: theme => ({
        'gradient-to-top': 'linear-gradient(to top, hsl(var(--main-secondary-violet)), hsl(var(--main-secondary-black)))',
        'gradient-to-right': 'linear-gradient(to right, hsl(var(--main-primary-violet)), hsl(var(--main-secondary-black)))',
      }),
    extend: {
      colors: {
        'main-primary-black': 'hsl(var(--main-primary-black))',
        'main-secondary-black': 'hsl(var(--main-secondary-black))',
        'main-primary-violet': 'hsl(var(--main-primary-violet))',
        'main-secondary-violet': 'hsl(var(--main-secondary-violet))',
        'main-primary-yellow': 'hsl(var(--main-primary-yellow))',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
         updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        updown: 'updown 10s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),  require("@designbycode/tailwindcss-text-glitch"),],
} satisfies Config

export default config