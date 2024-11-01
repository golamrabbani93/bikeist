/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e2211c',
				secondary: '#f77a54',
				white: '#ffffff',
				black: '#07080a',
				accent: '#c6c6c6',
				neutral: '#3D4451',
			},
			animation: {
				shimmer: 'shimmer 1.5s infinite linear',
			},
			keyframes: {
				shimmer: {
					'0%': {backgroundPosition: '-200% 0'},
					'100%': {backgroundPosition: '200% 0'},
				},
			},
		},
	},
	plugins: [],
};
