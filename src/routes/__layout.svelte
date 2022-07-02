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
		<div
			class="text-center text-fira text-lg tracking-wide bottom-0 fixed w-full"
		>
			<Footer />
		</div>
	</div>
</MetaMask>
