<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { headerMenuList } from '@/entities/header/model'
import { useHeaderStore } from '@/entities/header/model/store.ts'
import { useRefString } from '@/shared/lib/use/base'
import { CrossIcon } from '@/shared/ui/icons/base'

interface IProps {
	isBurger: boolean
}

const props = defineProps<IProps>()

const route = useRoute()
const router = useRouter()

const { value: activePath, setValue } = useRefString(route.path)
const headerStore = useHeaderStore()

watch(
	() => route.path,
	() => setValue(route.path)
)

const linkHandler = async (path: string) => {
	if (props.isBurger && headerStore.isMenu) headerStore.setFalseMenu()

	await router.push(path)
}

const navRef = ref<HTMLElement | null>(null)

onClickOutside(navRef, () => {
	if (props.isBurger && headerStore.isMenu) {
		headerStore.setFalseMenu()
	}
})
</script>

<template>
	<nav
		ref="navRef"
		:class="`grid-row ${isBurger && 'menu-mobile'} ${isBurger && headerStore.isMenu ? 'menu-mobile_active' : ''}`"
	>
		<button class="absolute right-[10px] top-[10px] cursor-pointer" v-if="isBurger" @click="headerStore.setFalseMenu()">
			<CrossIcon class="w-[32px] h-[32px]" />
		</button>

		<ul class="flex gap-[20px]">
			<li
				v-for="item in headerMenuList"
				:key="item.path"
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
