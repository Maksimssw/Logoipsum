<script setup lang="ts">
import Card from '@/shared/ui/Card/Card.vue'
import { CommunicationIcon, TimeIcon } from '@/shared/ui/icons/base'
</script>

<template>
	<Card
		structure="mini"
		image-url="./public/assets/posts/post1.webp"
		title="Вдохновение в каждом шаге"
		class="cursor-pointer"
		description="Наши путешественники находят вдохновение в каждом шаге своего пути."
		:tags="['Природа', 'Люди']"
		:materials="[
			{ text: '9 Апр' },
			{ component: TimeIcon, text: '2 мин' },
			{ component: CommunicationIcon, text: '1 комментарий' }
		]"
	/>
</template>
