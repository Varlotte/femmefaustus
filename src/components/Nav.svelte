<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		max-width: var(--max-width);
		margin: 0 auto 40px;
		padding: 0 8px 0 20px;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-end;
	}

	li {
		display: block;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 24px);
		height: 3px;
		background-color: var(--blue);
		display: block;
		bottom: 8px;
	}

	a {
		text-decoration: none;
		padding: 10px 12px;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "work" ? "page" : undefined}' href='work'>work</a></li>
	</ul>
</nav>
