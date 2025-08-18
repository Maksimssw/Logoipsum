import type { ShallowRef } from 'vue'

export interface IUseRefString {
	/**
	 * value
	 * Реактивное строковое значение.
	 */
	value: ShallowRef<string>

	/**
	 * setValue
	 * Устанавливает новое значение для реактивной строки.
	 * @description Обновляет значение value на указанную строку.
	 */
	setValue: (newValue: string) => void

	/**
	 * append
	 * Добавляет строку в конец текущего значения.
	 * @description Присоединяет новую строку к существующему значению.
	 */
	append: (suffix: string) => void

	/**
	 * prepend
	 * Добавляет строку в начало текущего значения.
	 * @description Вставляет новую строку перед существующим значением.
	 */
	prepend: (prefix: string) => void

	/**
	 * clear
	 * Очищает значение строки.
	 * @description Устанавливает значение value в пустую строку.
	 */
	clear: () => void

	/**
	 * isEmpty
	 * Проверяет, является ли строка пустой.
	 * @description Возвращает true, если строка пустая, иначе false.
	 */
	isEmpty: () => boolean
}
