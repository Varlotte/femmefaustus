import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faBlog,
  faEnvelope,
  faFileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faMastodon,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { $root, $item, $link, $linkText } from "./social.css";

type Link = {
  name: string;
  url: string;
  icon: IconDefinition;
};

const data: Link[] = [
  {
    name: "GitHub",
    url: "https://github.com/Varlotte",
    icon: faGithub,
  },
  {
    name: "Dev Blog",
    url: "https://dev.to/varlotte",
    icon: faBlog,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/charlottebush7/",
    icon: faLinkedin,
  },

  {
    name: "New Play Exchange",
    url: "https://newplayexchange.org/users/18106/charlotte-lang-bush",
    icon: faFileAlt,
  },
  {
    name: "Artistic Mailing List",
    url: "https://newplayexchange.us19.list-manage.com/subscribe?u=ed72128c673ea4481b9b3e5db&id=014f54109c",
    icon: faEnvelope,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/varl0tte/",
    icon: faInstagram,
  },
  {
    name: "Mastodon",
    url: "https://mainframe.club/@varlotte",
    icon: faMastodon,
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/varlotte.bsky.social",
    icon: faUser,
  },
];

export default function Social() {
  return (
    <ul className={$root}>
      {data.map((link) => (
        <li key={link.name} className={$item}>
          <a
            href={link.url}
            title={link.name}
            target="_blank"
            rel="me noreferrer"
            className={$link}
          >
            <FontAwesomeIcon icon={link.icon} />
            <span className={$linkText}>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
