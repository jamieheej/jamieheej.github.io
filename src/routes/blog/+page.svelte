<div class="blog-container">
	<h1>Blog</h1>
	<p class="description">
		Read my articles on <a
			href="https://medium.com/@nbblks"
			target="_blank"
			rel="noopener noreferrer"
			class="medium-link">Medium</a
		>
	</p>
	<img class="blog-image" src="/images/water.jpeg" alt="blog-image" aria-hidden="true" />
</div>

<style>
	.blog-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		font-size: 80px;
		font-weight: 300;
		margin-bottom: 0.5rem;
		text-align: center;
	}

	.description {
		font-size: 24px;
		font-weight: 300;
	}

	.medium-link {
		color: #2d3748;
		text-decoration: underline;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.medium-link:hover {
		color: #718096;
	}

	.blog-image {
		width: 100%;
		max-width: 600px;
		height: auto;
	}

	@media (max-width: 375px) {
		h1 {
			font-size: 36px;
		}

		.description {
			font-size: 16px;
		}

		.blog-image {
			width: 100%;
			max-width: none;
		}
	}
</style>
