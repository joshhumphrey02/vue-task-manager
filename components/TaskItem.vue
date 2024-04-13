<template>
	<li
		v-for="task in filtered"
		:key="task.title"
		class="border border-gray-300 bg-white flex flex-col gap-1 rounded-lg px-2 py-1 shadow-sm">
		<div class="flex py-1 gap-2">
			<div class="p-1">
				<input
					@click="editStatus(task.id)"
					type="checkbox"
					class="size-4 pt-4"
					:checked="task.status === 'completed' ? true : false"
					name=""
					id="" />
			</div>
			<div class="flex-1 grid grid-row-2">
				<div class="flex justify-between pb-1 items-center h-full">
					<h3 class="text-base w-[25%]">{{ task.title }}</h3>
					<p class="text-gray-600 text-xs">{{ task.dueDate }}</p>
					<div class="w-[15%] flex justify-center">
						<p
							:class="`capitalize rounded-lg ${
								task.status === 'pending' ? 'bg-orange-500' : 'bg-green-500 '
							} flex items-center justify-center w-fit text-white text-xs px-2 h-6`">
							{{ task.status }}
						</p>
					</div>
					<button
						@click="editTask(task)"
						class="bg-blue-500 text-white h-6 px-3 text-xs rounded-md hover:bg-blue-600 transition duration-200">
						Edit
					</button>
				</div>
				<div class="flex items-center border-t h-full">
					<p class="text-gray-700 text-xs">{{ task.description }}</p>
				</div>
			</div>
		</div>
	</li>
</template>

<script lang="ts" setup>
const filtered = Filtered();
import { defineProps } from "vue";

const props = defineProps({
	editTask: {
		type: Function,
		required: true,
	},
	editStatus: {
		type: Function,
		required: true,
	},
});
</script>
