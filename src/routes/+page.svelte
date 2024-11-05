<script>
	import { base } from '$app/paths';
</script>

<div class="profile-container">
	<img src="{base}/images/pottery.jpeg" alt="Profile" class="profile-image" />
</div>

<style>
	.profile-container {
		display: flex;
		justify-content: center;
		padding: 2rem 0;
	}

	.profile-image {
		width: 500px; /* Add a specific width */
		height: auto; /* Add a specific height */
		object-fit: cover;
		border-radius: 4px; /* Optional: adds rounded corners */
	}
</style>
