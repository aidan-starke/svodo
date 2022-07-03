<script lang="ts">
	import "$lib/app.css";
	import { Footer, Header, MetaMask } from "$lib/components";
</script>

<svelte:head>
	<title>Svodo</title>
</svelte:head>

<MetaMask>
	<div class="bg-[url('$lib/assets/bg.svg')] w-screen h-screen pt-20">
		<Header />

		<slot />

		<Footer />
	</div>
</MetaMask>
