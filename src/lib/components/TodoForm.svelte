<script lang="ts">
	import {
		addTodo,
		metaMaskAccount,
		connectWallet,
		extension,
		loadTodos,
	} from "$lib/stores";
	let todo = "";

	const onSubmit = () => {
		addTodo(todo, $metaMaskAccount);
		todo = "";
	};

	const onWalletConnect = () => {
		connectWallet($extension).then(() => loadTodos($metaMaskAccount));
	};
</script>

<form
	class="m-auto items-center justify-center"
	on:submit|preventDefault={onSubmit}
>
	<div class="m-auto w-4/5">
		<label for="todo" class="text-pink-500 font-semibold">Todo</label>
		<input
			id="todo"
			type="text"
			bind:value={todo}
			placeholder="Enter todo..."
			class="px-4 py-2 w-full border border-pink-400 shadow-sm rounded appearance-none focus:border-pink-400 focus:outline-none shadow focus:border-2 duration-300 bg-transparent text-white"
		/>
	</div>
	{#if $metaMaskAccount}
		<button
			type="submit"
			class="flex shadow rounded font-bold uppercase text-mono text-white m-auto text-sm px-6 py-2 bg-pink-500  hover:bg-white hover:text-pink-500 border border-transparent hover:border-2 hover:border-pink-400 duration-500 tracking-widest mt-8"
		>
			submit
		</button>
	{:else}
		<button
			type="button"
			class="flex shadow rounded font-bold uppercase text-mono text-white m-auto text-sm px-6 py-2 bg-pink-500  hover:bg-white hover:text-pink-500 border border-transparent hover:border-2 hover:border-pink-400 duration-500 tracking-widest mt-8"
			on:click={onWalletConnect}
		>
			connect wallet
		</button>
	{/if}
</form>
