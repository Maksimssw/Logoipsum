export interface IComment {
	/**
	 * id
	 * Уникальный идентификатор комментария.
	 */
	id: number

	/**
	 * text
	 * Текст комментария.
	 */
	text: string

	/**
	 * author
	 * Автор комментария.
	 */
	author: string

	/**
	 * image
	 * URL изображения автора комментария.
	 */
	image: string

	/**
	 * date
	 * Дата публикации комментария.
	 */
	date: string
}
