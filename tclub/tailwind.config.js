// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // Custom Fonts
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },

      // Custom Max Width
      maxWidth: {
        '9xl': '1600px',
      },

      // Custom Box Shadow
      boxShadow: {
        primary: '8px 6px 15px 0px #0061DE40',
      },

      // Custom Colors
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
      },

      // Custom Border Radius
      borderRadius: {
        xl: '1.5rem',
      },

      // Custom Button Padding
      spacing: {
        'btn-x': '2.25rem', // 36px
        'btn-y': '1.125rem', // 18px
      },
    },
  },

  plugins: [],
};

