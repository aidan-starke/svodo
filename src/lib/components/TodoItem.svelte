<script lang="ts">
	import type { Todo } from "$lib/types";

	import clsx from "clsx";
	import { SyncLoader } from "svelte-loading-spinners";
	import { clickOutside } from "$lib/utils/clickOutside";
	import { removeTodo, updateTodo } from "$lib/stores/todos";

	export let todo: Todo;
	let busy: boolean;
	let update = false;
	let newTodo: string;

	$: inputValue = todo.text || newTodo;
	$: {
		setTimeout(() => (busy = !todo), 1500);
	}

	const onToggle = () =>
		updateTodo<boolean>(todo.id, "completed", !todo.completed);

	const onUpdate = () => {
		if (newTodo) updateTodo<string>(todo.id, "text", newTodo);

		busy = true;
		newTodo = "";
		update = false;
	};
</script>

{#if update}
	<input
		type="text"
		id="update-todo"
		class="flex-1 appearance-none border-pink-200 focus:outline-none focus:border-pink-400 border-b rounded py-2 mr-2 bg-transparent"
		value={inputValue}
		use:clickOutside
		on:click_outside={onUpdate}
		on:change={(event) => (newTodo = event.currentTarget.value)}
	/>
{:else}
	<div class="flex-1">
		{#if busy}
			<SyncLoader size="30" color="#f472b6" duration="1s" />
		{:else}
			<p class={clsx(todo.completed && "line-through", "cursor-default")}>
				{todo.text}
			</p>
		{/if}
	</div>
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
