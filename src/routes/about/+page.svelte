<script>
	import { base } from '$app/paths';
</script>

<div class="about-container">
	<div class="profile-section">
		<div class="profile-photo">
			<img src="{base}/images/me.jpg" alt="Jamie Sim" />
		</div>

		<div class="profile-content">
			<h1>Jamie Heejin Sim</h1>
			<h2>Web Developer | UX Writer | Interpreter | Translator</h2>

			<div class="bio-section">
				<p>
					With 3 years of experience in frontend development, I specialize in creating responsive
					and user-friendly web applications. My technical expertise includes:
				</p>
				<ul class="tech-stack">
					<li>React</li>
					<li>Next.js</li>
					<li>MongoDB</li>
					<li>NodeJS</li>
				</ul>

				<p>
					Beyond coding, I work as an interpreter, primarily in medical settings, bridging
					communication gaps and ensuring clear understanding between parties. I also bring a strong
					aesthetic sense and design background to my development work, focusing on creating
					visually appealing applications that enhance users' daily lives and promote better habits.
				</p>

				<p>
					My experience includes UX writing for landing pages and marketing materials, allowing me
					to craft compelling narratives that resonate with users. This combination of technical,
					design, and communication skills enables me to create holistic solutions that are not only
					functional but also engaging and intuitive.
				</p>

				<p>
					My strength lies in understanding client needs and translating them into effective,
					aesthetically-driven solutions. I pride myself on being an empathetic communicator who can
					navigate complex requirements and deliver results that exceed expectations while
					maintaining a strong focus on user experience and visual appeal.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.about-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.profile-section {
		display: flex;
		gap: 3rem;
		align-items: center;
	}

	.profile-photo {
		flex-shrink: 0;
		width: 300px;
		height: 300px;
		overflow: hidden;
	}

	.profile-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.profile-content {
		flex: 1;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: #2d3748;
	}

	h2 {
		font-size: 1.5rem;
		color: #4a5568;
		margin-bottom: 2rem;
	}

	.bio-section {
		line-height: 1.6;
	}

	.tech-stack {
		display: flex;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}

	.tech-stack li {
		background: #e2e8f0;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.profile-section {
			flex-direction: column;
			align-items: center;
		}

		.profile-photo {
			width: 250px;
			height: 250px;
		}
	}
</style>
