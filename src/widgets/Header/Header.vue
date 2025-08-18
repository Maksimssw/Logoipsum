<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import { HeaderMenu, useHeaderStore } from '@/entities/header'
import { ButtonIcon } from '@/shared/ui/button'
import { BurgerIcon } from '@/shared/ui/icons/base'
import { LogoIcon } from '@/shared/ui/icons/main'

const breakpoints = useBreakpoints({ mobile: 800 })
const isBurger = breakpoints.smallerOrEqual('mobile')
const headerStore = useHeaderStore()
</script>

<template>
	<header class="container bg-black h-[62px] max-md:h-[78px] grid-row">
		<div class="px-[6px] grid-row gap-[80px] max-[801px]:gap-[15px]">
			<ButtonIcon v-if="isBurger" @click="headerStore.showMenu()">
				<BurgerIcon />
			</ButtonIcon>

			<router-link to="/" class="grid-row">
				<LogoIcon />
			</router-link>

			<HeaderMenu :isBurger="isBurger" />
		</div>
	</header>
</template>
