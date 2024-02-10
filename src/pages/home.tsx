import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Charlotte Lang-Bush. Freaky&nbsp;Fabulist.</h1>

      <section className="blurb">
        <figure>
          {/* <img alt="Charlotte Lang-Bush portrait" src={profile} /> */}
          <figcaption>Your humble narrator</figcaption>
        </figure>
        <blockquote>
          <p>
            Her voice is fresh, hilarious, devastatingly clever, and full of
            heart.
          </p>
          <cite>
            &mdash; {/* <NavLink to="https://www.jackmaccarthy.com/"> */} Mx.
            Jack MacCarthy {/* </NavLink> */}, Executive Artistic Director,
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
          Corpse Company, Fresh Ground Pepper, Turn to Flesh Productions, and
          Undiscovered Countries.
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
