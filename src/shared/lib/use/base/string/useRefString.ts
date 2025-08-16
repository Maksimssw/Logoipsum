import { ref } from 'vue'

import type { IUseRefString } from './types.ts'

export const useRefString = (init: string): IUseRefString => {
	const value = ref(init)

	const setValue = (newValue: string): void => {
		value.value = newValue
	}

	const append = (suffix: string): void => {
		value.value += suffix
	}

	const prepend = (prefix: string): void => {
		value.value = prefix + value.value
	}

	const clear = (): void => {
		value.value = ''
	}

	const isEmpty = (): boolean => {
		return value.value.trim() === ''
	}

	return {
		value,
		setValue,
		append,
		prepend,
		clear,
		isEmpty
	}
}
