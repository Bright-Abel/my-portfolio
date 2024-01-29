// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 0.5s linear 1',
      },
      transitionProperty: {
        width: 'width',
      },
      gridTemplateRows: {
        'my-rows': 'auto 1fr auto',
      },
      dropShadow: {
        'shadow-blue': '0 5px 15px #00000019',
      },
    },
  },
  plugins: [],
};
