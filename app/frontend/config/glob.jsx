import { createSignal, createEffect, onMount } from 'solid-js'

export var react = (init) => {
	return createEffect(init)
}

export var state = (initialValue) => {
	const [value, setValue] = createSignal(initialValue)
	return (newValue) => {
		if (newValue != null) setValue(newValue)
		else return value()
	}
}

export var write = (p) => {
	console.log(JSON.stringify(p))
}

export var t = {
	p: (props) => {
		return <p class={props.s}>{props.t}</p>
	},
}

export var c = {
	p: (props) => {
		return <div class={props.s}>{props.children}</div>
	},
}

export var b = {
	p: (props) => {
		return (
			<button onClick={props.click} class={props.s}>
				{props.children}
			</button>
		)
	},
}

export var i = {
	p: (props) => {
		return <input class={props.s} type={props.type} value={props.value} onInput={props.input} />
	},
}

export var mount = onMount

export var go = () => {
	return {
		same: (link) => {
			window.location.href = link
		},
		new: () => {
			window.open(link)
		},
	}
}
