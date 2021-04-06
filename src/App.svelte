<script lang="ts">
	import Card from './Card.svelte';
	import Header from './Header.svelte';
</script>



<main>
	<Header />
	<div>
		<Card color="#f07c12">
			<h1>ABOUT</h1>
		</Card>
		<Card color="#90bc1a">
			<h1>PROJECTS</h1>
		</Card>
		<Card color="#0095ac">
			<h1>RESUME</h1>
		</Card>
	</div>
</main>

<style lang="scss">
	main {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #e4e1d9;
	}

	h1 {
		display: flex;
		width: 100%;
		height: 100%;
		line-height: 2;
		align-items: flex-start;
		justify-content: center;
	}

	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>