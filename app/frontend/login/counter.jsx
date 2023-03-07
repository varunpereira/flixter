import { state, mount, react, write, go, c, t, b, i } from '~/frontend/config/glob'

var p = () => {
	var count = state(0)
	var text = state(`init`)

	mount(() => write(`hi guys ${count()}`))

	var inc = () => {
		count(count() + 1)
		write(count())
	}

	react(() => {
		if (count() > 5) {
			write(count())
		}
	})

	var input = (event) => {
		text(event.target.value)
	}

	const items = ['Item 1', 'Item 2', 'Item 3']

	return (
		<c.p s={`c_black tc_white`}>
			<b.p click={inc} s={`c_black tc_white`}>
				<t.p t={`count ${count()}`} />
				{count() >= 3 ? <t.p t={`hi`} /> : <t.p t={`u`} />}
			</b.p>
			<i.p type={`text`} value={text()} input={input} s={`c_white tc_black ${count()}`} />
			<ul>
				{items.map((item, i) => (
					<li>{`item${i}`} </li>
				))}
			</ul>
		</c.p>
	)
}

export default { p }
