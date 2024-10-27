/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  		colors: {
			primary: "#7130D5",
			"neutrals-white": "#FCFCFC",
			"neutrals-black": "#000000"
  		}
  	}
  },
  plugins: [],
}

