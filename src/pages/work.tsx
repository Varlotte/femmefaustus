import React from "react";
// import resume from "../components/resume";
// import Slideshow from "../components/slideshow";

export default function Work() {
  return (
    <>
      <h1>Work</h1>

      <section className="artist-statement">
        <p>
          <strong>I love:</strong> unsolved things, archival research,
          world-building, queering genre fiction, complicated women+, dalliances
          with unlikeability, mysteries, the monstrous, magical realism, and the
          tragedy of ghosts. Learning to be a better intersectional feminist.
          Constructivism and different brains. Languages in all their twisty
          graftings and illogical roots. I love humor, games, and the way
          children tell stories. Consent. Exuberance. Revenge. Punch lines and
          poptimism.
        </p>
        <p>
          <strong>I know:</strong> that I’m not done yet. Not even close. I’m
          always looking for new collaborators who I can learn from and create
          with. If you want to be one of those people please{" "}
          <a href="#contact">contact me</a>.
        </p>
      </section>

      {/* <Slideshow items={slideshow} /> */}

      <h2>Résumé</h2>

      {/* {resume.map((section) => (
        <section className="resume-section" key={section.hed}>
          <h3>{section.hed}</h3>
          <ul>
            {!!section.items &&
              section.items.map((item) => (
                <li className="item" key={`${item.where}|${item.when}`}>
                  <span className="title">{item.title}</span>
                  <span className="where">{item.where}</span>
                  <span className="when">{item.when}</span>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </li>
              ))}

            {!!section.flatItems &&
              section.flatItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ))} */}
    </>
  );
}
