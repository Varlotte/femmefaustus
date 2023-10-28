import { json, type LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';

import globalStyles from '~/global.css';
import favicon from '~/assets/favicon.ico';
import Nav from '~/components/Nav';
import Social, { loader as socialLoader } from '~/components/Social';
import Contact from '~/components/Contact';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap',
  },
  { rel: 'stylesheet', href: globalStyles },
  // Add bundled css after global stylesheet.
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'icon', href: favicon },
];

export const loader = async () => {
  return json({
    social: await socialLoader(),
  });
};

export default function App() {
  const data = useLoaderData<typeof loader>();
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <main>
          <Outlet />
        </main>
        <footer>
          <div className="footer-inner">
            <Social data={data.social} />
            <Contact />
          </div>
          <webring-banner class="webring">
            <p>
              Member of the{' '}
              <a href="https://web.mainframe.club">Mainframe.club</a> webring
            </p>
            <a href="https://web.mainframe.club/prev">Previous</a>
            <a href="https://web.mainframe.club/random">Random</a>
            <a href="https://web.mainframe.club/next">Next</a>
          </webring-banner>
          <small className="copyright">
            &copy; {year} Charlotte Lang-Bush. Images used with permission. Made
            with love by{' '}
            <a href="http://nelson.codes" title="Nelson Pecora">
              Nelson Pecora
            </a>
          </small>
        </footer>
        <script async src="https://web.mainframe.club/embed.js"></script>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
