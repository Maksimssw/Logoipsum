export interface IUseLocalStorage<T> {
	/**
	 * value
	 * Текущее значение, полученное из localStorage или начальное значение.
	 */
	value: T

	/**
	 * setLSValue
	 * Устанавливает новое значение в localStorage.
	 * @description Сохраняет значение в localStorage под указанным ключом.
	 */
	setLSValue: (value: T) => void
}
