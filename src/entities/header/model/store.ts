import { defineStore } from 'pinia'

import type { IHeaderStore } from '@/entities/header/model/types.ts'
import { useIsBoolean } from '@/shared/lib/use/base'

const namespace = 'header'

/**
 * Хук для управления состоянием заголовка (header).
 * @description Предоставляет методы и состояние для работы с меню,
 * включая отображение, скрытие и проверку видимости меню.
 * @returns {IHeaderStore} - Возвращает объект с состоянием и методами для управления меню.
 */
export const useHeaderStore = defineStore(namespace, (): IHeaderStore => {
	const { isBoolean: isMenu, setTrue: showMenu, setFalse: hideMenu } = useIsBoolean()

	return {
		isMenu,
		showMenu,
		hideMenu
	}
})
