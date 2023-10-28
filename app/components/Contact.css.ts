import { style } from '@vanilla-extract/css';

export const $root = style({
  margin: '40px auto',
  width: '100%',
  maxWidth: '550px',
  display: 'grid',
  gridTemplateColumns: 'auto',
  '@media': {
    'screen and (min-width: 1000px)': {
      margin: '40px 0',
      width: '450px',
    },
  },
});

export const $label = style({
  margin: '10px 0 5px',
  color: 'var(--rhythm)',
});

export const $input = style({
  display: 'block',
  width: '100%',
  backgroundColor: 'var(--lilac-light)',
  boxShadow: 'none',
  border: '2px solid transparent',
  borderRadius: '5px',
  marginBottom: '20px',
  padding: '5px 10px',
  color: 'var(--black)',
  WebkitTextFillColor: 'var(--black)',
  ':focus': {
    outline: 'none',
    border: '2px solid var(--rhythm)',
  },
});

export const $largeInput = style([
  $input,
  {
    minHeight: '250px',
  },
]);

export const $error = style({
  color: 'var(--lilac-light)',
});

const buttonHover = {
  outline: 'none',
  border: '2px solid var(--lilac-light)',
};

export const $button = style({
  margin: '20px 0',
  backgroundColor: 'var(--rhythm)',
  boxShadow: 'none',
  border: '2px solid transparent',
  borderRadius: '5px',
  color: 'var(--platinum)',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  padding: '8px 10px',
  cursor: 'pointer',
  ':disabled': {
    backgroundColor: 'var(--heliotrope)',
    cursor: 'not-allowed',
  },
  selectors: {
    '&:not(:disabled):hover': buttonHover,
    '&:not(:disabled):focus': buttonHover,
  },
});

export const $success = style({
  color: 'var(--lilac-light)',
  textAlign: 'center',
});
