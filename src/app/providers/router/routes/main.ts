import type { RouteRecordRaw } from 'vue-router'

import { MainLayout } from '@/shared/ui/layouts/MainLayout'

export const routeName = 'Main'

export const route: RouteRecordRaw = {
	path: '/',
	name: routeName,
	meta: {
		layout: MainLayout
	},
	component: () => import('@/pages/MainPage')
}
