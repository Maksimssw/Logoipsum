export type Predicate<T> = (item: T) => boolean

export interface IUseReactiveArray<T> {
	/**
	 * array
	 * Реактивный массив элементов.
	 */
	array: T[]

	/**
	 * add
	 * Добавляет новый элемент в массив.
	 * @description Элемент добавляется в конец массива.
	 */
	add: (item: T) => void

	/**
	 * removeByKey
	 * Удаляет элемент из массива по индексу.
	 * @description Удаляет элемент с указанным индексом.
	 */
	removeByKey: (key: number) => void

	/**
	 * removeById
	 * Удаляет элемент из массива по значению id.
	 * @description Находит элемент с указанным id и удаляет его из массива.
	 */
	removeById: (id: number | string) => void

	/**
	 * Находит индекс элемента по содержимому.
	 */
	findIndex: (predicate: Predicate<T>) => number

	/**
	 * refresh
	 * Заменяет текущий массив новыми данными.
	 * @description Полностью обновляет содержимое массива новыми данными.
	 */
	refresh: (data: T[]) => void

	/**
	 * contact
	 * Объединяет текущий массив с новыми данными.
	 * @description Добавляет новые данные в конец текущего массива.
	 */
	concat: (data: T[]) => void
}
