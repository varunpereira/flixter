import { createSignal, createEffect } from 'solid-js'

export var r = (init) => {
	return createEffect(init)
}

export var d = (initialValue) => {
	const [value, setValue] = createSignal(initialValue)
	const variable = (newValue) => {
		if (newValue !== undefined) {
			setValue(newValue)
		} else {
			return value()
		}
	}
	variable.valueOf = () => value()
	return variable
}

export var log = (p) => {
	console.log(JSON.stringify(p))
}

export var t = (p, ...children) => {
	return (
		<p class={p?.s}>
			{p?.d}
			{children}
		</p>
	)
}

export var c = (p, ...children) => {
	return <div class={p?.s}>{children}</div>
}

export var b = (p, ...children) => {
	return (
		<button class={p?.s.join(' ')} onClick={p?.click}>
			{children}
		</button>
	)
}
