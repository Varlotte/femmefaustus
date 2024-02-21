import {
  $h1,
  $blurb,
  $figure,
  $img,
  $figcaptions,
  $blockquote,
  $blockquotep,
  $blockquotecite,
} from "./dev.css.ts";
import headshot from "../components/assets/CharlotteHeadshot.jpeg";
import { NavLink } from "react-router-dom";

export default function Dev() {
  return (
    <>
      <h1 className={$h1}>Dev</h1>
      <h2>About Me:</h2>
      <section className={$blurb}>
        <figure className={$figure}>
          <img alt="Charlotte Bush headshot" src={headshot} className={$img} />
          <figcaption className={$figcaptions}>A person-first dev</figcaption>
        </figure>
        <p>
          I'm a recent graduate of Flatiron School's full-stack engineering boot
          camp. I also have ten years' worth of experience in Project Managment,
          especially in education and learning. I've designed and run learning
          for everyone from day care students to CEOs. I can pick up a new
          language quickly, but my real superpower is thinking about the how of
          collaboration. Projects I manage succeed because of everyone's
          different learning and work styles, not in spite of them. What other
          devs can do that?
        </p>
      </section>
      <section className={$blurb}>
        <h3>The Foundation:</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Flask</li>
          <li>SQL</li>
          <li>YAML</li>
          <li>HTML and CSS</li>
        </ul>
        <h3>I'm Working On:</h3>
        <ul>
          <li>Nodejs</li>
          <li>TypeScript</li>
          <li>Vanilla Extract</li>
          <li>Vite</li>
          <li>Prisma</li>
        </ul>
      </section>
      <h2>Projects</h2>
      <section>
        <h3>RXGNosis</h3>
        <figure>
          {" "}
          {/* aaaaa this is SO ugly why is it so ugly? */}
          <iframe
            id="rxgnosis"
            title="RXGNosis"
            width="300"
            height="200"
            src="https://rxgnosis.com"
          ></iframe>
        </figure>
        <p>
          {" "}
          <NavLink to="https://rxgnosis.com">RXGnosis</NavLink> started out as
          my capstone project at Flatiron, but has since blossomed into the
          real-world usable tool of my dreams! It's a full-stack web application
          for patient advocacy in mental health care, empowering patients to
          advocate for themselves in doctor's appointments by providing them
          with peer-reviewed reliable information from a federal database. Check
          out the github{" "}
          <NavLink to="https://github.com/Varlotte/phase-5-project/blob/main/README.md">
            here!
          </NavLink>
        </p>
      </section>
      <section>
        <h3>Blog</h3>
        <figure>
          {" "}
          {/* aaaaa this is SO ugly why is it so ugly? */}
          <iframe
            id="blog"
            title="Blog"
            width="300"
            height="200"
            src="https://dev.to/varlotte"
          ></iframe>
        </figure>
      </section>
      <section>
        <h3>Resume</h3>
        <p>Download my resume here!</p>
      </section>
    </>
  );
}
