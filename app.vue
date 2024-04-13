<template>
	<div id="app" class="font-sans w-full sm:w-[60%] px-2 mx-auto mt-6 relative">
		<header class="py-4">
			<h1 class="text-2xl mb-2">Good {{ timeOfDay }}, Humphrey! 👋🏼</h1>
			<h2 class="text-gray-500 font-thin">Today, {{ dateFormat }}</h2>
		</header>
		<main class="max-w-4xl mx-auto py-8">
			<TaskList />
			<TaskForm />
		</main>
	</div>
</template>

<script lang="ts" setup>
const tasks = Tasks();
const getTimeOfDay = GetTimeOfDay();
const timeOfDay = ref(getTimeOfDay);
const dateFormat = FormatDate(new Date());

const localTasks = localStorage.getItem("tasks");
if (tasks.value.length === 0 && localTasks !== null) {
	tasks.value = JSON.parse(localTasks);
}
</script>

<style>
body {
	background-color: #f2f2f2;
}
#app {
	min-height: 100vh;
}
</style>
