import { reactive } from 'vue'

import type { IUseReactiveArray, Predicate } from '@/shared/lib/use/base/array/types.ts'
import { refreshArray, spliceId, spliceKey } from '@/shared/lib/utils/array'

export const useReactiveArray = <T>(init: T[] = []): IUseReactiveArray<T> => {
	const array = reactive(init) as T[]

	const add = (item: T): void => {
		array.push(item)
	}

	const removeByKey = (key: number): void => {
		if (key || key === 0) spliceKey(key, array)
	}

	const removeById = (id: number | string): void => {
		if (id) spliceId(id, array)
	}

	const findIndex = (predicate: Predicate<T>) => array.findIndex(predicate)

	const refresh = (data: T[]): void => {
		refreshArray(array, data)
	}

	const concat = (data: T[]): void => {
		const updateArray = [...array, ...data]
		refresh(updateArray)
	}

	return {
		array,
		add,
		removeByKey,
		removeById,
		findIndex,
		refresh,
		concat
	}
}
