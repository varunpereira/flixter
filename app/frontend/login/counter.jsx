import { r, d, log, t, c, b, i } from '~/frontend/config/glob'

var m = () => {
	var count = d(0)
	var text = d(`init`)

	var inc = () => {
		count(count() + 1)
		log(count())
	}

	r(() => {
		if (count() > 5) {
			log(count())
		}
	})

	var input = (event) => {
		text(event.target.value)
	}

	return (
		<c.m s={`c_black tc_white`}>
			<b.m click={inc} s={`c_black tc_white`}>
				<t.m t={`count ${count()}`} />
			</b.m>
			<i.m s={`c_white tc_black ${count()}`} type="text" value={text()} input={input} />
		</c.m>
	)
}

export default { m }
