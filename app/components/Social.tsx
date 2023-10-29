import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faMastodon,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { $root, $item, $link, $linkText } from './Social.css';

type Link = {
  name: string;
  url: string;
  icon: IconDefinition;
};

export const loader = async (): Promise<Link[]> => {
  return [
    {
      name: 'New Play Exchange',
      url: 'https://newplayexchange.org/users/18106/charlotte-lang-bush',
      icon: faFileAlt,
    },
    {
      name: 'Mailing List',
      url: 'https://newplayexchange.us19.list-manage.com/subscribe?u=ed72128c673ea4481b9b3e5db&id=014f54109c',
      icon: faEnvelope,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/varl0tte/',
      icon: faInstagram,
    },
    {
      name: 'Mastodon',
      url: 'https://mainframe.club/@varlotte',
      icon: faMastodon,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/charlottevarlet',
      icon: faTwitter,
    },
  ];
};

export default function Social({ data }: { data: Link[] }) {
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
