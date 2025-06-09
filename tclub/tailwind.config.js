// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // update to match your project
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
      '9xl': '1600px',
      },
      boxShadow: {
        'primary': '8px 6px 15px 0px #0061DE40',
      },
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
      borderRadius: {
        xl: '1.5rem',
      },
      spacing: {
        'btn-x': '2.25rem', // 36px
        'btn-y': '1.125rem', // 18px
      },
    },
  },
  plugins: [],
};
