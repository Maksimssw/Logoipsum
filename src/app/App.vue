<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import EmptyLayout from '@/shared/ui/layouts/EmptyLayout/EmptyLayout.vue'
import { LoadingPage } from '@/shared/ui/loading'
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

	<EmptyLayout v-else>
		<LoadingPage />
	</EmptyLayout>
</template>

<style lang="sass">
@use 'style/global.sass'
</style>
