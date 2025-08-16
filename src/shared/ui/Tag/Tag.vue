<script setup lang="ts">
export interface ITag {
	text: string
	code: string
	active: boolean
}
</script>

<template>
	<li class="px-[14px] py-[6px] text-primary-active text-[14px] bg-primary-light rounded-[20px]">
		<slot />
	</li>
</template>
