<script>
	import Nav from '../components/Nav.svelte';
	import Contact from '../components/Contact.svelte';

	export let segment;
	export let year = (new Date()).getFullYear();
</script>

<style>
	main {
		position: relative;
		max-width: var(--max-width);
		background-color: var(--platinum);
		padding: 20px;
		margin: 0 auto;
	}

	footer {
		padding: 20px;
		background-color: var(--violet);
		color: var(--platinum);
	}

	.copyright {
		display: block;
		max-width: var(--max-width);
		margin: 40px auto;
		color: var(--rhythm);
		text-align: center;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<Contact />
	<small class="copyright">&copy; {year} Charlotte Lang-Bush. Images used with permission. Made with love by <a href="http://nelson.codes" title="Nelson Pecora">Nelson Pecora</a></small>
</footer>
