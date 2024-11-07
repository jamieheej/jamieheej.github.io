<script>
	import { base } from '$app/paths';
</script>

<nav>
	<div class="nav-content">
		<span class="logo">heejin</span>
		<ul>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/about">About</a></li>
			<li><a href="{base}/services">Services</a></li>
			<li><a href="{base}/works">Works</a></li>
			<li><a href="{base}/blog">Blog</a></li>
		</ul>
	</div>
</nav>

<style>
	nav {
		padding: 1rem;
		background-color: transparent;
		display: flex;
		justify-content: center;
	}

	.nav-content {
		display: flex;
		align-items: center;
		gap: 4rem;
	}

	.logo {
		font-family: 'Petit Formal Script', cursive;
		font-size: 3rem;
		color: #333;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 4rem;
		li {
			font-size: 18px;
			font-weight: 200;
		}
	}

	a {
		text-decoration: none;
		color: #333;
	}

	a:hover {
		color: #666;
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.nav-content {
			flex-direction: column;
			align-items: flex-start;
		}

		ul {
			width: 100%;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.logo {
			font-size: 2rem; /* Adjust logo size for mobile */
		}
	}

	@media (min-width: 375px) and (max-width: 768px) {
		/* Additional styles for min viewport width of 375px */
		.nav-content {
			gap: 2rem; /* Adjust gap for better spacing */
		}
	}
</style>
