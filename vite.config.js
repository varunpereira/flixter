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
			clientEntry: "./src/config/setup_fe.jsx",
			serverEntry: "./src/config/setup_be.jsx",
		}),
	],
})
