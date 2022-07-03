<script lang="ts">
	import type { MetaMaskInpageProvider } from "@metamask/providers";

	import { onDestroy, onMount } from "svelte";
	import { extension, onAccountsChanged } from "$lib/stores";
	import detectEthereumProvider from "@metamask/detect-provider";

	onMount(() => {
		detectEthereumProvider({ mustBeMetaMask: true })
			.then((provider) => {
				const ethProvider = provider as MetaMaskInpageProvider;

				extension.set(ethProvider);
				ethProvider.on("accountsChanged", onAccountsChanged);
			})
			.catch((error) => {
				console.info("MetaMask Error: ", error.message);
				alert("Please install MetaMask to use Svodo");
			});
	});

	onDestroy(() => {
		$extension?.removeListener("accountsChanged", onAccountsChanged);
	});
</script>

<slot />
