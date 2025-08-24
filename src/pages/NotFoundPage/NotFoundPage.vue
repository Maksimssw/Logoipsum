<script setup lang="ts">
import { ButtonBase } from '@/shared/ui/button'
import { Title } from '@/shared/ui/typography'
</script>

<template>
	<div class="flex justify-center items-center min-h-[100vh] w-[100%] overflow-hidden">
		<div class="p-[20px] rounded-xl bg-gray-200 relative flex flex-col justify-center items-center z-5">
			<Title variant="h1">404</Title>

			<p class="text-center">Страница не найдена</p>
			<p class="text-center text-[14px] text-gray-700 mb-[20px]">Этой страницы больше нет или её адрес изменился</p>

			<router-link to="/">
				<ButtonBase variant="default">Домой</ButtonBase>
			</router-link>
		</div>
	</div>
</template>
