<script lang="ts" setup>
import { headerMenuList, useHeaderMenu, useHeaderStore } from '@/entities/header/model'
import { CrossIcon } from '@/shared/ui/icons/base'

const props = defineProps<{ isBurger: boolean }>()

const headerStore = useHeaderStore()
const { linkHandler, activePath, navRef } = useHeaderMenu(props.isBurger)
</script>

<template>
	<nav
		ref="navRef"
		:class="`grid-row ${isBurger && 'menu-mobile'} ${isBurger && headerStore.isMenu ? 'menu-mobile_active' : ''}`"
	>
		<button class="absolute right-[10px] top-[10px] cursor-pointer" v-if="isBurger" @click="headerStore.hideMenu()">
			<CrossIcon class="w-[32px] h-[32px]" />
		</button>

		<ul class="flex gap-[20px]">
			<li
				v-for="item in headerMenuList"
				:key="item.path"
				tabindex="0"
				:class="`menu-link ${activePath === item.path && 'active'}`"
				@click="linkHandler(item.path)"
			>
				{{ item.title }}
			</li>
		</ul>
	</nav>
</template>

<style lang="sass">
@use './menu'
</style>
