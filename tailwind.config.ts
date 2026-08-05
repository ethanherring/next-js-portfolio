import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--ui-border) / <alpha-value>)",
        input: "hsl(var(--ui-input) / <alpha-value>)",
        ring: "hsl(var(--ui-ring) / <alpha-value>)",
        background: "hsl(var(--ui-background) / <alpha-value>)",
        foreground: "hsl(var(--ui-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--ui-primary) / <alpha-value>)",
          foreground: "hsl(var(--ui-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--ui-secondary) / <alpha-value>)",
          foreground: "hsl(var(--ui-secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--ui-destructive) / <alpha-value>)",
          foreground: "hsl(var(--ui-destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--ui-muted) / <alpha-value>)",
          foreground: "hsl(var(--ui-muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--ui-accent) / <alpha-value>)",
          foreground: "hsl(var(--ui-accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--ui-popover) / <alpha-value>)",
          foreground: "hsl(var(--ui-popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--ui-card) / <alpha-value>)",
          foreground: "hsl(var(--ui-card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
