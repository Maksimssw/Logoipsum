<script setup lang="ts"></script>

<template>
	<slot name="header"></slot>

	<main class="bg-gray-200">
		<slot></slot>
	</main>
</template>

<style>
@import './main-layout.sass';
</style>
