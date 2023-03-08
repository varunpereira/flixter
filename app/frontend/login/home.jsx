import counter from '~/frontend/login/counter'
import { title } from '~/frontend/config/glob'

var p = () => {
	return (
		<div class="text-center mx-auto text-gray-700 p-4">
			<title.p c={`yoma`} />
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
			<counter.p />
		</div>
	)
}

export default { p }
