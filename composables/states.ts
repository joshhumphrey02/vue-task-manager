import { type Task, type FormState } from "~/types";

export const Tasks = () => useState<Task[]>(() => []);

export const Filtered = () => useState<Task[]>(() => []);

export const Form = () =>
	useState<FormState>(() => ({
		active: false,
		title: "",
		action: "",
	}));
export const UserData = () =>
	useState<Task>(() => ({
		id: 0,
		title: "",
		description: "",
		dueDate: "",
		status: "pending",
	}));
