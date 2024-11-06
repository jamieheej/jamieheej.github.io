<script>
	import { base } from '$app/paths';
</script>

<div class="services-container">
	<h1>Services</h1>

	<p>
		I am a versatile professional offering a range of services including <u>web development</u>,
		<u>UX writing</u>
		and content creation, interpretation services, and translation and localization. My expertise encompasses
		crafting responsive web applications, producing engaging marketing materials, facilitating clear
		communication in medical settings, and ensuring accurate translations and cultural adaptations.
	</p>
	<img
		src="{base}/images/painter.jpeg"
		alt="service-image"
		class="service-image"
		aria-hidden="true"
	/>

	<div class="cta-section">
		<a href="mailto:jamieheejinsim@gmail.com" class="cta-button email">Get in Touch</a>
	</div>
</div>

<style>
	.services-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 80px;
		font-weight: 300;
		margin-bottom: 0.5rem;
		text-align: center;
	}

	p {
		font-size: 24px;
		font-style: italic;
		font-weight: 300;
		line-height: 1.6;
	}

	.cta-section {
		text-align: center;
		padding: 3rem 0;
	}

	.cta-button {
		display: inline-block;
		background: transparent;
		color: #000000;
		padding: 1rem 2rem;
		border: none;
		border-radius: 4px;
		text-decoration: underline;
		font-size: 24px;
		font-weight: 300;
		transition: border 0.3s ease;
	}

	.cta-button:hover {
		border: black;
	}

	.service-image {
		width: 500px; /* Adjust the width as needed */
		height: auto; /* Maintain aspect ratio */
		margin-left: 1rem; /* Space between the heading and the image */
		vertical-align: middle; /* Align the image vertically with the text */
	}
</style>
