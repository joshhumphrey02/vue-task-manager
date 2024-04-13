<template>
	<head>
		<title>Task Manager</title>
	</head>
	<div id="app" class="font-sans w-full sm:w-[60%] px-2 mx-auto mt-6 relative">
		<header class="py-4">
			<h1 class="text-2xl mb-2">Good {{ timeOfDay }}, Champ! 👋🏼</h1>
			<h2 class="text-gray-500 font-thin">Today, {{ dateFormat }}</h2>
		</header>
		<main class="max-w-4xl mx-auto py-8">
			<TaskList />
			<TaskForm />
		</main>
	</div>
</template>

<script lang="ts" setup>
import { type Task } from "~/types";
const tasks = Tasks();
const getTimeOfDay = GetTimeOfDay();
const timeOfDay = ref(getTimeOfDay);
const dateFormat = FormatDate(new Date());
const exampleData: Task[] = [
	{
		id: 1,
		title: "Example Data 1",
		description:
			"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
		dueDate: "2024-04-13",
		status: "pending",
	},
	{
		id: 2,
		title: "Example Data 1",
		description:
			"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
		dueDate: "2024-04-13",
		status: "completed",
	},
];

const localTasks = localStorage.getItem("tasks");
if (tasks.value.length === 0 && localTasks !== null) {
	tasks.value = JSON.parse(localTasks);
}
if (exampleData.length > 0 && tasks.value.length === 0) {
	tasks.value.push(...exampleData);
	exampleData.splice(0, 2);
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
