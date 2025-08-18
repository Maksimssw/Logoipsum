<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { Header } from '@/widgets/Header'

import './style/tailwind.css'

const route = useRoute()

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

	<div v-else>Загрузка...</div>
</template>

<style lang="sass">
@use 'style/global.sass'
</style>
