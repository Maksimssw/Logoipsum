export interface ITag {
	/**
	 * text
	 * Отображаемый текст тега.
	 */
	text: string

	/**
	 * code
	 * Уникальный код тега.
	 * @description Используется для идентификации тега в системе.
	 */
	code: string

	/**
	 * active
	 * Флаг активности тега.
	 * @description Указывает, выбран ли тег для фильтрации
	 */
	active: boolean
}
