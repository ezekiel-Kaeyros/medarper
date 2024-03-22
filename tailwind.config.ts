import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        lightbrown: "url('/icons/Vector (4).svg')",
        snakeTailForm: "url('/icons/Vector (2).svg')",
      },
      colors: {
        primaryColor: '#2B8049',
        primary: '#2B8049',
        secondaryColor: '#E3775F',
        btnDisabled: 'rgba(79, 73, 73, 0.49)',
        colorPage: 'rgba(217, 217, 217, 0.25)',
        colorAbout: 'rgba(234, 211, 181, 0.25)',
      },
      borderColor: {
        primary: '#2B8049',
        secondary: '#E3775F',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
