<script setup lang="ts">
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'

import { AppPages, AppRoutes, EAppProviders } from '@/app/providers'
import { Header } from '@/widgets/Header'

import './style/tailwind.css'

const route = useRoute()

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const layout = computed(() => route.meta.layout)
</script>

<template>
	<component :is="layout" v-if="layout" v-bind="$attrs">
		<template v-slot:header>
			<Header />
		</template>

		<template v-slot:default>
			<router-view />
		</template>
	</component>

	<!-- FIX	-->
	<div v-else>Загрузка компонента!</div>
</template>

<style lang="sass">
@use 'style/global.sass'
</style>
