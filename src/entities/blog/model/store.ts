import { defineStore } from 'pinia'

import type { IPost } from '@/entities/blog/model/types.ts'
import { useLocalStorage } from '@/shared/lib/browser/localStorage'
import { useQuery } from '@/shared/lib/browser/query'
import { useIsBoolean, useReactiveArray, useRefString } from '@/shared/lib/use/base'
import type { ITag } from '@/shared/ui/Tag/Tag.vue'

const namespace = 'blog'
const TAGS_NAME = 'tags'
const SEARCH_BLOG_NAME = 'search'

export const useBlogStore = defineStore(namespace, () => {
	const { isBoolean: isVisibleFilter, toggle: toggleFilter, setIs: setFilter } = useIsBoolean()
	const { value: isVisibleFilterLS, setLSValue: setLSFilter } = useLocalStorage<boolean>(
		'isVisibleFilter',
		isVisibleFilter.value
	)

	const { array: allPosts, refresh: refreshAllPosts } = useReactiveArray<IPost>()
	const { array: visiblePosts, refresh: refreshVisiblePosts } = useReactiveArray<IPost>()

	const { value: searchPost, setValue: setSearchPost } = useRefString('')
	const { array: tags, refresh: refreshTags } = useReactiveArray<ITag>()
	const { setQuery, getQuery } = useQuery()

	const changeActiveTag = async (index: number, active: boolean): Promise<void> => {
		if (index >= 0 && index < tags.length) {
			tags[index] = { ...tags[index], active }
		}

		const activeTags = tags
			.filter(tag => tag.active)
			.map(tag => tag.code)
			.join(',')

		await setQuery(TAGS_NAME, activeTags)
		filterPosts()
	}

	const getQueryTags = () => {
		const queryTags = getQuery(TAGS_NAME) as string

		if (!queryTags) return

		const activeCodes = queryTags.split(',')

		for (let i = 0; i < tags.length; i++) {
			tags[i].active = activeCodes.includes(tags[i].code)
		}
	}

	const clearFilters = async () => {
		for (let i = 0; i < tags.length; i++) {
			tags[i].active = false
		}

		await setQuery(TAGS_NAME, '')
		filterPosts()
	}

	const toggleFilterHandler = (): void => {
		toggleFilter()
		setLSFilter(isVisibleFilter.value)
	}

	const checkVisibleFilter = (): void => {
		setFilter(isVisibleFilterLS)
	}

	const setSearch = async (text: string): Promise<void> => {
		const trimText = text.trim()
		await setQuery(SEARCH_BLOG_NAME, trimText)
		setSearchPost(trimText)
		filterPosts()
	}

	const getQuerySearch = (): void => {
		const querySearch = getQuery(SEARCH_BLOG_NAME) as string

		if (!querySearch) return

		setSearchPost(querySearch)
	}

	const filterPosts = (): void => {
		const activeTagCodes = tags.filter(tag => tag.active).map(tag => tag.code)
		let postsFilter = allPosts

		if (activeTagCodes.length) {
			postsFilter = postsFilter.filter(post =>
				activeTagCodes.every(activeCode => post.tags.some(postTag => postTag.code === activeCode))
			)
		}

		if (searchPost.value) {
			postsFilter = postsFilter.filter(post => post.title.toLowerCase().includes(searchPost.value.toLowerCase()))
		}

		refreshVisiblePosts(postsFilter)
	}

	return {
		isVisibleFilter,
		tags,
		allPosts,
		searchPost,
		visiblePosts,
		refreshAllPosts,
		refreshTags,
		changeActiveTag,
		clearFilters,
		toggleFilterHandler,
		checkVisibleFilter,
		getQuerySearch,
		setSearch,
		filterPosts,
		getQueryTags
	}
})
