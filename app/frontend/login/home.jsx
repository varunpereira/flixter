import counter from "~/frontend/login/counter"

var p =  () => {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
			<counter.p />
			<p class="mt-8">
				Visit{" "}
				<a target="_blank" class="text-sky-600 hover:underline">
					solidjs.com
				</a>{" "}
				to learn how to build Solid apps.
			</p>
		</main>
	)
}

export default {p}