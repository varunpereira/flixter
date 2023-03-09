import counter from '~/login/counter'
import { title, server } from '~/config/glob'
import { useRouteData } from 'solid-start'

export default () => {
	var b = server(() => {
		console.log('hi')
		return 'server'
	})

	var test = useRouteData()
	return (
		<div class="text-center mx-auto text-gray-700 p-4">
			<title.p c={`yoma`} />
			{b}
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
			{counter()}
		</div>
	)
}
