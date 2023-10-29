import { style } from '@vanilla-extract/css';

export const $dot = style({
  WebkitAppearance: 'none',
  backgroundColor: 'transparent',
  touchAction: 'manipulation',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 0,
  padding: 0,
  margin: 0,
  width: '1.6rem',
  height: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  marginRight: '0.75rem',
  marginLeft: '0.75rem',
  ':after': {
    background: 'var(--platinum)',
    borderRadius: '0.2rem',
    width: '100%',
    height: '0.3rem',
    content: '',
  },
});

export const $dotSelected = style([
  $dot,
  {
    ':after': {
      background: 'linear-gradient(45deg, var(--violet), var(--orange))',
    },
  },
]);
