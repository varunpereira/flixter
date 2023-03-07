import { createSignal, createEffect, untrack } from 'solid-js'

export var r = (init) => {
	return createEffect(init)
}

export var d = (initialValue) => {
	const [value, setValue] = createSignal(initialValue)
	return (newValue) => {
		if (newValue != null) setValue(newValue)
		else return value()
	}
}

export var log = (p) => {
	console.log(JSON.stringify(p))
}

export var t = {
	m: (props) => {
		return <p class={props.s}>{props.t}</p>
	},
}

export var c = {
	m: (props) => {
		return <div class={props.s}>{props.children}</div>
	},
}

export var b = {
	m: (props) => {
		return (
			<button onClick={props.click} class={props.s}>
				{props.children}
			</button>
		)
	},
}

export var i = {
	m: (props) => {
		return <input class={props.s} type={props.type} value={props.value} onInput={props.input} />
	},
}
