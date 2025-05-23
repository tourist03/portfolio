/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',
          secondary: '#1F2937',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      enabled: true,
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
      ],
    },
  }