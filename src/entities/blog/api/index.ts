import type { IPost } from '@/entities/blog/model/types.ts'
import { getBlogTagsFilterMock, getPostsMock } from '@/shared/backend'
import type { ITag } from '@/shared/ui/Tag/Tag.vue'

const getBlogTagsFilter = (): ITag[] => {
	return getBlogTagsFilterMock
}

const getAllPosts = (): IPost[] => {
	return getPostsMock
}

export const api = { getBlogTagsFilter, getAllPosts } as const
