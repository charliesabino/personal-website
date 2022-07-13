/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ['Inter'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    styled: true,
    themes: [
      // 'dark',
      {
        mytheme: {
          primary: '#3fb1f5',

          secondary: '#f95b6e',

          accent: '#d273e3',

          neutral: '#272c35',

          'base-100': '#2b323d',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',

          'primary-content': '#ffffff',

          'secondary-content': '#ffffff',

          'neutral-content': '#ffffff',

          'base-content': '#ffffff',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
