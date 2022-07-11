/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    styled: true,
    themes: [
      'night',
      {
        mytheme: {
          primary: '#92c5fd',

          secondary: '#dcddde',

          accent: '#1FB2A6',

          neutral: '#1e1e1e',

          'base-100': '#1e1e1e',

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
