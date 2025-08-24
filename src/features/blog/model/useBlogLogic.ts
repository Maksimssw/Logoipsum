import { api } from '@/entities/blog'
import { useBlogStore } from '@/entities/blog/model/store.ts'
import type { IUseBlogLogic } from '@/features/blog/model/types.ts'
import { formatDate } from '@/shared/lib/utils/date'
import type { IComment } from '@/shared/ui/comment'

const USER_NAME_MOCK = 'Иван Ванин'

/**
 * Хук для управления логикой блога.
 * @description Предоставляет методы для загрузки данных (тегов, постов, полной информации о посте)
 * и добавления новых комментариев.
 * @returns {IUseBlogLogic} - Возвращает объект с методами для управления логикой блога.
 */
export const useBlogLogic = (): IUseBlogLogic => {
	const { refreshTags, tags, getQueryTags, refreshAllPosts, allPosts, refreshPost, fullPost } = useBlogStore()

	const getTags = () => {
		try {
			if (tags.length) return

			const data = api.getBlogTagsFilter()
			refreshTags(data)
			getQueryTags()
		} catch (err) {
			console.error(err)
		}
	}

	const getPosts = () => {
		try {
			if (allPosts.length) return

			const data = api.getAllPosts()

			refreshAllPosts(data)
		} catch (err) {
			console.error(err)
		}
	}

	const getFullPost = (id: number) => {
		try {
			const data = api.getPostById(id.toString())

			refreshPost(data)
		} catch (err) {
			console.error(err)
		}
	}

	const newComment = (text: string) => {
		const comment: IComment = {
			author: USER_NAME_MOCK,
			date: formatDate(new Date()),
			id: crypto.randomUUID(),
			image: '/assets/authors/author1.webp',
			text
		}

		fullPost.comments = [comment, ...fullPost.comments]
		fullPost.countComments++
	}

	return {
		getTags,
		getPosts,
		getFullPost,
		newComment
	}
}
