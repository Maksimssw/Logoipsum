import type { IUseLocalStorage } from './types.ts'

export const useLocalStorage = <T>(key: string, initialValue: T): IUseLocalStorage<T> => {
	const keyLS = `STORE:${key}`

	const valueLS = window.localStorage.getItem(keyLS)
	const value: T = valueLS ? JSON.parse(valueLS) : initialValue

	const setLSValue = (value: T): void => {
		window.localStorage.setItem(keyLS, JSON.stringify(value))
	}

	return { value, setLSValue }
}
