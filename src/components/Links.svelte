<script>
  import Icon from 'fa-svelte'
  import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
  import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

  const links = [{
    name: 'New Play Exchange',
    url: 'https://newplayexchange.org/users/18106/charlotte-lang-bush',
    icon: faFileAlt
  }, {
    name: 'Mailing List',
    url: 'https://newplayexchange.us19.list-manage.com/subscribe?u=ed72128c673ea4481b9b3e5db&id=014f54109c',
    icon: faEnvelope
  }, {
    name: 'Twitter',
    url: 'https://twitter.com/charlottevarlet',
    icon: faTwitter
  }, {
    name: 'Instagram',
    url: 'https://www.instagram.com/varl0tte/',
    icon: faInstagram
  }];
</script>

<style>
  .links {
		font-weight: 300;
		max-width: var(--max-width);
		margin: 40px auto;
		width: 100%;
    max-width: 550px;
	}

	ul {
		margin: 0;
		padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px;
	}

	li {
		display: block;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  a span {
    margin-left: 10px;
  }

  @media screen and (min-width: 1000px) {
		.links {
      margin: 40px 0;
      width: 250px;
    }

    ul {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
	}
</style>

<nav class="links">
  <ul>
    {#each links as link}
      <li><a href={link.url} title={link.name} target="_blank">
        <Icon icon={link.icon} />
        <span>{link.name}</span>
      </a></li>
    {/each}
  </ul>
</nav>
