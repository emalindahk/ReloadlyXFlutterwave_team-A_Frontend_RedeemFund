module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0A2342',
        grey: '#333333',
        greyLight: '#f3f4f6',
        lightBlue: '#2C46CE'
      },
      backgroundImage: theme => ({
        contact: "url('/contact.png')",
       })
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
