const { fontFamily } = require('tailwindcss/defaultTheme');
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add paths to your files
    './public/index.html',            // Path to the public HTML file
  ],
  theme: {
    extend: {
      colors: {
        color1: '#27271b',
        color2: '#51513c',
        color3: '#8e734e',
        color4: '#c5c4b2',
        color5: '#dfdfd5',
        color6: '#ffffff',
      },
      backgroundImage: {
        linear1: 'linear-gradient(249.18deg, #27271B 36.23%, rgba(37, 38, 26, 0.82) 78.13%)',
        linear2: 'radial-gradient(98.53% 54.18% at 49.89% 60.71%, rgba(159, 178, 151, 0.58) 0%, rgba(96, 130, 81, 0.58) 100%)',
        linear3:'linear-gradient(180deg, #C5C4B2 0%, #27271B 100%);'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans], // Set Inter as the default sans-serif
        inter: ['Inter', 'sans-serif'], // Optionally, use a custom class for Inter
      }
    },
  },
  plugins: [],
});
