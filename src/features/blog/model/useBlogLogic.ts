import { api } from '@/entities/blog'
import { useBlogStore } from '@/entities/blog/model/store.ts'

export const useBlogLogic = () => {
	const { refreshTags, tags, getQueryTags, refreshAllPosts, allPosts, filterPosts } = useBlogStore()

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
			filterPosts()
		} catch (err) {
			console.error(err)
		}
	}

	return {
		getTags,
		getPosts
	}
}
