import { state, mount, react, write, d, t, b, i, v } from '~/frontend/config/glob'

var p = () => {
	var count = state(0)
	var text = state(`init`)

	// mount(() => write(`hi guys ${count()}`))

	var inc = () => {
		count(count() + 1)
		// write(count())
	}

	react(() => {
		if (count() > 5) {
			// write(count())
		}
	})

	var input = (event) => {
		text(event.target.value)
	}

	const items = ['Item 1', 'Item 2', 'Item 3']

	return b({ click: () => inc(), style:()=>count(), value: ()=> count() })
	{
		/* <d.p s={`bg-black text-white`}>
			 <t.p c={`hiiiii`} />
			<b.p click={inc} s={`c=black tc=white`}>
				<t.p c={`count ${count()}`} />
				{count() >= 3 ? <t.p t={`hi`} /> : <t.p c={`u`} />}
			</b.p>
			<v.p c={``} />
			<i.p k={`text`} c={text()} input={input} s={`c=white tc=black ${count()}`} />
			{items.map((item, i) => `item${i}`)} 
		 </d.p>*/
	}
}

export default { p }
