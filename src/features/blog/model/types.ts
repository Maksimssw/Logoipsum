export interface IUseBlogLogic {
	/**
	 * getTags
	 * Метод для загрузки тегов.
	 * @description Загружает теги из API, если они еще не загружены, и обновляет их в сторе.
	 * @returns {Promise<void>}
	 */
	getTags: () => void

	/**
	 * getPosts
	 * Метод для загрузки всех постов.
	 * @description Загружает все посты из API, если они еще не загружены, и обновляет их в сторе.
	 * @returns {Promise<void>}
	 */
	getPosts: () => void

	/**
	 * getFullPost
	 * Метод для загрузки полной информации о посте.
	 * @description Загружает полную информацию о посте по его ID из API и обновляет её в сторе.
	 * @param {number} id - Уникальный идентификатор поста.
	 * @returns {Promise<void>}
	 */
	getFullPost: (id: number) => void

	/**
	 * newComment
	 * Метод для добавления нового комментария.
	 * @description Создает новый комментарий и добавляет его к текущему посту.
	 * @param {string} text - Текст нового комментария.
	 * @returns {void}
	 */
	newComment: (text: string) => void
}
