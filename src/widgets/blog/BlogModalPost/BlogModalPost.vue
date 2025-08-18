<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useBlogStore } from '@/entities/blog'
import { BlogPostComments } from '@/features/blog'
import { pluralize } from '@/shared/lib/utils/string'
import Card from '@/shared/ui/Card/Card.vue'
import { CommunicationIcon, TimeIcon } from '@/shared/ui/icons/base'
import { Modal } from '@/shared/ui/modal'

const emit = defineEmits<{
	(e: 'close'): void
}>()

const storeBlog = useBlogStore()
const { fullPost } = storeToRefs(storeBlog)
</script>

<template>
	<Modal
		@close="emit('close')"
		classWrapper="max-w-[630px] max-sm:max-w-[350px] p-[15px] max-h-[867px] max-sm:max-h-[600px] overflow-auto"
	>
		<Card
			is="div"
			structure="large"
			:image-url="fullPost.image"
			:title="fullPost.title"
			:description="fullPost.description"
			:tags="fullPost.tags"
			:materials="[
				{ text: fullPost.date },
				{ component: TimeIcon, text: fullPost.time },
				{
					component: CommunicationIcon,
					text:
						`${fullPost.countComments} ` +
						pluralize(fullPost.countComments, ['комментарий', 'комментария', 'комментариев'])
				}
			]"
		>
			<BlogPostComments :comments="fullPost.comments" :countComments="fullPost.countComments" />
		</Card>
	</Modal>
</template>
