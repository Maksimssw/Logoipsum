import type { ShallowRef } from 'vue'

export interface IUseIsBoolean {
	/**
	 * isBoolean
	 * Реактивное значение типа boolean.
	 */
	isBoolean: ShallowRef<boolean>

	/**
	 * setIs
	 * Устанавливает новое значение для isBoolean.
	 * @description Обновляет реактивное значение isBoolean на указанное значение.
	 */
	setIs: (bool: boolean) => void

	/**
	 * setTrue
	 * Устанавливает значение isBoolean в true.
	 * @description Присваивает реактивному значению isBoolean значение true.
	 */
	setTrue: () => void

	/**
	 * setFalse
	 * Устанавливает значение isBoolean в false.
	 * @description Присваивает реактивному значению isBoolean значение false.
	 */
	setFalse: () => void

	/**
	 * toggle
	 * Переключает значение isBoolean между true и false.
	 * @description Инвертирует текущее значение isBoolean.
	 */
	toggle: () => void
}
