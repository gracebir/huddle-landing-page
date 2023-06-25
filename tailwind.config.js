/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-pink': 'var(--color-pink)',
        'color-light-pink': 'var(--color-light-pink)',
        'color-red': 'var(--color-light-red)',
        'color-dark-cyan': 'var(--color-very-dark-cyan)',
        'color-pale-blue': 'var(--color-pale-blue)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage:{
        'bfooter-desk': "url('../assets/bg-footer-top-desktop.svg')",
        'bfooter-mob': "url('../assets/bg-footer-top-mobile.svg')",
        'bsection-button-desk-1': "url('../assets/bg-section-bottom-desktop-1.svg')",
        'bsection-button-mob-1': "url('../assets/bg-section-bottom-mobile-1.svg')",
        'bsection-button-desk-2': "url('../assets/bg-section-bottom-desktop-2.svg')",
        'bsection-button-mob-2': "url('../assets/bg-section-bottom-mobile-2.svg')",
        'bsection-top-desk-1': "url('../assets/bg-section-top-desktop-1.svg')",
        'bsection-top-mob-1': "url('../assets/bg-section-top-mobile-1.svg')",
        'bsection-top-desk-2': "url('../assets/bg-section-top-desktop-2.svg')",
        'bsection-top-mob-2': "url('../assets/bg-section-top-mobile-1.svg')",
        'buser-illustration':"url('../assets/illustration-your-users.svg')",
        'bconverstion-illustration':"url('../assets/illustration-flowing-conversation.svg')",
        'bgrow-illustration':"url('../assets/illustration-grow-together.svg')",
        'bscreen-mockup':"url('../assets/screen-mockups.svg')",
      }
    },
  },
  plugins: [],
}

