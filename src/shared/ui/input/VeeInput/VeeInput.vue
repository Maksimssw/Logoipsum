<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed, type HTMLAttributes, onBeforeUpdate } from 'vue'

import { type InputVariants, VInput } from '@/shared/ui/input/VInput'

interface IProps {
	variant?: InputVariants['variant']
	size?: InputVariants['size']
	class?: HTMLAttributes['class']
	classWrapper?: string
	label?: string
	name: string
	isDisabled?: boolean
	placeholder?: string
	inputType?: string
	inputTxt?: string
	activeTxt?: boolean
}

const emit = defineEmits(['modelValue', 'blur', 'change'])

const props = defineProps<IProps>()

const { value: inputValue, errorMessage, handleChange, meta } = useField<string>(() => props.name)

const error = computed(() => {
	if (meta.touched) return errorMessage.value
	return ''
})

const inputHandler = (event: string) => {
	emit('modelValue', event)
	handleChange(event)
}

onBeforeUpdate(() => {
	if (props.inputTxt || props.activeTxt) handleChange(props.inputTxt)
})
</script>

<template>
	<VInput
		:value="variant"
		:class="props.class"
		:size="size"
		:model-value="inputTxt ? inputTxt : inputValue"
		:label="label"
		:name="name"
		:placeholder="placeholder"
		:classWrapper="classWrapper"
		:input-type="inputType"
		:is-disabled="isDisabled"
		:error="error"
		@update:model-value="inputHandler"
		@change="emit('change')"
	>
		<slot />
	</VInput>
</template>
