import type { Ref } from 'vue'

export interface IUseRefNumber {
	/**
	 * value
	 * Реактивное числовое значение.
	 */
	value: Ref<number>

	/**
	 * setValue
	 * Устанавливает новое значение для реактивного числа.
	 * @description Обновляет значение value на указанное число.
	 */
	setValue: (num: number) => void

	/**
	 * increment
	 * Увеличивает значение value на указанное число.
	 * @description Если параметр не передан, увеличивает значение на 1.
	 */
	increment: (num?: number) => void

	/**
	 * decrement
	 * Уменьшает значение value на указанное число.
	 * @description Если параметр не передан, уменьшает значение на 1.
	 */
	decrement: (num?: number) => void
}
