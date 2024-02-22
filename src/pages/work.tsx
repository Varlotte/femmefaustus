import Resume from "../components/resume";
import Slideshow from "../components/slideshow";
import "./work.css";

export default function Art() {
  return (
    <>
      <h1>Art</h1>

      <section className="artist-statement">
        <p>
          <strong>I love: </strong>
          historical echoes and historian arguments, Chekhov's gun but for stage
          food, weaponized anachronism, unsolved things, subcultures,
          *yEaRnIng*, language games, horror as intimacy, monstrous things, and
          trying to un-solve as many things as possible. Collaborating with
          friends and making friends with collaborators. Plays that do
          impossible things, plays that break the world open in the middle, and
          plays that ask for too much.
        </p>
        <p>
          <strong>I know:</strong> that I’m not done yet. Not even close. I’m
          always looking for new collaborators who I can learn from and create
          with. If you want to be one of those people please{" "}
          <a href="#contact">contact me</a>.
        </p>
      </section>

      <Slideshow />
      <Resume />
    </>
  );
}
