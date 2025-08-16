<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

import { HeaderMenu } from '@/entities/header'
import { useHeaderStore } from '@/entities/header/model/store.ts'
import BurgerIcon from '@/shared/ui/icons/base/BurgerIcon.vue'
import { LogoIcon } from '@/shared/ui/icons/main'

const breakpoints = useBreakpoints({ mobile: 800 })
const isBurger = breakpoints.smallerOrEqual('mobile')
const headerStore = useHeaderStore()
</script>

<template>
	<header class="container bg-black h-[62px] grid-row">
		<div class="px-[6px] grid-row gap-[80px] max-[801px]:gap-[15px]">
			<button v-if="isBurger" @click="headerStore.setTrueMenu()" class="cursor-pointer">
				<BurgerIcon />
			</button>

			<router-link to="/" class="grid-row">
				<LogoIcon />
			</router-link>

			<HeaderMenu :isBurger="isBurger" />
		</div>
	</header>
</template>
