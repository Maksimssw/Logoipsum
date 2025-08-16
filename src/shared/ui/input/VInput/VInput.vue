<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'

import { cn } from '@/shared/lib/utils/cn'
import { inputVariants, type InputVariants } from '@/shared/ui/input/VInput/index.ts'

interface IProps {
	variant?: InputVariants['variant']
	size?: InputVariants['size']
	class?: HTMLAttributes['class']
	classWrapper?: string
	title?: string
	name?: string
	modelValue?: string
	placeholder?: string
	isClean?: boolean
	isDisabled?: boolean
	type?: string
	error?: string
}

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const props = withDefaults(defineProps<IProps>(), {
	modelValue: '',
	type: 'text',
	autocomplete: false,
	placeholder: ''
})

const errorClasses = computed(() => ({
	'disabled events-none': props.isDisabled,
	error: props.error
}))

const onChange = (event: Event) => {
	const value = (event.target as HTMLInputElement).value.trim()
	emit('update:modelValue', value)
}
</script>

<template>
	<div :class="classWrapper">
		<span v-if="title">{{ title }}</span>

		<div class="relative">
			<div class="icon">
				<slot />
			</div>

			<input
				:placeholder="placeholder"
				:disabled="isDisabled"
				:value="modelValue"
				:type="type"
				:name="name"
				:class="cn(inputVariants({ variant, size }), props.class, errorClasses, 'input')"
				autocomplete="false"
				@input="onChange"
			/>
		</div>
	</div>
</template>

<style lang="sass" scoped>
@use './input'
</style>
