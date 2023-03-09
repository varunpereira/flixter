import { createSignal, createEffect, onMount, createMemo } from 'solid-js'
import { Title } from 'solid-start'

export var react = (init) => {
	return createEffect(init)
}

export var state = (init) => {
	const [value, setValue] = createSignal(init)
	return (newValue) => {
		if (newValue != null) setValue(newValue)
		else return value()
	}
}

export var write = (p) => {
	console.log(JSON.stringify(p))
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

export var t2 = {
	p: (props) => {
		var style = props.s?.toLowerCase().replace(/=/g, '-')
		return <p class={style}>{props.c}</p>
	},
}

export var d = {
	p: (props) => {
		var style = props.s?.toLowerCase().replace(/=/g, '-')
		return <div class={style}>{props.children}</div>
	},
}

export var b2 = {
	p: (props) => {
		var style = props.s?.toLowerCase().replace(/=/g, '-')
		return (
			<button onClick={props.click} class={style}>
				{props.children}
			</button>
		)
	},
}

export var i = {
	p: (props) => {
		var style = props.s?.toLowerCase().replace(/=/g, '-')
		return <input class={style} type={props.t} value={props.c} onInput={props.input} />
	},
}

export var v = {
	p: (props) => {
		var style = props.s?.toLowerCase().replace(/=/g, '-')
		return (
			<video class={style} poster={props.def} controls={props.controls}>
				<source src={props.c} type={props.t} />
				Your browser does not support the video tag.
			</video>
		)
	},
}

export var title = {
	p: (props) => {
		return <Title>{props.c}</Title>
	},
}

export var b = (props) => {
  return (
    <button onClick={props.click} class={props.style} >
      {props.value}
    </button>
  )
}

export var t = (props) => {
	return <p class={props.style()}>{props.c()}</p>
}
