/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F3F9F6',
        card: '#E5EDE9',
        'green-dark': '#0A1D12',
        'green-accent': '#1E9A5F',
        'green-accent-dark': '#0A4C2D',
        lime: '#A2DB1E',
        'lime-light': '#D6F58D',
        'text-dark': '#202020',
        'text-disabled': '#AFAFAF',
        'grey-shade-1': '#8B8B8B',
        'grey-shade-2': '#616161',
        'grey-shade-3': '#E4E4E4',
        'light-blue': '#6EB0D0',
        'light-purple': '#BC8AE8',
      },
      backgroundImage: {
        'card-glass': `linear-gradient(
          180deg,
          rgba(242, 242, 242, 0) -92.86%,
          rgba(242, 242, 242, 0.09) 55.71%,
          rgba(242, 242, 242, 0) 204.29%
        )`,
        'gradient-glass': `linear-gradient(
          180deg,
          rgba(10, 29, 18, 0.10) -37.02%,
          rgba(30, 154, 95, 0.10) 48.13%,
          rgba(10, 29, 18, 0.10) 133.28%
        )`,
      },
      screens: {
        xs: '390MDpx',
        sm: '430px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '1920px',
      },
    },
  },
  plugins: [],
}

