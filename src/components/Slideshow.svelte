<script>
  import Carousel from '@beyonk/svelte-carousel';
  import Icon from 'fa-svelte';
  import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
  import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

  const slides = [{
    img: 'lfo2.png',
    text: 'Sample writing prompt from Letters from Otherwhere, Summer 2020',
    credit: 'Photo credit: Elizabeth Ballou'
  }, {
    img: 'port1.jpg',
    text: 'þæt wæs gōd cyning, “beyond the ingenue” festival with Turn To Flesh, Spring 2019',
    credit: 'Photo credit: Lisa LaGrande'
  }, {
    img: 'port2.jpg',
    text: '“Two Lips: Translated from the Dutch” from CryptoSHOTZ, June 2018',
    credit: 'Photo credit: AMiOS'
  }, {
    img: 'port3.jpg',
    text: '“I’m not here to make friends, Bitch!” from Green New SHOTZ!, May 2017',
    credit: 'Photo credit: AMiOS'
  }].concat([1, 2, 3, 4, 5, 6, 7, 8].map((num) => ({
    img: `ghost${num}.jpg`,
    text: 'Parlor Tricks, Summer 2019',
    credit: `Photo credit: ${num < 4 ? 'Laurel Andersen' : 'Louis Lopardi' }`
  })))
</script>

<style>

  .wrapper {
    margin: 40px auto;
  }

  .slide-content {
    width: 100%;
    margin: 0;
  }

	img {
    width: 100%;
    max-height: 300px;
    margin: 0 auto;
    object-fit: contain;
	}

	figcaption {
    font-style: italic;
    padding: 10px 10px 30px;
    width: 100%;
    text-align: center;
  }

  .wrapper :global(button) {
    height: 300px;
    top: 0;
    margin-top: 0;
    cursor: pointer;
  }

  .wrapper :global(button.left) {
    left: 1vw;
    top: 150px;
  }

  .wrapper :global(button.right) {
    right: 1vw;
    top: 150px;
  }

  .control :global(svg) {
    width: 34px;
    height: 34px;
    color: var(--violet);
  }

  @media screen and (min-width: 600px) {
    img {
      max-height: 500px;
    }

    .wrapper :global(button) {
      height: 500px;
    }

    .wrapper :global(button.left) {
      top: 250px;
    }

    .wrapper :global(button.right) {
      top: 250px;
    }
  }
</style>

<div class="wrapper">
  <Carousel perPage={1} duration={500}>
    <span class="control" slot="left-control"><Icon icon={faCaretLeft} /></span>

    {#each slides as slide}
      <figure class="slide-content">
        <img alt={slide.text} src={slide.img}>
        <figcaption>
          {slide.text}<br />
          <small>{slide.credit}</small>
        </figcaption>
      </figure>
    {/each}

    <span class="control" slot="right-control"><Icon icon={faCaretRight} /></span>
  </Carousel>
</div>
