<script>
	import Nav from '../components/Nav.svelte';
	import Links from '../components/Links.svelte';
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

	.footer-inner {
		width: 100%;
	}

	.webring {
    color: var(--black);
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

	.copyright {
		display: block;
		max-width: var(--max-width);
		margin: 40px auto;
		color: var(--rhythm);
		text-align: center;
	}

	@media screen and (min-width: 1000px) {
		.footer-inner {
			display: flex;
			flex-flow: row wrap;
			align-items: flex-start;
			justify-content: space-around;
			width: 940px;
			margin: 0 auto;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<div class="footer-inner">
		<Links />
		<Contact />
	</div>
	<webring-banner class="webring">
    <p>Member of the <a href="https://mainframe.club">Mainframe.club</a> webring</p>
    <a href="https://mainframe.club/prev">Previous</a>
    <a href="https://mainframe.club/random">Random</a>
    <a href="https://mainframe.club/next">Next</a>
  </webring-banner>
	<small class="copyright">&copy; {year} Charlotte Lang-Bush. Images used with permission. Made with love by <a href="http://nelson.codes" title="Nelson Pecora">Nelson Pecora</a></small>
</footer>
