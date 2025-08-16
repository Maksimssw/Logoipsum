import { ref } from 'vue'

import type { IUseIsBoolean } from './types.ts'

export const useIsBoolean = (init: boolean = false): IUseIsBoolean => {
	const isBoolean = ref(init)

	const setIs = (bool: boolean): void => {
		isBoolean.value = bool
	}

	const setTrue = (): void => {
		isBoolean.value = true
	}

	const setFalse = (): void => {
		isBoolean.value = false
	}

	const toggle = (): void => {
		isBoolean.value = !isBoolean.value
	}

	return {
		isBoolean,
		setIs,
		setTrue,
		setFalse,
		toggle
	}
}
