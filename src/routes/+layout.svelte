<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: #f5f5f5;
	}

	main {
		padding: 1rem;
	}
</style>
