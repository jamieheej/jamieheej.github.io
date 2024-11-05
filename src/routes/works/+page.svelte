<script>
	import { base } from '$app/paths';
</script>

<div class="works-container">
	<div class="header">
		<h1>Professional Experience</h1>
		<a href="{base}/resume.pdf" download class="download-btn">
			Download Resume
			<span class="download-icon">↓</span>
		</a>
	</div>

	<div class="timeline">
		<div class="work-item">
			<div class="work-date">Remote</div>
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
	}

	h1 {
		font-size: 2.5rem;
		color: #2d3748;
		margin-bottom: 2rem;
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
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease;
	}

	.work-item:hover {
		transform: translateY(-4px);
	}

	.work-date {
		font-weight: 500;
		color: #4a5568;
	}

	.work-content h3 {
		font-size: 1.2rem;
		color: #2d3748;
		margin-bottom: 0.5rem;
	}

	.company {
		color: #4a5568;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rem;
	}

	.download-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #2d3748;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.download-btn:hover {
		background: #4a5568;
		transform: translateY(-2px);
	}

	.download-icon {
		font-size: 1.2rem;
	}

	.description {
		color: #4a5568;
		line-height: 1.8;
		margin-top: 1rem;
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}

		.download-btn {
			width: 100%;
			justify-content: center;
		}
	}
</style>
