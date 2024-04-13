// types.ts
export interface Task {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	status: string;
}

export interface FormState {
	active: boolean;
	title: string;
	action: string;
}
