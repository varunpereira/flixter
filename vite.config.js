import { defineConfig } from "vite"
import solid from "solid-start/vite"
import vercel from "solid-start-vercel"

export default defineConfig({
	plugins: [
		solid({
			adapter: vercel(),
			appRoot: "./app/",
			// routesDir: "./backend/routes",
			rootEntry: "./app/config/root",
			clientEntry: "config/setup",
			serverEntry: "./app/config/middleware",
		}),
	],
})
