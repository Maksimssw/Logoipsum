<script setup lang="ts">
import { computed } from 'vue'

import { useIsBoolean, useRefString } from '@/shared/lib/use/base'
import { ButtonBase } from '@/shared/ui/button'
import { Textarea } from '@/shared/ui/Textarea'

interface IProps {
	countComments: number
}

const emit = defineEmits<{
	(e: 'newComment', text: string): void
}>()

const MAX_SYMBOLS = 250

const { isBoolean: isTextarea, setTrue: showTextarea, setFalse: hideTextarea } = useIsBoolean()
const { value: modelValue, setValue: setModelValue } = useRefString('')

defineProps<IProps>()

const hideHandler = (): void => {
	setModelValue('')
	hideTextarea()
}

const variant = computed(() =>
	modelValue.value.length > MAX_SYMBOLS || !modelValue.value.length ? 'disable' : 'default'
)

const newCommentHandler = () => {
	emit('newComment', modelValue.value)
	setModelValue('')
	hideHandler()
}
</script>

<template>
	<div class="grid gap-[10px]">
		<div class="flex gap-[6px]">
			<span class="leading-none font-semibold text-gray-900">Комментариев</span>
			<span class="leading-none text-gray-600">{{ countComments }}</span>
		</div>

		<Textarea
			placeholder="Введите комментарий"
			@update:model-value="setModelValue"
			:modelValue="modelValue"
			:symbols="MAX_SYMBOLS"
			:isTextarea="isTextarea"
			@show="showTextarea"
		/>

		<div v-if="isTextarea" class="flex justify-end gap-[10px]">
			<ButtonBase variant="ghost" @click="hideHandler">Отмена</ButtonBase>
			<ButtonBase :variant="variant" @click="newCommentHandler">Опубликовать</ButtonBase>
		</div>
	</div>
</template>
