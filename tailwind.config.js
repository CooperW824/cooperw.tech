/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				'coop-background': '#000B2E',
				'coop-highlight': '#00D7EB',
				'coop-text-header': '#D3F3FC',
				'coop-text-paragraph': '#8EACC7',
				'coop-text-dark': '#000B2E'
			},
			fontFamily: {
				round: ['Nunito', 'Varela Round', 'Trebuchet MS'],
				square: ['Helvetica', 'sans-serif'],
				mono: ['Consolas', 'Courier New']
			},
			screens: {
				xs: '300px',
				phone: '500px'
			},
			fontSize: {
				xll: '1.4rem'
			}
		}
	},
	plugins: [
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/aspect-ratio')
	]
};
