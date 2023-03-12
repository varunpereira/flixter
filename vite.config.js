import { defineConfig } from "vite"
import solid from "solid-start/vite"
import vercel from "solid-start-vercel"

export default defineConfig({
	plugins: [
		solid({
			adapter: vercel(),
			// appRoot: "./app/",
			// routesDir: "./backend/routes",
			// rootEntry: "./config/root",
			clientEntry: "./src/setup_fe.jsx",
			serverEntry: "./src/setup_be.jsx",
		}),
	],
})
