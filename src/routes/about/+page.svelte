<script>
	import { base } from '$app/paths';
</script>

<div class="about-container">
	<div class="profile-section">
		<div class="profile-content">
			<h3>About</h3>
			<div class="bio-section">
				<p>
					With 3 years of experience in frontend development, I specialize in creating responsive
					and user-friendly web applications. My technical expertise includes:
					<span class="tech-stack">
						<span>React</span>
						<span>Next.js</span>
						<span>MongoDB</span>
						<span>NodeJS</span>
					</span>
				</p>

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
		<div class="profile-photo">
			<img src="{base}/images/me.jpg" alt="Jamie Sim" />
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.profile-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.profile-photo {
		flex-shrink: 0;
		width: 400px;
		height: 500px;
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

	.tech-stack {
		display: flex;
		gap: 1rem;
		text-decoration: underline;
	}

	h3 {
		font-size: 80px;
		font-weight: 300;
		margin-bottom: 0.5rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	p {
		font-size: 24px;
		font-style: italic;
		font-weight: 300;
	}

	.bio-section {
		line-height: 1.6;
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

	@media (max-width: 375px) {
		h3 {
			font-size: 36px;
		}

		p {
			font-size: 16px;
		}

		.tech-stack span {
			font-size: 14px;
		}
	}
</style>
