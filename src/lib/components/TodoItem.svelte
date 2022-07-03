<script lang="ts">
	import type { Todo } from "$lib/types";

	import { removeTodo, updateTodo } from "$lib/stores/todos";

	export let todo: Todo;
	let newTodo: string;
	let update = false;

	const onToggle = () =>
		updateTodo<boolean>(todo.id, "completed", !todo.completed);

	const onUpdate = () => {
		if (newTodo) updateTodo<string>(todo.id, "text", newTodo);

		newTodo = "";
		update = false;
	};
</script>

{#if update}
	<input
		type="text"
		id="update-todo"
		class="flex-1 appearance-none border-pink-200 focus:outline-none focus:border-pink-400 border-b rounded py-2 mr-2 bg-transparent"
		bind:value={newTodo}
		placeholder={todo.text}
	/>
{:else}
	<p class={`flex-1 cursor-default ${todo.completed ? "line-through" : ""}`}>
		{todo.text}
	</p>
{/if}

{#if update}
	<button type="button" class="todo-button" on:click={onUpdate}>submit</button>
{:else if !todo.completed}
	<button type="button" class="todo-button" on:click={() => (update = true)}
		>update</button
	>
{:else}
	<button type="button" class="todo-button" on:click={() => removeTodo(todo.id)}
		>remove</button
	>
{/if}

<input
	type="checkbox"
	checked={todo.completed}
	on:change={onToggle}
	class="ml-2 h-5 w-5 cursor-pointer hover:drop-shadow"
/>
