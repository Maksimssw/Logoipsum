import tsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
	{
		files: ['**/*.{ts,tsx,vue,js,jsx}'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			vue: pluginVue
		},
		rules: {
			'no-console': process.env.MODE === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.MODE === 'production' ? 'warn' : 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'vue/multi-word-component-names': 'off'
		}
	}
]
