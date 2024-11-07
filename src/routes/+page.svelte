<script>
	import { base } from '$app/paths';
</script>

<div class="profile-container">
	<img src="{base}/images/pottery.jpeg" alt="Profile" class="profile-image" />
	<div class="profile-text">
		<a href="https://www.heejinsim.com">www.heejinsim.com</a>
		<a href="mailto:jamieheejinsim@gmail.com">jamieheejinsim@gmail.com</a>
		<a href="https://www.instagram.com/jamierereads">@jamierereads</a>
	</div>
</div>

<style>
	.profile-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	.profile-image {
		width: 100%;
		max-width: 500px;
		height: auto;
		object-fit: cover;
		border-radius: 4px;
	}

	.profile-text {
		display: flex;
		gap: 4rem;
		font-size: 18px;
		font-weight: 200;
		margin-top: 2rem;
		a {
			text-decoration: none;
			color: black;
		}
	}

	@media (max-width: 768px) {
		.profile-text {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
	}
</style>
