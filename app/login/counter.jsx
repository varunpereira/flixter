import { state, mount, react, write, d, t, b, i, v } from '~/config/glob'

export default () => {
	var count = state(0)
	var text = state('init')

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

	return () => b({ click: inc, style: 'bg-red-500' + count(), value: count() })
}
