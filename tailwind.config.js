export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#041316',
        background: '#eefafc',
        primary: '#126b73',
        secondary: '#e572e9',
        accent: '#cf2063',
        // Add dark theme colors here if needed
        'dark-text': '#e7f8fb',
        'dark-background': '#031012',
        'dark-primary': '#8be5ed',
        'dark-secondary': '#87168b',
        'dark-accent': '#df3073',
      },
    },
  },
  plugins: [],
}
