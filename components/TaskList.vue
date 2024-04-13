<template>
	<div>
		<div class="flex justify-between mb-4">
			<h2 class="text-xl font-semibold">Task List</h2>
			<div class="flex gap-3">
				<select
					v-model="filterStatus"
					@change="filter"
					class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
					<option value="all">All</option>
					<option value="pending">Pending</option>
					<option value="completed">Completed</option>
				</select>
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
					@click="addTask">
					Add Task
				</button>
			</div>
		</div>
		<div v-if="filtered.length === 0" class="text-gray-600">
			No tasks found.
		</div>
		<div v-else>
			<ul class="flex flex-col gap-2">
				<TaskItem :editStatus="editStatus" :editTask="editTask" />
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { type Task } from "~/types";
let filterStatus = "all" as string;
const tasks = Tasks();
const filtered = Filtered();
const form = Form();
const userData = UserData();
filtered.value = tasks.value;

function filter(): void {
	if (filterStatus === "all") {
		filtered.value = tasks.value;
	} else {
		filtered.value = tasks.value.filter((task: Task) => {
			return task.status === filterStatus;
		});
	}
}

function editStatus(id: number): void {
	tasks.value = tasks.value.map((task: Task) => {
		if (task.id === id) {
			task.status = task.status === "pending" ? "completed" : "pending";
		}
		return task;
	});
	filter();
}
function editTask(task: Task): void {
	form.value = { active: true, title: "Edit Task", action: "Update" };
	userData.value = {
		id: task.id,
		description: task.description,
		dueDate: task.dueDate,
		status: task.status,
		title: task.title,
	};
}
function addTask(): void {
	form.value = { active: true, title: "Add Task", action: "Add" };
	userData.value = {
		id: 0,
		description: "",
		dueDate: "",
		status: "pending",
		title: "",
	};
}
</script>
