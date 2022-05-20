module.exports = {
	content: ['./src/**/*.jsx'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['serif'],
			raleway: ['Raleway', 'Segoe UI', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
