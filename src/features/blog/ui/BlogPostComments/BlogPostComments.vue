<script setup lang="ts">
import { useBlogLogic } from '@/features/blog'
import { Comment, type IComment } from '@/shared/ui/comment'
import { CommentTextarea } from '@/shared/ui/comment/CommentTextare'

interface IProps {
	comments: IComment[]
	countComments: number
}

defineProps<IProps>()

const { newComment } = useBlogLogic()
</script>

<template>
	<div>
		<CommentTextarea class="mt-[10px]" :countComments="countComments" @newComment="newComment" />

		<ul>
			<Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
		</ul>
	</div>
</template>
