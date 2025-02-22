/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        monero: 'hsl(var(--monero))',
        firo: 'hsl(var(--firo))',
        privacyguides: 'hsl(var(--privacyguides))',
        general: 'hsl(var(--general))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: (theme) => ({
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.primary.DEFAULT'),
            '&:hover': {
              color: `${theme('colors.primary.DEFAULT_HOVER')} !important`,
            },
            code: { color: theme('colors.primary.400') },
          },
          h1: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900'),
          },
          h2: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900'),
          },
          h3: {
            fontWeight: '600',
            color: theme('colors.gray.900'),
          },
          'h4,h5,h6': {
            color: theme('colors.gray.900'),
          },
          pre: {
            backgroundColor: theme('colors.gray.800'),
          },
          code: {
            color: theme('colors.pink.500'),
            backgroundColor: theme('colors.gray.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem',
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          details: {
            backgroundColor: theme('colors.gray.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem',
          },
          hr: { borderColor: theme('colors.gray.200') },
          'ol li::marker': {
            fontWeight: '600',
            color: theme('colors.gray.500'),
          },
          'ul li::marker': {
            backgroundColor: theme('colors.gray.500'),
          },
          strong: { color: theme('colors.gray.600') },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.200'),
          },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
