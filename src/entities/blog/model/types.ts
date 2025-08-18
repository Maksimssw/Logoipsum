import type { ComputedRef, ShallowRef } from 'vue'

import type { IComment } from '@/shared/ui/comment/Comment'
import type { ITag } from '@/shared/ui/Tag'

export interface IPost {
	/**
	 * image
	 * URL изображения поста.
	 * @type {string}
	 */
	image: string

	/**
	 * id
	 * Уникальный идентификатор поста.
	 * @type {number}
	 */
	id: number

	/**
	 * date
	 * Дата публикации поста.
	 * @type {string}
	 */
	date: string

	/**
	 * time
	 * Время чтения поста.
	 * @type {string}
	 */
	time: string

	/**
	 * countComments
	 * Количество комментариев к посту.
	 * @type {number}
	 */
	countComments: number

	/**
	 * title
	 * Заголовок поста.
	 * @type {string}
	 */
	title: string

	/**
	 * shortDescription
	 * Краткое описание поста.
	 * @type {string}
	 */
	shortDescription: string

	/**
	 * tags
	 * Список тегов, связанных с постом (без поля active).
	 * @type {Array<Omit<ITag, 'active'>>}
	 */
	tags: Omit<ITag, 'active'>[]
}

export interface IFullPost extends Omit<IPost, 'shortDescription'> {
	/**
	 * description
	 * Полное описание поста.
	 */
	description: string

	/**
	 * comments
	 * Список комментариев к посту.
	 */
	comments: IComment[]
}

export interface IBlogStore {
	/**
	 * isVisibleFilter
	 * Флаг видимости фильтра.
	 * @type {boolean}
	 */
	isVisibleFilter: ShallowRef<boolean>

	/**
	 * tags
	 * Список тегов.
	 */
	tags: ITag[]

	/**
	 * allPosts
	 * Все посты блога.
	 */
	allPosts: IPost[]

	/**
	 * searchPost
	 * Текущее значение поиска.
	 */
	searchPost: ShallowRef<string>

	/**
	 * fullPost
	 * Полная информация о выбранном посте.
	 */
	fullPost: IFullPost

	/**
	 * visiblePosts
	 * Отфильтрованные и отображаемые посты.
	 */
	visiblePosts: ComputedRef<IPost[]>

	/**
	 * refreshAllPosts
	 * Метод обновления всех постов.
	 */
	refreshAllPosts: (data: IPost[]) => void

	/**
	 * refreshTags
	 * Метод обновления списка тегов.
	 */
	refreshTags: (data: ITag[]) => void

	/**
	 * refreshPost
	 * Метод обновления полной информации о посте.
	 */
	refreshPost: (data: IFullPost) => void

	/**
	 * changeActiveTag
	 * Метод изменения активности тега.
	 * @param {number} index - Индекс тега в массиве.
	 * @param {boolean} active - Новое состояние активности тега.
	 * @returns {Promise<void>}
	 */
	changeActiveTag: (index: number, active: boolean) => Promise<void>

	/**
	 * clearFilters
	 * Метод очистки всех фильтров.
	 * @returns {Promise<void>}
	 */
	clearFilters: () => Promise<void>

	/**
	 * toggleFilter
	 * Метод переключения видимости фильтра.
	 * @returns {void}
	 */
	toggleFilter: () => void

	/**
	 * checkVisibleFilter
	 * Метод проверки состояния видимости фильтра.
	 * @returns {void}
	 */
	checkVisibleFilter: () => void

	/**
	 * getQuerySearch
	 * Метод получения значения поиска из query-параметров.
	 * @returns {void}
	 */
	getQuerySearch: () => void

	/**
	 * setSearch
	 * Метод установки значения поиска.
	 * @param {string} text - Новое значение поиска.
	 * @returns {Promise<void>}
	 */
	setSearch: (text: string) => Promise<void>

	/**
	 * getQueryTags
	 * Метод получения активных тегов из query-параметров.
	 * @returns {void}
	 */
	getQueryTags: () => void
}
