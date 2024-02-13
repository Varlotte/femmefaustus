import Resume from "../components/resume";
// import Slideshow from "../components/slideshow";

export default function Work() {
  return (
    <>
      <h1>Work</h1>

      <section className="artist-statement">
        <p>
            {/* come back to this later, it is is cringe */}
          <strong>I love:</strong> unsolved things, archival research,
          world-building, queering genre fiction, dalliances
          with unlikeability, mysteries, the monstrous, magical realism, and the
          tragedy of ghosts. Learning to be a better intersectional feminist.
          Constructivism and different brains and bodies. Languages in all their
          twisty graftings and illogical roots. I love humor, games, and the way
          children tell stories. Consent. Exuberance. Id. Punch lines and pop
          culture.
        </p>
        <p>
          <strong>I know:</strong> that I’m not done yet. Not even close. I’m
          always looking for new collaborators who I can learn from and create
          with. If you want to be one of those people please{" "}
          <a href="#contact">contact me</a>.
        </p>
      </section>

      {/* <Slideshow items={slideshow} /> */}
      <Resume />
    </>
  );
}
