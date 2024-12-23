/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'san-serif'],
        general: ['general', 'san-serif'],
        'circular-web': ['circular-web', 'san-serif'],
        'robert-medium': ['robert-medium', 'san-serif'],
        'robert-regular': ['robert-regular', 'san-serif'],
      },
      colors: {
        blue: {
          50: '#dfdff0',
          75: '#dfdff2',
          100: '#f0f2fa',
          200: '#010101',
          300: '#4fb7dd',
        },
        violet: {
          300: '#5724ff',
        },
        yellow: {
          100: '#8e983f',
          300: '#edff66',
        }
      }
    },
  },
  plugins: [],
}

