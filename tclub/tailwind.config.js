// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // Add custom breakpoints here
      screens: {
        'xs': '320px',
        'xs2': '480px',
        'sm': '576px',
        'md': '768px',
        'lg': '991px',
        'lg2': '1024px',
        'xl': '1199px',
        'xl2': '1399px',
        'xxl': '1599px',
        'xxl2': '1699px',
        'fhd': '1920px',
      },
      
      // Fonts
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },

      // Font Sizes
      fontSize: {
        nav: ['18px', 'auto'],
        sm: 'var(--text-sm)',
        xl: 'var(--text-xl)',
        btn: 'var(--btn-font-size)',
        'hero-title': ['var(--hero-title-size)', { lineHeight: 'var(--hero-title-line)' }],
        'hero-subtitle': ['var(--hero-subtitle-size)', { lineHeight: 'var(--hero-subtitle-line)' }],
      },

      // Line Heights
      lineHeight: {
        xl: 'var(--line-xl)',
      },

      // Letter Spacing
      letterSpacing: {
        tightest: '0px',
      },

      // Max Width
      maxWidth: {
        '9xl': '1600px',
        'hero-img': 'var(--img-max-width)',
      },

      // Max Height
      maxHeight: {
        'hero-img': 'var(--img-max-height)',
      },

      // Border Radius
      borderRadius: {
        xl: '24px', // 24px
      },

      // Spacing
      spacing: {
        'btn-x': 'var(--btn-padding-x)',
        'btn-y': 'var(--btn-padding-y)',
        'input-x': 'var(--input-padding-x)',
        'input-y': 'var(--input-padding-y)',
        'gap-desktop': 'var(--gap-desktop)',
        'gap-tablet': 'var(--gap-tablet)',
        'container-padding': 'var(--container-padding)',
        'hero-pt': 'var(--hero-padding-top)',
      },

      // Border Width
      borderWidth: {
        'img-top': 'var(--img-border-top)',     // e.g., 21px
        'img-side': 'var(--img-border-side)',   // e.g., 17px
      },

      // Box Shadow
      boxShadow: {
        primary: '8px 6px 15px 0px #0061DE40',
        btn: 'var(--btn-shadow)',
      },

      // Colors
      colors: {
        primary: {
          DEFAULT: 'var(--btn-primary-bg)',
          hover: 'var(--btn-primary-hover)',
          text: 'var(--btn-primary-text)',
        },
        outline: {
          DEFAULT: 'var(--btn-outline-bg)',
          hover: 'var(--btn-outline-hover)',
          text: 'var(--btn-outline-text)',
          border: 'var(--btn-outline-border)',
        },
        divider: 'var(--divider-color)',
        highlight: 'var(--highlight-color)',
        accent: 'var(--color-accent)',
        error: 'var(--color-error)',
        border: 'var(--color-border)',

        // Additional text & utility color vars
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-danger': 'var(--text-danger)',
        'text-link': 'var(--text-link)',
        'text-muted': 'var(--text-muted)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',

        'btn-outline-text': 'var(--btn-outline-text)',
        'btn-outline-hover': 'var(--btn-outline-hover-text)',
        'img-border': 'var(--img-border-color)',
        'btn-primary': 'var(--btn-primary-bg)',

        // Global
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },

  plugins: [],
};


