<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue'

import { BlogCard, BlogEmpty, useBlogStore } from '@/entities/blog'
import { useBlogLogic } from '@/features/blog'
import { useSingleModal } from '@/shared/lib/use/modal/useSingleModal.ts'

const BlogModalPost = defineAsyncComponent(() =>
	import('@/widgets/blog/BlogModalPost').then(module => module.BlogModalPost)
)

const { getPosts, getFullPost } = useBlogLogic()
const blogStore = useBlogStore()
const { isModal, closeModal, openModal } = useSingleModal()

onMounted(getPosts)
</script>

<template>
	<section class="container">
		<div class="rounded-xl mt-[20px] bg-white p-[30px] max-lg:p-[15px]">
			<ul class="blog-list grid" v-if="blogStore.visiblePosts.length">
				<BlogCard
					v-for="post in blogStore.visiblePosts"
					:post="post"
					:key="post.id"
					@modal="openModal"
					@post="getFullPost"
				/>
			</ul>

			<BlogEmpty v-else />

			<BlogModalPost v-if="isModal" @close="closeModal" />
		</div>
	</section>
</template>

<style lang="sass" scoped>
@use './blog-list'
</style>
