<script lang="ts" setup>
import { BlogFilterController, BlogSearch } from '@/entities/blog'
import { BlogTagsFilter } from '@/features/blog'
import { Title } from '@/shared/ui/typography'
</script>

<template>
	<section class="container bg-white">
		<div class="px-[45px] max-md:px-[20px] max-sm:px-0">
			<div
				class="py-[20px] max-md:py-[12px] relative z-10 blog-wrapper grid align-center justify-between border-b border-gray-100"
			>
				<Title variant="h1" class="mr-[40px] max-md:mr-0">Блог</Title>

				<BlogSearch />

				<BlogFilterController class="controller" />
			</div>

			<BlogTagsFilter />
		</div>
	</section>
</template>

<style lang="sass" scoped>
@use "./blog-header"
</style>
