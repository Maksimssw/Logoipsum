import type { RouteRecordRaw } from 'vue-router'

import EmptyLayout from '@/shared/ui/layouts/EmptyLayout/EmptyLayout.vue'

export const routeName = 'NotFoundPage'

export const route: RouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	name: routeName,
	meta: {
		layout: EmptyLayout
	},
	component: () => import('@/pages/NotFoundPage')
}
