import { AppPages } from '@/app/providers'

interface IRoute<T extends object = {}> {
	name: string
	params: T
}

export class AppRoutes {
	private constructor() {}

	static getMain() {
		return getRoute(AppPages.main, {})
	}

	static getBlog() {
		return getRoute(AppPages.blog, {})
	}
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
	return {
		name,
		params
	}
}
