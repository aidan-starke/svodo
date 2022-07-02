<script lang="ts">
	import type { MetaMaskInpageProvider } from "@metamask/providers";

	import { onDestroy, onMount } from "svelte";
	import { extension, onAccountsChanged } from "$lib/stores";
	import detectEthereumProvider from "@metamask/detect-provider";

	onMount(() => {
		detectEthereumProvider({ mustBeMetaMask: true }).then((provider) =>
			extension.set(provider as MetaMaskInpageProvider)
		);
	});

	$: {
		$extension?.on("accountsChanged", onAccountsChanged);
	}

	onDestroy(() => {
		$extension?.removeListener("accountsChanged", onAccountsChanged);
	});
</script>

<slot />
