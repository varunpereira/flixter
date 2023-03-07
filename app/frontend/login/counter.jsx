import { r, d, log, t, c, b, i, mount } from '~/frontend/config/glob'

mount(()=>console.log(`hi guys`))

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

	const items = ['Item 1', 'Item 2', 'Item 3']

	return (
		<c.m s={`c_black tc_white`}>
			<b.m click={inc} s={`c_black tc_white`}>
				<t.m t={`count ${count()}`} />
				{count() >= 3 ? <t.m t={`hi`} /> : <t.m t={`u`} />}
			</b.m>
			<i.m s={`c_white tc_black ${count()}`} type="text" value={text()} input={input} />
			<ul>
				{items.map((item, i) => (
					<li>{`item${i}`} </li>
				))}
			</ul>
		</c.m>
	)
}

export default { m }
