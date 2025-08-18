import type { RouteRecordRaw } from 'vue-router'

import { MainLayout } from '@/shared/ui/layouts'

export const routeName = 'Blog'

export const route: RouteRecordRaw = {
	path: '/blog',
	name: routeName,
	meta: {
		layout: MainLayout
	},
	component: () => import('@/pages/BlogPage')
}
