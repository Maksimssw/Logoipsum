import type { ITag } from '@/shared/ui/Tag/Tag.vue'

export interface IPost {
	image: string
	id: number
	date: string
	time: string
	countComments: number
	title: string
	shortDescription: string
	tags: Omit<ITag, 'active'>[]
}
