export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): T => {
	let timer: ReturnType<typeof setTimeout> | null = null
	return function (this: any, ...args: any[]) {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => func.apply(this, args), delay)
	} as T
}
