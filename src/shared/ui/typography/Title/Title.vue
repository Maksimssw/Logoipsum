<script setup lang="ts">
import { cn } from '@/shared/lib/utils/cn'
import { titleVariants, type TitleVariants } from '@/shared/ui/typography'

interface Props {
	variant?: TitleVariants['variant']
	class?: string
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'h2'
})
</script>

<template>
	<component :is="variant" :class="cn(titleVariants({ variant: props.variant }), props.class)">
		<slot />
	</component>
</template>
