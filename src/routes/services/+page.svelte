<div class="services-container">
	<h1>Services</h1>

	<div class="services-grid">
		<div class="service-card">
			<h2>Web Development</h2>
			<ul>
				<li>Responsive web applications</li>
				<li>Frontend development with React and Next.js</li>
				<li>Backend integration with Node.js and MongoDB</li>
				<li>Custom web solutions</li>
				<li>Performance optimization</li>
			</ul>
		</div>

		<div class="service-card">
			<h2>UX Writing & Content</h2>
			<ul>
				<li>Landing page copywriting</li>
				<li>Marketing materials</li>
				<li>User interface text</li>
				<li>Product descriptions</li>
				<li>Technical documentation</li>
			</ul>
		</div>

		<div class="service-card">
			<h2>Interpretation Services</h2>
			<ul>
				<li>Medical interpretation</li>
				<li>Healthcare setting expertise</li>
				<li>Real-time communication</li>
				<li>Cultural mediation</li>
				<li>Professional documentation</li>
			</ul>
		</div>

		<div class="service-card">
			<h2>Translation & Localization</h2>
			<ul>
				<li>Document translation</li>
				<li>Website localization</li>
				<li>Marketing content adaptation</li>
				<li>Technical translation</li>
				<li>Quality assurance</li>
			</ul>
		</div>
	</div>

	<div class="cta-section">
		<h2>Ready to Work Together?</h2>
		<p>Let's create solutions that combine technical excellence with clear communication.</p>
		<a href="mailto:jamieheejinsim@gmail.com" class="cta-button email">Get in Touch</a>
	</div>
</div>

<style>
	.services-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		color: #2d3748;
		margin-bottom: 2rem;
		text-align: center;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.service-card {
		background: #ffffff;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.service-card h2 {
		font-size: 1.5rem;
		color: #4a5568;
		margin-bottom: 1rem;
	}

	.service-card ul {
		list-style: none;
		padding: 0;
	}

	.service-card li {
		margin-bottom: 0.5rem;
		padding-left: 1.5rem;
		position: relative;
	}

	.service-card li:before {
		content: '•';
		position: absolute;
		left: 0;
		color: #4a5568;
	}

	.cta-section {
		text-align: center;
		padding: 3rem 0;
	}

	.cta-section h2 {
		font-size: 2rem;
		color: #2d3748;
		margin-bottom: 1rem;
	}

	.cta-section p {
		margin-bottom: 2rem;
		color: #4a5568;
	}

	.cta-button {
		display: inline-block;
		background: #4a5568;
		color: white;
		padding: 1rem 2rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 500;
		transition: background 0.3s ease;
	}

	.cta-button:hover {
		background: #2d3748;
	}

	@media (max-width: 768px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
