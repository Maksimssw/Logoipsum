<script lang="ts" setup>
import { debounce } from '@/shared/lib/utils/lazy'
import { MagnifierIcon } from '@/shared/ui/icons/base'
import { VeeInput } from '@/shared/ui/input/VeeInput'

interface IProps {
	classWrapper?: string
	delay?: number
	inputTxt?: string
}

const emit = defineEmits<{
	(e: 'modelValue', value: string): void
}>()

const props = withDefaults(defineProps<IProps>(), {
	delay: 300
})

const debouncedEmit = debounce((value: string) => {
	emit('modelValue', value)
}, props.delay)
</script>

<template>
	<VeeInput
		name="search"
		placeholder="Поиск"
		@modelValue="debouncedEmit"
		:classWrapper="classWrapper"
		:input-txt="inputTxt"
	>
		<MagnifierIcon />
	</VeeInput>
</template>
