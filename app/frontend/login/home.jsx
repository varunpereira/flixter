import { A } from "solid-start"
import $counter from "~/frontend/login/counter"

export default () => {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
			{/* <$nav_bar hover_in={w} s={`tc_red ${d_e === true && `yes`} w_[100rem]`} /> */}
			<$counter />
			<p class="mt-8">
				Visit{" "}
				<a target="_blank" class="text-sky-600 hover:underline">
					solidjs.com
				</a>{" "}
				to learn how to build Solid apps.
			</p>
			<p class="my-4">
				<span>Home</span>
				{" - "}
				<A href="/about" class="text-sky-600 hover:underline">
					About Page
				</A>{" "}
			</p>
		</main>
	)
}

	// <button
	// 	class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
	// 	onClick={() => {
	// 		count(count() + 1)
	// 	}}>
	// 	Clicks: {count()}
	// 	{count() === 3 ? <div>hi</div> : <div>no</div>}
	// </button>