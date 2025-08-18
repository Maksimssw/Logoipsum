<script setup lang="ts">
import type { IComment } from '@/shared/ui/comment/Comment/types.ts'

defineProps<{ comment: Omit<IComment, 'id'> }>()
</script>

<template>
	<li class="grid grid-cols-[38px_1fr] gap-[12px] pt-[12px] pl-[12px]">
		<div class="bg-gray-300 rounded-[100%] w-[38px] h-[38px] overflow-hidden">
			<img :src="comment.image" :alt="comment.author" />
		</div>

		<div class="grid gap-[6px]">
			<span class="tracking-[-1%] text-gray-900 font-semibold leading-none">{{ comment.author }}</span>
			<p class="text-[14px] text-gray-800 leading-[14px]">{{ comment.text }}</p>
			<span class="text-[12px] text-gray-500 leading-[12px]">{{ comment.date }}</span>
		</div>
	</li>
</template>
