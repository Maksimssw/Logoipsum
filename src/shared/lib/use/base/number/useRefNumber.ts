import { ref } from 'vue'

import type { IUseRefNumber } from './types.ts'

export const useRefNumber = (init: number): IUseRefNumber => {
	const value = ref<number>(init)

	const increment = (num: number = 1): void => {
		value.value += num
	}

	const decrement = (num: number = 1): void => {
		value.value -= num
	}

	const setValue = (num: number): void => {
		value.value = num
	}

	return {
		value,
		decrement,
		setValue,
		increment
	}
}
