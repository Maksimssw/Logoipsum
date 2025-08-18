<script setup lang="ts">
import type { IPost } from '@/entities/blog'
import { pluralize } from '@/shared/lib/utils/string'
import Card from '@/shared/ui/Card/Card.vue'
import { CommunicationIcon, TimeIcon } from '@/shared/ui/icons/base'

const emit = defineEmits<{
	(e: 'modal'): void
	(e: 'post', id: number): void
}>()

const props = defineProps<{ post: IPost }>()

const clickHandler = () => {
	emit('modal')
	emit('post', props.post.id)
}
</script>

<template>
	<Card
		@click="clickHandler"
		structure="mini"
		:image-url="post.image"
		:title="post.title"
		class="cursor-pointer"
		:description="post.shortDescription"
		:tags="post.tags"
		:materials="[
			{ text: post.date },
			{ component: TimeIcon, text: post.time },
			{
				component: CommunicationIcon,
				text: `${post.countComments} ` + pluralize(post.countComments, ['комментарий', 'комментария', 'комментариев'])
			}
		]"
	/>
</template>
