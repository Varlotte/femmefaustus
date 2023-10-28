import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['webring-banner']: DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class: string };
    }
  }
}
