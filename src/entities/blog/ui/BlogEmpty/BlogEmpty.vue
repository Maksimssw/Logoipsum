<script setup lang="ts">
import { SearchListIcon } from '@/shared/ui/icons/base'
</script>

<template>
	<div class="py-[30px] grid justify-center justify-items-center">
		<SearchListIcon />

		<div class="mt-[8px] w-[287px]">
			<span class="text-[14px] text-gray-600 mb-[4px] flex justify-center">Поиск не дал результатов</span>

			<p class="text-[12px] text-gray-500 text-center">
				Повторите поиск или используйте фильтр для структуризации контента
			</p>
		</div>
	</div>
</template>
