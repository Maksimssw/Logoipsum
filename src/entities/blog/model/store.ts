import { defineStore } from 'pinia'
import { computed, watch } from 'vue'

import type { IBlogStore, IFullPost, IPost } from '@/entities/blog'
import { useLocalStorage } from '@/shared/lib/browser/localStorage'
import { useQuery } from '@/shared/lib/browser/query'
import { useIsBoolean, useReactiveArray, useRefString } from '@/shared/lib/use/base'
import { useReactiveObject } from '@/shared/lib/use/base/object'
import type { ITag } from '@/shared/ui/Tag'

const namespace = 'blog'
const TAGS_NAME = 'tags'
const SEARCH_BLOG_NAME = 'search'

const fullPostDefault: IFullPost = {
	id: 0,
	image: '',
	date: '',
	time: '',
	countComments: 0,
	title: '',
	description: '',
	tags: [],
	comments: []
}

/**
 * Хук для управления состоянием блога.
 * @description Предоставляет методы и состояние для работы с постами, тегами, поиском и фильтрами.
 * @returns {IBlogStore} - Возвращает объект с состоянием, производными данными и методами для управления блогом.
 */
export const useBlogStore = defineStore(namespace, (): IBlogStore => {
	// ===== UI-фильтр
	const { isBoolean: isVisibleFilter, toggle: toggleFilter, setIs: setFilter } = useIsBoolean()
	const { value: isVisibleFilterLS, setLSValue: setLSFilter } = useLocalStorage<boolean>(
		'isVisibleFilter',
		isVisibleFilter.value
	)

	watch(
		() => isVisibleFilter.value,
		v => setLSFilter(v),
		{ immediate: true }
	)

	// ===== Данные
	const { array: allPosts, refresh: refreshAllPosts } = useReactiveArray<IPost>()
	const { array: tags, refresh: refreshTags } = useReactiveArray<ITag>()
	const { value: searchPost, setValue: setSearchPost } = useRefString('')
	const { object: fullPost, refresh: refreshPost } = useReactiveObject(fullPostDefault)

	const { setQuery, getQuery } = useQuery()

	// ===== Деривативы
	const activeTagCodes = computed(() => tags.filter(t => t.active).map(t => t.code))

	const visiblePosts = computed<IPost[]>(() => {
		const searchText = searchPost.value.trim().toLowerCase()
		const codes = activeTagCodes.value
		const needTags = codes.length > 0
		const activeSet = needTags ? new Set(codes) : null

		if (!needTags && !searchText) return allPosts

		return allPosts.filter(post => {
			// ===== Фильтрация по тегам
			if (needTags) {
				const postCodes = new Set((post.tags || []).map(tag => tag.code))
				for (const code of activeSet!) if (!postCodes.has(code)) return false
			}

			// ===== Фильтрация по пойску
			if (searchText && !post.title?.toLowerCase().includes(searchText)) return false

			return true
		})
	})

	// ===== Методы

	const changeActiveTag = async (index: number, active: boolean): Promise<void> => {
		if (index >= 0 && index < tags.length) {
			tags[index] = { ...tags[index], active }
		}

		const activeTagsCsv = tags
			.filter(t => t.active)
			.map(t => t.code)
			.join(',')

		await setQuery(TAGS_NAME, activeTagsCsv)
	}

	const getQueryTags = (): void => {
		const queryTags = getQuery(TAGS_NAME) as string
		if (!queryTags) return

		const activeCodes = new Set(queryTags.split(',').filter(Boolean))

		for (let i = 0; i < tags.length; i++) {
			const t = tags[i]
			if (t) tags[i] = { ...t, active: activeCodes.has(t.code) }
		}
	}

	const clearFilters = async (): Promise<void> => {
		for (let i = 0; i < tags.length; i++) {
			const tag = tags[i]

			if (tag?.active) tags[i] = { ...tag, active: false }
		}

		await setQuery(TAGS_NAME, '')
	}

	const checkVisibleFilter = (): void => {
		setFilter(isVisibleFilterLS)
	}

	const setSearch = async (text: string): Promise<void> => {
		const trimText = text.trim()
		await setQuery(SEARCH_BLOG_NAME, trimText)
		setSearchPost(trimText)
	}

	const getQuerySearch = (): void => {
		const querySearch = getQuery(SEARCH_BLOG_NAME) as string
		if (!querySearch) return
		setSearchPost(querySearch)
	}

	return {
		// state
		isVisibleFilter,
		tags,
		allPosts,
		searchPost,
		fullPost,

		// derived
		visiblePosts,

		// loaders/setters
		refreshAllPosts,
		refreshTags,
		refreshPost,

		// actions
		changeActiveTag,
		clearFilters,
		toggleFilter,
		checkVisibleFilter,
		getQuerySearch,
		setSearch,
		getQueryTags
	}
})
