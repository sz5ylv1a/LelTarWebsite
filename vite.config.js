import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const baseRoute = 'LelTarWebsite'

// https://vite.dev/config/
export default defineConfig({
	base: `/${baseRoute}/`,
	publicPath: process.env.NODE_ENV === 'production' ? `/${baseRoute}/` : '/',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})