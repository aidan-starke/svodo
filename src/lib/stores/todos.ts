import type { Todos } from "$lib/types";
import { supabase } from "$lib/supabase";

import { writable } from "svelte/store";

export const todos = writable<Todos>([]);

export const loadTodos = async (metamask_account: string) => {
	const { data, error } = await supabase
		.from("todos")
		.select()
		.match({ metamask_account });

	if (error) return console.error(error);

	todos.set(data);
};

export const addTodo = async (text: string, metamask_account: string) => {
	const { data, error } = await supabase
		.from("todos")
		.insert([{ text, id: Date.now(), metamask_account }]);

	if (error) return console.error(error);

	todos.update((todos) => todos.concat(data[0]));
};

export const removeTodo = async (id: number) => {
	const { error } = await supabase.from("todos").delete().match({ id });

	if (error) return console.error(error);

	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const updateTodo = async <T>(id: number, key: string, value: T) => {
	const { data, error } = await supabase
		.from("todos")
		.update({ [key]: value })
		.match({ id });

	if (error) return console.error(error);

	todos.update((todos) =>
		todos.map((todo) => (todo.id === id ? data[0] : todo))
	);
};
