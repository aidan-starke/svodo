<script lang="ts">
	import clsx from "clsx";
	import { todos, metaMaskAccount } from "$lib/stores";
	import { TodoForm, TodoItem } from "$lib/components";
	import { fade } from "svelte/transition";
</script>

<div
	class={clsx(
		$metaMaskAccount ? "space-y-10" : "pt-10",
		"w-4/5 m-auto text-sans rounded-lg font-fira bg-black/20 p-10 border-opacity-20 border-black/10"
	)}
>
	<TodoForm />
	<ul class="items-center justify-center block m-auto space-y-4 py-4 px-6">
		{#each $todos as todo}
			<li
				class="flex items-center text-white border-b-2 rounded-lg border-pink-200 pb-2 hover:border-pink-400 px-2"
				transition:fade
			>
				<TodoItem {todo} />
			</li>
		{/each}
	</ul>
</div>
