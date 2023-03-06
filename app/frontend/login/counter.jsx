import { r, d, log, t, c, b } from "~/frontend/config/glob.jsx"
export default () => {
	var count = d(0)

	var inc = () => {
		count(count() + 1)
	}

	r(() => {
		if (count() > 5) {
			count(100)
		}
	})

	return c(
		{ s: `c_black tc_white` },
		c([`hey`]),
		b({ s: `c_white tc_black`, click: inc }, t([`count is `, count, `clicks`])),
	)
}
