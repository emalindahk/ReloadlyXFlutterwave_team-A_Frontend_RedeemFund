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
        lightBlue: '#2C46CE',
        secondary: '#3EB4891A',
        fbBlue: '#4267B2',
        greySec: '#8E8B8B',
        greyPrim: '#c4c4c4',
        whatsapp: '#075E54',
        messenger: '#4267B2',
        twitter: '#1DA1F2',
        facebook: '#1DA1F2'
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
    require('tailwind-scrollbar-hide')
  ],
}
