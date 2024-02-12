import resume from "./resume.yaml";

export default function Work() {
  const { resume, slideshow } = useLoaderData<{
    resume: ResumeSection[];
    slideshow: SlideshowItem[];
  }>();

  return (
    <>
      <h1>Work</h1>

      <h2>Résumé</h2>

      {resume.map((section) => (
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
      ))}
    </>
  );
}
