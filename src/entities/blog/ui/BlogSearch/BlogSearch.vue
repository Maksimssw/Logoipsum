<script setup lang="ts">
import { onMounted } from 'vue'

import { useBlogStore } from '@/entities/blog'
import { SearchInput } from '@/shared/ui/input/SearchInput'

const storeBlog = useBlogStore()

onMounted(() => {
	storeBlog.getQuerySearch()
})
</script>

<template>
	<SearchInput
		classWrapper="search"
		class="max-md:w-full"
		@modelValue="storeBlog.setSearch"
		:inputTxt="storeBlog.searchPost"
	/>
</template>
