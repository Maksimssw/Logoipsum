import type { IFullPost, IPost } from '@/entities/blog/model/types.ts'
import { getBlogTagsFilterMock, getPostByIdMock, getPostsMock } from '@/shared/backend'
import type { ITag } from '@/shared/ui/Tag'

const getBlogTagsFilter = (): ITag[] => {
	return getBlogTagsFilterMock
}

const getAllPosts = (): IPost[] => {
	return getPostsMock
}

const getPostById = (id: string): IFullPost => {
	return getPostByIdMock[id as keyof typeof getPostByIdMock]
}

export const api = { getBlogTagsFilter, getAllPosts, getPostById } as const
