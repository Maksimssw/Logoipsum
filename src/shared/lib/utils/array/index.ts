type TValue = number | string

interface IObject {
	id: TValue
}

export const spliceId = <T>(id: TValue, array: T[]): void => {
	const idx = (array as IObject[]).findIndex(item => item.id === id)
	splice(idx, array)
}

export const spliceKey = <T>(i: TValue, array: T[]): void => {
	const idx = array.findIndex((_, index) => index === i)
	splice(idx, array)
}

export const spliceSimpleBy = (value: TValue, array: TValue[]): void => {
	const idx = array.findIndex(item => item === value)
	splice(idx, array)
}

export const splice = <T>(idx: number, array: T[]): void => {
	if (idx === -1) return
	array.splice(idx, 1)
}

export const findBy = <T extends IObject>(id: TValue, array: T[]): T | undefined => {
	return array.find(item => item.id === id)
}

export const findSimpleBy = (value: TValue, array: TValue[]): TValue | undefined => {
	return array.find(item => item === value)
}

export const refreshArray = <T>(array: T[], newArray: T[]): void => {
	array.length = 0
	array.push(...newArray)
}
