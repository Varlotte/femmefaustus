import { style } from '@vanilla-extract/css';

export const $root = style({
  fontWeight: 300,
  maxWidth: 'var(--max-width)',
  margin: '40px auto',
  width: '100%',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridGap: '40px',
  '@media': {
    'screen and (min-width: 1000px)': {
      margin: '40px 0',
      width: '250px',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
    },
  },
});

export const $item = style({
  display: 'block',
});

export const $link = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

export const $linkText = style({
  marginLeft: '10px',
});
