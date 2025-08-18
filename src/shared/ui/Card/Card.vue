<script setup lang="ts">
import type { Component } from 'vue'

import { type ITag, Tag } from '@/shared/ui/Tag'
import { Title } from '@/shared/ui/typography'

interface IMaterials {
	component?: Component
	text?: string
}

interface IProps {
	imageUrl?: string
	title?: string
	description?: string
	structure?: 'mini' | 'large'
	tags?: Omit<ITag, 'active'>[]
	materials?: IMaterials[]
	is?: 'li' | 'div'
}

withDefaults(defineProps<IProps>(), {
	is: 'li',
	structure: 'mini'
})
</script>

<template>
	<component :is="is" :class="structure">
		<img
			:src="imageUrl"
			v-if="imageUrl"
			:alt="title"
			class="image w-full rounded-xl h-[250px] max-lg:h-[220px] max-md:h-[200px]"
			loading="lazy"
		/>

		<ul v-if="materials" class="materials flex gap-[25px]">
			<li v-for="material in materials" class="card-material grid-row gap-[4px]">
				<component :is="material.component" v-if="material.component" />

				<span v-if="material.text" class="text-[14px] text-gray-600">{{ material.text }}</span>
			</li>
		</ul>

		<Title class="title leading-none" v-if="title">{{ title }}</Title>

		<p class="description mb-[10px] leading-[25px]" v-if="description">{{ description }}</p>

		<ul v-if="tags?.length" class="tags flex gap-[10px]">
			<Tag v-for="tag in tags" :key="tag.code">{{ tag.text }}</Tag>
		</ul>

		<slot />
	</component>
</template>

<style lang="sass" scoped>
@use "./card"
</style>
