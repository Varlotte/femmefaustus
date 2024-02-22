import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  $hcenter,
  $blurb,
  $figure,
  $img,
  $figcaptions,
  $blockquote,
  $blockquotep,
  $blockquotecite,
  $icon,
  $listitem,
  $blog,
} from "./dev.css.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faPython,
  faGit,
  faGithub,
  faHtml5,
  faCss3,
  faNodeJs,
  faCloudflare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlask,
  faDatabase,
  faCode,
  faComputer,
  faNetworkWired,
  faT,
  faV,
  faFire,
  faRainbow,
  faCodeCommit,
} from "@fortawesome/free-solid-svg-icons";
import headshot from "../components/assets/CharlotteHeadshot.png";
import screenshot from "../components/assets/rxgnosis_screenshot.png";
import "../Charlotte Bush SE Resume (1).pdf";

type BlogPost = {
  title: string;
  canonical_url: string;
  readable_publish_date: string;
  description: string;
  tags: string;
};

export default function Dev() {
  const blogURL = "https://dev.to/api/articles?username=varlotte";
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch(blogURL)
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
      });
  }, []);
  const latestPost: BlogPost = blogData[0];
  return (
    <>
      <h1 className={$hcenter}>Charlotte Bush.</h1>
      <h1 className={$hcenter}>A Developer For Humans.</h1>
      <section className={$blurb}>
        <figure className={$figure}>
          <img alt="Charlotte Bush headshot" src={headshot} className={$img} />
          <figcaption className={$figcaptions}>
            Full-stack and fabulous
          </figcaption>
        </figure>
        <blockquote className={$blockquote}>
          <p className={$blockquotep}>
            We dreamed of JavaScript and woke up screaming.
          </p>
          <NavLink to={"https://nostarch.com/hemingway"}>
            <cite className={$blockquotecite}>&mdash; Roberto Bolaño</cite>
          </NavLink>
        </blockquote>
      </section>
      <h2 className={$hcenter}>About Me</h2>
      <p>
        I'm a recent graduate of Flatiron School's full-stack engineering boot
        camp. I also have ten years' worth of experience in Project Managment,
        especially in education, accessibility, and learning. I've designed and
        led successful and scalable education programs for everyone from day
        care students to CEOs, and love learning about how people think.{" "}
      </p>
      <p>
        I love to learn, and can pick up a new tool quickly, but my{" "}
        <em>real </em>
        superpower is that I program as a person first. I scope projects, write
        code and docs, and design apps with real human users in mind, writing
        everything to be understood. I'd rather write something helpful than
        something flashy, but I don't think they're mutually exclusive. No
        matter who signs my checks, I love being part of a team creating
        something that meaningfully helps real people.
      </p>
      <h2 className={$hcenter}>Projects</h2>
      <NavLink to="https://rxgnosis.com">
        <h3>RXGnosis</h3>{" "}
      </NavLink>
      <section className={$blurb}>
        <img
          alt="screenshot of RXGnosis homepage"
          src={screenshot}
          className={$img}
          style={{ marginRight: "20px" }}
        />

        <p>
          {" "}
          <NavLink to="https://rxgnosis.com">RXGnosis</NavLink> started out as
          my capstone project at Flatiron, but has since blossomed into the
          real-world usable tool of my dreams! It's a full-stack web application
          for patient advocacy in mental health care, empowering patients to
          with peer-reviewed reliable treatment information from a federal
          database. Check out the github{" "}
          <NavLink to="https://github.com/Varlotte/phase-5-project/blob/main/README.md">
            here!
          </NavLink>
        </p>
      </section>
      <section>
        <h4>The Foundation</h4>
        <div>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faJs} className={$icon} /> JavaScript,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faReact} className={$icon} />
            React,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faPython} className={$icon} />
            Python,{" "}
          </span>{" "}
          <span className={$listitem}>
            {" "}
            <FontAwesomeIcon icon={faFlask} className={$icon} />
            Flask,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faDatabase} className={$icon} />
            SQL,
          </span>{" "}
          <span className={$listitem}>
            <FontAwesomeIcon icon={faCode} className={$icon} />
            YAML,
          </span>{" "}
          <span className={$listitem}>
            <FontAwesomeIcon icon={faDatabase} className={$icon} />
            SQLite,
          </span>{" "}
          <span className={$listitem}>
            <FontAwesomeIcon icon={faGit} className={$icon} />
            Git,
          </span>{" "}
          <span className={$listitem}>
            <FontAwesomeIcon icon={faComputer} className={$icon} />
            VSCode,
          </span>
          <span className={$listitem}>
            {" "}
            <FontAwesomeIcon icon={faGithub} className={$icon} /> Github,{" "}
          </span>{" "}
          <span className={$listitem}>
            <FontAwesomeIcon icon={faNetworkWired} className={$icon} />
            Restful APIs,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faHtml5} className={$icon} />
            HTML & <FontAwesomeIcon icon={faCss3} className={$icon} />
            CSS
          </span>
        </div>
        <h4>In Progress</h4>
        <div>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faNodeJs} className={$icon} />
            Nodejs,
          </span>
          <span className={$listitem}>
            {" "}
            <FontAwesomeIcon icon={faT} className={$icon} />
            TypeScript,{" "}
          </span>{" "}
          <span className={$listitem}>
            <FontAwesomeIcon icon={faV} className={$icon} />
            Vanilla Extract,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faCodeCommit} className={$icon} />
            Vite,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faCloudflare} className={$icon} />
            Cloudflare,
          </span>
          <span className={$listitem}>
            {" "}
            <FontAwesomeIcon icon={faRainbow} className={$icon} />
            Prisma,{" "}
          </span>
          <span className={$listitem}>
            <FontAwesomeIcon icon={faFire} className={$icon} /> Firebase
          </span>
        </div>
      </section>
      <section>
        <h2 className={$hcenter}>Learn More</h2>
        <h3>Blog</h3>
        <p>
          I love to write about the new languages and tools I'm picking up.
          Here's a preview of the latest!
        </p>
      </section>
      {latestPost && (
        <section className={$blog}>
          <h4 style={{ marginTop: "0px" }}>
            <NavLink to={latestPost.canonical_url}>{latestPost.title}</NavLink>
          </h4>
          <h5>Published: {latestPost.readable_publish_date}</h5>
          <p>{latestPost.description}</p>
          <ul>{latestPost.tags}</ul>
        </section>
      )}
      <section>
        <p style={{ paddingTop: "20px" }}>
          Check out the rest of my{" "}
          <NavLink to="https://dev.to/varlotte">dev.to blog here!</NavLink>
        </p>
      </section>
      <section>
        <h3>Resume</h3>
        <p>
          Download my resume{" "}
          <a href="src/Charlotte Bush SE Resume (1).pdf" download>
            here
          </a>
          !
        </p>
        <h3>The Total Package</h3>
        <p>
          As well as writing code, I also write award-winning off-off Broadway
          plays and scripts for major video game studios! Check out my{" "}
          <NavLink to="https://femmefaust.us/art">art page </NavLink>
          to learn more!
        </p>
      </section>
    </>
  );
}
