// @refresh reload
import { Suspense } from 'solid-js'
import {
	A,
	Body,
	ErrorBoundary,
	Head,
	Html,
	Meta,
	Routes,
	Route,
	Scripts,
	Title,
	useNavigate
	// FileRoutes,
} from 'solid-start'
import '~/config/glob.scss'
import home from '~/login/home'

export var nav 

export default () => {
	nav = useNavigate()
	return (
		<Html lang="en">
			<Head>
				<Title>SolidStart - With TailwindCSS</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<nav class="bg-sky-800">
							<ul class="container flex items-center p-3 text-gray-200">
								<li class={`border-b-2 mx-1.5 sm:mx-6`}>
									<A href="/">Home</A>
								</li>
								<li class={`border-b-2 mx-1.5 sm:mx-6`}>
									<A href="/about">About</A>
								</li>
							</ul>
						</nav>
						<Routes>
							{/* <FileRoutes /> */}
							<Route path="/" component={home} />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	)
}
