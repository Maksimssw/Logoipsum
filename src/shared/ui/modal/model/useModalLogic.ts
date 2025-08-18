import { onClickOutside, useScrollLock } from '@vueuse/core'
import { onMounted, onUnmounted, shallowRef } from 'vue'

import { useIsBoolean } from '@/shared/lib/use/base'
import type { IModalLogicReturn } from '@/shared/ui/modal/model/types.ts'

/**
 * Хук для управления логикой модального окна.
 * @description Предоставляет методы и состояние для работы с модальным окном,
 * включая блокировку прокрутки, обработку закрытия и нажатий клавиш.
 * @param {Function} onClose - Функция, вызываемая при закрытии модального окна.
 * @returns {IModalLogicReturn} - Возвращает объект с состоянием и методами для управления модальным окном.
 */
export const useModalLogic = (onClose: () => void): IModalLogicReturn => {
	const modal = shallowRef<HTMLElement | null>(null)
	const { isBoolean: isLocked, setTrue: setTrueLocked, setFalse: setFalseLocked } = useIsBoolean(true)

	useScrollLock(document.body, isLocked.value)

	const handleClose = (): void => {
		onClose()
		setFalseLocked()
	}

	const handleKeyDown = (event: KeyboardEvent): void => {
		if (event.key === 'Escape') handleClose()
	}

	onClickOutside(modal, (): void => {
		handleClose()
	})

	onMounted((): void => {
		setTrueLocked()
		window.addEventListener('keydown', handleKeyDown)
	})

	onUnmounted((): void => {
		setFalseLocked()
		window.removeEventListener('keydown', handleKeyDown)
	})

	return {
		modal,
		handleClose
	}
}
