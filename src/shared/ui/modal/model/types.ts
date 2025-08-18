import type { ShallowRef } from 'vue'

export interface IModalLogicReturn {
	/**
	 * modal
	 * Реактивная ссылка на элемент модального окна.
	 * @description Используется для отслеживания кликов вне модального окна.
	 */
	modal: ShallowRef<HTMLElement | null>

	/**
	 * handleClose
	 * Метод для закрытия модального окна.
	 * @description Вызывает функцию onClose и разблокирует прокрутку страницы.
	 * @returns {void}
	 */
	handleClose: () => void
}
