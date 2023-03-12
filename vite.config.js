import { defineConfig } from "vite"
import solid from "solid-start/vite"
import vercel from "solid-start-vercel"

export default defineConfig({
	plugins: [
		solid({
			// adapter: vercel(),
			appRoot: "./app/",
			// routesDir: "./backend/routes",
			rootEntry: "./app/config/root.jsx",
			// clientEntry: "./app/config/setup.jsx",
			// serverEntry: "./app/config/middleware.jsx",
		}),
	],
})
