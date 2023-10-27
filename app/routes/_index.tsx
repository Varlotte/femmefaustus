import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [{ title: 'Charlotte Lang-Bush' }];

export default function Index() {
  return <h1 className="text-6xl font-bold text-red-700">Hello World!</h1>;
}
