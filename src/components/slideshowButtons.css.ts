import { style } from "@vanilla-extract/css";

const $button = style({
  WebkitAppearance: "none",
  backgroundColor: "transparent",
  touchAction: "manipulation",
  textDecoration: "none",
  border: 0,
  padding: 0,
  margin: 0,
  zIndex: 1,
  position: "absolute",
  top: "16rem",
  color: "#ab9eb9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: "3rem",
  height: "3rem",
  ":disabled": {
    opacity: 0.3,
  },
});

export const $svg = style({
  width: "65%",
  height: "65%",
});

export const $buttonPrev = style([
  $button,
  {
    left: "-16px",
  },
]);

export const $buttonNext = style([
  $button,
  {
    right: "-16px",
  },
]);
