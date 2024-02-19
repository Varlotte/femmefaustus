import { NavLink } from "react-router-dom";
import profile from "../components/assets/profile.jpeg";
import {
  $h1,
  $blurb,
  $figure,
  $img,
  $figcaptions,
  $blockquote,
  $blockquotep,
  $blockquotecite,
} from "./home.css.ts";
export default function Home() {
  return (
    <>
      <h1 className={$h1}>Charlotte Lang-Bush. Freaky&nbsp;Fabulist.</h1>

      <section className={$blurb}>
        <figure className={$figure}>
          <img
            alt="Charlotte Lang-Bush portrait"
            src={profile}
            className={$img}
          />
          <figcaption className={$figcaptions}>Your humble narrator</figcaption>
        </figure>
        <blockquote className={$blockquote}>
          <p className={$blockquotep}>
            Her voice is fresh, hilarious, devastatingly clever, and full of
            heart.
          </p>
          <cite className={$blockquotecite}>
            &mdash;{" "}
            <NavLink to="https://www.jackmaccarthy.com/">
              {" "}
              Mx. Jack MacCarthy
            </NavLink>
            , Executive Artistic Director, Caps&nbsp;Lock&nbsp;Theatre
          </cite>
        </blockquote>
      </section>

      <section>
        <p>
          Charlotte Lang-Bush has been writing plays since before she knew what
          they were. She has trained as a medievalist, a special educator, and a
          software developer, and would be happy to tell you how they're all
          related.
        </p>
        <p>
          She's written for All Out Arts, AMiOS, CAPS LOCK Theatre, Exquisite
          Corpse Company, Fresh Ground Pepper, Turn to Flesh Productions, and
          Undiscovered Countries.
        </p>
        <p>
          Her play, <em>Parlor Tricks</em>, opened the 2019 Fresh Fruit Festival
          and won four Fruitie awards from its board and audience. She has used
          her training as an historian to help research works in progress for
          Carmen Maria Machado and Gail Carson Levine, and has written scripts
          for Ubisoft Entertainment SA and Deconstructeam.
        </p>
      </section>
    </>
  );
}
