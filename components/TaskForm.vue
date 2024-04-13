<template>
	<div
		:class="`w-[96%] sm:w-[25rem] mx-auto bg-white shadow p-3 ${
			form.active ? 'flex flex-col' : 'hidden'
		} rounded-lg absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`">
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-lg font-semibold">{{ form.title }}</h2>
			<span
				@click="closeForm"
				class="text-3xl cursor-pointer hover:text-red-500"
				>&times;</span
			>
		</div>
		<form @submit.prevent="submitForm" class="space-y-4">
			<div>
				<label for="title" class="block mb-1">Title:</label>
				<input
					v-model="userData.title"
					id="title"
					type="text"
					required
					class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
			</div>
			<div>
				<label for="description" class="block mb-1">Description:</label>
				<textarea
					v-model="userData.description"
					id="description"
					required
					class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
			</div>
			<div>
				<label for="dueDate" class="block mb-1">Due Date:</label>
				<input
					v-model="userData.dueDate"
					id="dueDate"
					type="date"
					required
					class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
			</div>
			<div
				:class="`${
					form.action === 'Update' ? 'grid-cols-2 gap-2' : 'grid-cols-1'
				} grid`">
				<button
					type="submit"
					class="bg-blue-500 text-white py-2 px-4 w-full rounded-md hover:bg-blue-600 transition duration-200">
					{{ form.action }}
				</button>
				<button
					v-if="form.action === 'Update'"
					@click="handleDelete(userData.id)"
					type="submit"
					class="bg-red-500 text-white py-2 px-4 w-full rounded-md hover:bg-red-600 transition duration-200">
					Delete
				</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts" setup>
const form = Form();
const tasks = Tasks();
const userData = UserData();
const submitForm = () => {
	if (form.value.action === "Add") {
		tasks.value.push({
			id: tasks.value.length + 1,
			title: userData.value.title,
			description: userData.value.description,
			dueDate: userData.value.dueDate,
			status: userData.value.status,
		});
	} else {
		tasks.value.map((task) => {
			if (task.id == userData.value.id) {
				task.status = userData.value.status;
				task.dueDate = userData.value.dueDate;
				task.description = userData.value.description;
				task.title = userData.value.title;
			}
		});
	}
	// Reset form data after submission
	userData.value = {
		id: 0,
		title: "",
		description: "",
		dueDate: "",
		status: "pending",
	};
	localStorage.setItem("tasks", JSON.stringify(tasks.value));
	closeForm();
};
function closeForm() {
	form.value.active = false;
}
function handleDelete(id: number) {
	const index = tasks.value.findIndex((item) => item.id === id);
	if (index !== -1) {
		tasks.value.splice(index, 1);
	}
	localStorage.setItem("tasks", JSON.stringify(tasks.value));
}
</script>
