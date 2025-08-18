import type { Ref, ShallowRef } from 'vue'

export interface IMenu {
	/**
	 * title
	 * Название пункта меню.
	 * @type {string}
	 */
	title: string

	/**
	 * path
	 * Путь, на который ведет пункт меню.
	 * @type {string}
	 */
	path: string
}

export interface IHeaderStore {
	/**
	 * isMenu
	 * Флаг, указывающий, открыто ли меню.
	 * @type {boolean}
	 */
	isMenu: ShallowRef<boolean>

	/**
	 * showMenu
	 * Метод для отображения меню.
	 * @description Устанавливает флаг isMenu в true.
	 */
	showMenu: () => void

	/**
	 * hideMenu
	 * Метод для скрытия меню.
	 * @description Устанавливает флаг isMenu в false.
	 */
	hideMenu: () => void
}

export interface IUseHeaderMenu {
	/**
	 * linkHandler
	 * Обработчик кликов по ссылкам в меню.
	 * @description Если меню открыто и используется бургерное меню, оно закрывается.
	 * Затем выполняется переход по указанному пути.
	 * @param {string} path - Путь, по которому нужно перейти.
	 */
	linkHandler: (path: string) => Promise<void>

	/**
	 * activePath
	 * Реактивное значение текущего пути маршрута.
	 * @description Используется для отслеживания активного пути.
	 */
	activePath: Ref<string>

	/**
	 * navRef
	 * Реактивная ссылка на элемент навигации.
	 * @description Используется для отслеживания внешних кликов.
	 */
	navRef: ShallowRef<HTMLElement | null>
}
