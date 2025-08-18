<script setup lang="ts">
import { CrossIcon } from '@/shared/ui/icons/base'
import { useModalLogic } from '@/shared/ui/modal'

const emit = defineEmits<{
	(e: 'close'): void
}>()

defineProps<{ classWrapper?: string }>()

const { modal, handleClose } = useModalLogic(() => emit('close'))
</script>

<template>
	<Teleport to="body">
		<div class="full blur" @click="handleClose"></div>

		<div class="full modal">
			<div ref="modal" :class="`bg-white rounded-xl relative min-w-[350px] ${classWrapper}`">
				<button class="absolute right-[12px] top-[12px] cursor-pointer" @click="handleClose">
					<CrossIcon />
				</button>

				<slot />
			</div>
		</div>
	</Teleport>
</template>

<style lang="sass">
@use './modal'
</style>
