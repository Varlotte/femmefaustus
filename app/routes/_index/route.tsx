import type { MetaFunction, LinksFunction } from '@remix-run/node';

import profile from '~/assets/profile.jpeg';
import styles from './styles.css';

export const meta: MetaFunction = () => [{ title: 'Charlotte Lang-Bush' }];

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function Index() {
  return (
    <>
      <h1>Charlotte Lang-Bush. Freaky&nbsp;Fabulist.</h1>

      <section className="blurb">
        <figure>
          <img alt="Charlotte Lang-Bush portrait" src={profile} />
          <figcaption>Your humble narrator</figcaption>
        </figure>
        <blockquote>
          <p>
            Her voice is fresh, hilarious, devastatingly clever, and full of
            heart.
          </p>
          <cite>
            &mdash; Mx. Jack MacCarthy, Executive Artistic Director,
            Caps&nbsp;Lock&nbsp;Theatre
          </cite>
        </blockquote>
      </section>

      <section>
        <p>
          Charlotte Lang-Bush has been writing plays since before she knew what
          they were. She has trained as both a medievalist and a special
          educator for young children.
        </p>
        <p>
          She's written for All Out Arts, AMiOS, CAPS LOCK Theatre, Exquisite
          Corpse Company, Turn to Flesh Productions, and Undiscovered Countries.
        </p>
        <p>
          Her play, <em>Parlor Tricks</em>, opened the 2019 Fresh Fruit Festival
          and won four Fruitie awards from its board and audience. She has used
          her historian's training to help research for Carmen Maria Machado and
          Gail Carson Levine, and has written scripts for queer superhero
          romance games for Ubisoft Entertainment SA.
        </p>
      </section>
    </>
  );
}
