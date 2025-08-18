import { onClickOutside } from '@vueuse/core'
import { shallowRef, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useHeaderStore } from '@/entities/header/model/store.ts'
import type { IUseHeaderMenu } from '@/entities/header/model/types.ts'
import { useRefString } from '@/shared/lib/use/base'

/**
 * Хук для управления меню заголовка.
 * @description Предоставляет методы и состояния для работы с меню, включая обработку кликов,
 * отслеживание активного пути и управление видимостью меню.
 * @param {boolean} isBurger - Флаг, указывающий, используется ли бургерное меню.
 * @returns {IUseHeaderMenu} - Возвращает объект с состоянием и методами для управления меню.
 */
export const useHeaderMenu = (isBurger: boolean): IUseHeaderMenu => {
	const route = useRoute()
	const router = useRouter()

	const { value: activePath, setValue } = useRefString(route.path)
	const headerStore = useHeaderStore()

	watch(
		() => route.path,
		() => setValue(route.path)
	)

	const linkHandler = async (path: string) => {
		if (isBurger && headerStore.isMenu) headerStore.hideMenu()

		await router.push(path)
	}

	const navRef = shallowRef<HTMLElement | null>(null)

	onClickOutside(navRef, () => {
		if (isBurger && headerStore.isMenu) headerStore.hideMenu()
	})

	return { linkHandler, activePath, navRef }
}
