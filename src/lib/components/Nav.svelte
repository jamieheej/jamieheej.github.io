<script>
	import { base } from '$app/paths';
</script>

<nav>
	<ul>
		<li><a href="{base}/about">About</a></li>
		<li><a href="{base}/services">Services</a></li>
		<li><a href="{base}/works">Works</a></li>
		<li><a href="{base}/blog">Blog</a></li>
	</ul>
</nav>

<style>
	nav {
		padding: 1rem;
		background-color: transparent;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: #333;
	}

	a:hover {
		color: #666;
	}
</style>
