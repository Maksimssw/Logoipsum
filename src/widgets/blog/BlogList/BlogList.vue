<script lang="ts" setup>
import { onMounted } from 'vue'

import { useBlogStore } from '@/entities/blog/model/store.ts'
import { useBlogLogic } from '@/features/blog'
import Card from '@/shared/ui/Card/Card.vue'
import { CommunicationIcon, TimeIcon } from '@/shared/ui/icons/base'

const { getPosts } = useBlogLogic()
const blogStore = useBlogStore()

onMounted(getPosts)
</script>

<template>
	<section class="container">
		<ul class="blog-list grid rounded-xl bg-white p-[30px] max-lg:p-[15px]">
			<Card
				v-for="post in blogStore.visiblePosts"
				:key="post.id"
				structure="mini"
				:image-url="post.image"
				:title="post.title"
				class="cursor-pointer"
				:description="post.shortDescription"
				:tags="post.tags"
				:materials="[
					{ text: post.date },
					{ component: TimeIcon, text: post.time },
					{ component: CommunicationIcon, text: `${post.countComments} комментарий` }
				]"
			/>
		</ul>
	</section>
</template>

<style lang="sass" scoped>
@use './blog-list'
</style>
