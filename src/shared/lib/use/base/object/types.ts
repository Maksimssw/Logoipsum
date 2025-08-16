import type { Reactive } from 'vue'

export interface IUseReactiveObject<T> {
	/**
	 * object
	 * Реактивный объект, управляемый хуком.
	 * @description Предоставляет доступ к текущему состоянию объекта.
	 */
	object: Reactive<T>

	/**
	 * setProperty
	 * Устанавливает значение для указанного свойства объекта.
	 * @description Добавляет или обновляет свойство в реактивном объекте.
	 * @param key - Ключ свойства, которое нужно установить.
	 * @param value - Значение, которое нужно присвоить свойству.
	 */
	setProperty: (key: string, value: any) => void

	/**
	 * getProperty
	 * Возвращает значение указанного свойства объекта.
	 * @description Получает значение свойства по его ключу.
	 * @param key - Ключ свойства, значение которого нужно получить.
	 * @returns Значение свойства или `undefined`, если свойство не существует.
	 */
	getProperty: (key: string) => any

	/**
	 * removeProperty
	 * Удаляет указанное свойство из объекта.
	 * @description Удаляет свойство по его ключу.
	 * @param key - Ключ свойства, которое нужно удалить.
	 */
	removeProperty: (key: string) => void

	/**
	 * clear
	 * Очищает все свойства объекта.
	 * @description Удаляет все свойства из реактивного объекта.
	 */
	clear: () => void

	/**
	 * refresh
	 * Обновляет объект новыми данными.
	 * @description Заменяет текущее состояние объекта на новое.
	 * @param data - Новые данные для обновления объекта.
	 */
	refresh: (data: T) => void

	/**
	 * hasProperty
	 * Проверяет, существует ли указанное свойство в объекте.
	 * @description Возвращает `true`, если свойство существует, иначе `false`.
	 * @param key - Ключ свойства, которое нужно проверить.
	 * @returns `true`, если свойство существует, иначе `false`.
	 */
	hasProperty: (key: string) => boolean

	/**
	 * setNestedProperty
	 * Устанавливает значение для вложенного свойства объекта.
	 * @description Обновляет или добавляет вложенное свойство по указанному пути.
	 * @param path - Путь к вложенному свойству (через точки, например, "user.name").
	 * @param value - Значение, которое нужно присвоить вложенному свойству.
	 */
	setNestedProperty: (path: string, value: any) => void

	/**
	 * getNestedProperty
	 * Возвращает значение вложенного свойства объекта.
	 * @description Получает значение вложенного свойства по указанному пути.
	 * @param path - Путь к вложенному свойству (через точки, например, "user.name").
	 * @returns Значение вложенного свойства или `undefined`, если путь невалиден.
	 */
	getNestedProperty: (path: string) => any

	/**
	 * removeNestedProperty
	 * Удаляет вложенное свойство объекта.
	 * @description Удаляет вложенное свойство по указанному пути.
	 * @param path - Путь к вложенному свойству (через точки, например, "user.name").
	 */
	removeNestedProperty: (path: string) => void

	/**
	 * forEach
	 * Выполняет функцию обратного вызова для каждого свойства объекта.
	 * @description Перебирает все свойства объекта и вызывает функцию для каждого из них.
	 * @param callback - Функция, которая будет вызвана для каждого свойства.
	 */
	forEach: (callback: (key: string, value: any) => void) => void

	/**
	 * filter
	 * Фильтрует свойства объекта на основе условия.
	 * @description Возвращает новый объект, содержащий только те свойства, которые удовлетворяют условию.
	 * @param predicate - Функция, определяющая, должно ли свойство быть включено.
	 * @returns Новый объект с отфильтрованными свойствами.
	 */
	filter: (predicate: (key: string, value: any) => boolean) => Partial<T>
}
