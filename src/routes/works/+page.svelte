<script>
	import { base } from '$app/paths';
</script>

<div class="works-container">
	<div class="header">
		<h1>Works</h1>
		<a href="{base}/resume.pdf" download class="download-btn"> Download Resume </a>
	</div>

	<div class="timeline">
		<div class="work-item">
			<div class="work-date">June 2024 -</div>
			<div class="work-content">
				<h3>Korean Interpreter</h3>
				<div class="company">Kelly Services – Canada</div>
				<p class="description">
					As a medical interpreter, I bridged communication gaps for over 1,000 Korean patients
					during critical healthcare consultations. Working in a fast-paced environment, I managed
					more than 30 cases daily, ensuring accurate and empathetic communication in urgent medical
					situations. My role extended across 200+ healthcare facilities, where I helped establish
					clear understanding between healthcare providers and patients, making essential medical
					care more accessible to the Korean-speaking community.
				</p>
			</div>
		</div>

		<div class="work-item">
			<div class="work-date">Aug 2023 – May 2024</div>
			<div class="work-content">
				<h3>Freelance Frontend Developer</h3>
				<div class="company">Seoul</div>
				<p class="description">
					In my freelance work, I focused on optimizing web performance and user experience. By
					implementing Server-Side Rendering (SSR) and leveraging advanced Next.js features, I
					achieved significant improvements in page load times. One of my key projects involved
					integrating Builder.io and Medusa.js to create a flexible e-commerce solution with custom
					packaging options. I also implemented comprehensive analytics using Airbridge, which
					provided valuable insights into user behavior and helped drive data-informed decisions for
					marketing strategies.
				</p>
			</div>
		</div>

		<div class="work-item">
			<div class="work-date">Feb 2022 – Feb 2023</div>
			<div class="work-content">
				<h3>Frontend Developer</h3>
				<div class="company">Blockchain Labs – Seoul</div>
				<p class="description">
					At Blockchain Labs, I played a pivotal role in developing our company's web presence. I
					led the development of an admin web application, working closely with backend teams to
					ensure seamless integration. Through careful attention to SEO optimization and
					implementation of UTM parameters, we significantly improved our online visibility. I also
					focused on optimizing web performance through efficient asset management and component
					architecture, resulting in a more responsive and user-friendly experience.
				</p>
			</div>
		</div>

		<div class="work-item">
			<div class="work-date">Apr 2019 – Apr 2020</div>
			<div class="work-content">
				<h3>Web Developer</h3>
				<div class="company">SDPlex – Seoul</div>
				<p class="description">
					During my time at SDPlex, I was responsible for developing OnCue Admin, a sophisticated
					web dashboard for monitoring system resources. The platform handled real-time data streams
					across multiple industry modules, requiring careful optimization of data processing and
					visualization. By implementing long polling techniques, we achieved faster data refresh
					rates, providing users with near real-time insights into their server resources. This
					project demonstrated my ability to balance complex technical requirements with user
					experience considerations.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.works-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.header {
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

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.work-item {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 2rem;
		padding: 1.5rem;
		background: transparent;
		border: 1px solid black;
		transition: transform 0.2s ease;
		font-size: 18px;
	}

	.work-item:hover {
		transform: translateY(-4px);
	}

	.work-date {
		font-weight: 500;
	}

	.work-content h3 {
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.company {
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.download-btn {
		display: inline-flex;
		align-self: flex-end;
		gap: 0.5rem;
		color: black;
		padding: 0.75rem 1.5rem;
		font-size: 24px;
		font-weight: 300;
	}

	.description {
		line-height: 1.8;
		margin-top: 1rem;
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 36px; /* Adjusted font size for smaller screens */
		}

		.work-item {
			grid-template-columns: 1fr; /* Stack items vertically */
			padding: 1rem; /* Reduced padding */
		}

		.work-content h3 {
			font-size: 1.5rem; /* Adjusted font size for headings */
		}

		.work-date {
			font-size: 16px; /* Adjusted font size for dates */
		}

		.company {
			font-size: 16px; /* Adjusted font size for company names */
		}

		.description {
			font-size: 16px; /* Adjusted font size for descriptions */
		}
	}
</style>
