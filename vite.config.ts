import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), tailwindcss()],
	build: {
		minify: true
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	server: {
		host: '0.0.0.0',
		port: 5252,
		open: true
	}
})
