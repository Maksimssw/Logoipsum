<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import { useBlogStore } from '@/entities/blog'
import { useBlogLogic } from '@/features/blog'
import { ButtonFilter } from '@/shared/ui/button'

const blogLogic = useBlogLogic()
const blogStore = useBlogStore()
const { isVisibleFilter, tags } = storeToRefs(blogStore)

onMounted(blogLogic.getTags)
</script>

<template>
	<ul :class="`flex py-[20px] max-md:py-[12px] gap-[8px] flex-wrap`" v-show="isVisibleFilter">
		<li v-for="(tag, index) in tags" :key="tag.code" @click="blogStore.changeActiveTag(index, !tag.active)">
			<ButtonFilter :variant="tag.active ? 'active' : 'default'">{{ tag.text }}</ButtonFilter>
		</li>
	</ul>
</template>
