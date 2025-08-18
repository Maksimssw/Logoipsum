<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'

import { useBlogStore } from '@/entities/blog'
import { ArrowIcon } from '@/shared/ui/icons/base'

const blogStore = useBlogStore()
const { isVisibleFilter, tags } = storeToRefs(blogStore)

const hasActiveTags = computed(() => {
	return tags.value.some(tag => tag.active)
})

const buttonText = computed(() => {
	if (!isVisibleFilter.value) return 'Фильтр'
	if (isVisibleFilter.value && !hasActiveTags.value) return 'Скрыть фильтр'
	return 'фильтр'
})

onMounted(blogStore.checkVisibleFilter)
</script>

<template>
	<div class="grid-row">
		<button
			v-if="isVisibleFilter && hasActiveTags"
			class="mr-[10px] text-primary-active text-[14px] cursor-pointer"
			@click="blogStore.clearFilters"
		>
			Очистить
		</button>

		<button class="grid-row gap-[4px] cursor-pointer" @click="blogStore.toggleFilter()">
			<span class="text-[14px] text-gray-500">{{ buttonText }}</span>

			<ArrowIcon :class="`${isVisibleFilter ? 'rotate-180' : ''} ease-linear duration-200`" />
		</button>
	</div>
</template>
