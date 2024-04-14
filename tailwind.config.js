/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'turquoise': {
          '50': '#ecfffd',
          '100': '#d0fdfb',
          '200': '#a6fbf9',
          '300': '#69f7f5',
          '400': '#28ebeb',
          '500': '#09ced1',
          '600': '#0ba5af',
          '700': '#10848e',
          '800': '#176973',
          '900': '#175762',
          '950': '#093b43',
      },
      
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}

