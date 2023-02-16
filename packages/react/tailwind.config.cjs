/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "sans":['ui-sans-serif', 'system-ui'],
        "mono":["Fira Code"],
        "bold":["Fira Sans"]
      },
      spacing:{
        "0.06":"1px",
        "[-1]":"-16px",
        "[-2]":"-32px",
        "[-3]":"-48px",
        "[-4]":"-64px",
      }
    },
  },
  plugins: [],
}
