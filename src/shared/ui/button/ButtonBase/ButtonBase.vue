<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@/shared/lib/utils/cn'
import { buttonBaseVariants, type ButtonBaseVariants } from '@/shared/ui/button/ButtonBase/index.ts'

interface IProps {
	variant?: ButtonBaseVariants['variant']
	size?: ButtonBaseVariants['size']
	class?: HTMLAttributes['class']
}

const props = defineProps<IProps>()
</script>

<template>
	<button :class="cn(buttonBaseVariants({ variant, size }), props.class)" :disabled="variant === 'disable'">
		<slot />
	</button>
</template>
