<script setup lang="ts">
import { computed } from 'vue'

import { CrossIcon } from '@/shared/ui/icons/base'

interface IProps {
	symbols?: number
	placeholder?: string
	isTextarea: boolean
	modelValue: string
}

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
	(e: 'show'): void
}>()

const props = withDefaults(defineProps<IProps>(), {
	symbols: 1000
})

const onChange = (event: Event) => {
	const value = (event.target as HTMLInputElement).value.trim()
	emit('update:modelValue', value)
}

const clearTextarea = () => {
	emit('update:modelValue', '')
}

const isError = computed(() => props.symbols < props.modelValue.length)
</script>

<template>
	<div class="">
		<div class="relative" @click="emit('show')">
			<textarea
				:value="modelValue"
				:placeholder="placeholder"
				:class="`${isTextarea ? 'textarea_active' : ''} ${isError ? 'textarea_error' : ''} textarea bg-white border-gray-200 border rounded-md placeholder:text-gray-400 w-full`"
				@input="onChange"
				is-textarea
				:modelValue="modelValue"
			/>

			<button class="cursor-pointer absolute right-[15px] top-[10px]" v-if="isTextarea" @click="clearTextarea">
				<CrossIcon />
			</button>
		</div>

		<span v-if="isTextarea" class="text-[12px] leading-[12px] text-gray-600">
			<span :class="{ 'text-red-100': isError }">{{ modelValue.length }}</span>
			из {{ symbols }}
		</span>
	</div>
</template>

<style lang="sass" scoped>
@use "./textarea"
</style>
