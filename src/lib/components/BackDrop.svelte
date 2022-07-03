<script>
	import clsx from "clsx";

	export let backdropClass = "";
</script>

<div class={clsx(backdropClass, "m-auto bg-black/5 w-1/5")}>
	<div class="m-auto bg-black/10 w-4/5">
		<slot />
	</div>
</div>
