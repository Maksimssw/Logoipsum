<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { computed, type HTMLAttributes, ref } from 'vue'

import { cn } from '@/shared/lib/utils/cn'
import { buttonFilterVariants, type ButtonFilterVariants } from '@/shared/ui/button'
import { CheckIcon, CrossIcon, PlusIcon } from '@/shared/ui/icons/base'

interface IProps {
	variant?: ButtonFilterVariants['variant']
	size?: ButtonFilterVariants['size']
	class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<IProps>(), {
	variant: 'default'
})

const icons = {
	default: PlusIcon,
	active: CheckIcon
}

const buttonRef = ref<HTMLElement | null>(null)
const isHovered = useElementHover(buttonRef)
const isTouchDevice = ref('ontouchstart' in window || navigator.maxTouchPoints > 0)

const isCrossIcon = computed(() => {
	return props.variant === 'active' && isHovered.value && !isTouchDevice.value
})
</script>

<template>
	<button ref="buttonRef" :class="cn(buttonFilterVariants({ variant, size }), props.class)">
		<slot />

		<component v-if="variant && !isCrossIcon" :is="icons[variant]" />

		<CrossIcon v-else class="button-filter-cross" />
	</button>
</template>

<style lang="sass">
.button-filter-cross path
	fill: white
</style>
