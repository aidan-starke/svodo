<script lang="ts">
	import type { MetaMaskInpageProvider } from "@metamask/providers";

	import "$lib/app.css";
	import { onMount } from "svelte";
	import { extension, metaMaskAccount, loadTodos } from "$lib/stores";
	import { Footer, Header } from "$lib/components";
	import detectEthereumProvider from "@metamask/detect-provider";

	onMount(() => {
		detectEthereumProvider({ mustBeMetaMask: true }).then((provider) =>
			extension.set(provider as MetaMaskInpageProvider)
		);
	});

	$: {
		$extension?.on("accountsChanged", (accounts: unknown) => {
			const account = (accounts as string[])[0];
			metaMaskAccount.set(account);
			loadTodos(account);
		});
	}
</script>

<svelte:head>
	<title>Svodo</title>
</svelte:head>

<div class="bg-[url('$lib/assets/bg.svg')] w-screen h-screen pt-20">
	<Header />
	<slot />
	<div
		class="text-center text-fira text-lg tracking-wide bottom-0 fixed w-full"
	>
		<Footer />
	</div>
</div>
