import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Charlotte Lang-Bush | Work' },
];

export default function Work() {
  return <h1>Work</h1>;
}
