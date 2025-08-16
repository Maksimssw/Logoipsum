import { reactive } from 'vue'

import type { IUseReactiveObject } from '@/shared/lib/use/base/object/types.ts'

export const useReactiveObject = <T extends Record<string, any>>(init: T = {} as T): IUseReactiveObject<T> => {
	const object = reactive(init)

	const setProperty = (key: string, value: any): void => {
		object[key] = value
	}

	const getProperty = (key: string): any => {
		return object[key]
	}

	const removeProperty = (key: string): void => {
		delete object[key]
	}

	const clear = (): void => {
		Object.keys(object).forEach(key => delete object[key])
	}

	const refresh = (data: T): void => {
		Object.assign(object, data)
	}

	const hasProperty = (key: string): boolean => {
		return key in object
	}

	const setNestedProperty = (path: string, value: any): void => {
		const keys = path.split('.')
		let current = object

		for (let i = 0; i < keys.length - 1; i++) {
			current = current[keys[i]]
		}

		current[keys[keys.length - 1]] = value
	}

	const getNestedProperty = (path: string): any => {
		const keys = path.split('.')
		let current = object

		for (const key of keys) {
			if (!(key in current)) return undefined
			current = current[key]
		}

		return current
	}

	const removeNestedProperty = (path: string): void => {
		const keys = path.split('.')
		let current = object

		for (let i = 0; i < keys.length - 1; i++) {
			current = current[keys[i]]
		}

		delete current[keys[keys.length - 1]]
	}

	const forEach = (callback: (key: string, value: any) => void): void => {
		Object.entries(object).forEach(([key, value]) => callback(key, value))
	}

	const filter = (predicate: (key: string, value: any) => boolean): Partial<T> => {
		const result: { [key: string]: any } = {}

		Object.entries(object).forEach(([key, value]) => {
			if (predicate(key, value)) result[key] = value
		})

		return result as Partial<T>
	}

	return {
		object,
		setProperty,
		getProperty,
		removeProperty,
		clear,
		refresh,
		hasProperty,
		setNestedProperty,
		getNestedProperty,
		removeNestedProperty,
		forEach,
		filter
	}
}
