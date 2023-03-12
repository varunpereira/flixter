module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,css,scss}"],
	theme: {
		// v1:text-s1
		screens: {
			v1: "0px",
			v2: "640px",
			v3: "768px",
			v4: "1024px",
			v5: "1280px",
		},
		// spacing : mx-[0.5rem] , pt-[2rem] , rem is responsive not px
		// mar (outer) , pad (inner) , bor (edge)
		// responsiveness : flex + justify-start (x/t+b) + items-center (y/l+r)
		// layering/positioning : absolute > rel > rel
	},
}