import { style } from "@vanilla-extract/css";

const slideSpacing = "2rem";
const slideSize = "100%";
const slideHeight = "30rem";

export const $root = style({
  padding: "1.6rem",
  position: "relative",
});

export const $viewport = style({
  overflow: "hidden",
});

export const $container = style({
  backfaceVisibility: "hidden",
  display: "flex",
  touchAction: "pan-y",
  marginLeft: `calc(${slideSpacing} * -1)`,
});

export const $slide = style({
  flex: `0 0 ${slideSize}`,
  minWidth: 0,
  paddingLeft: slideSpacing,
  position: "relative",
});

export const $image = style({
  display: "block",
  height: slideHeight,
  width: "100%",
  objectFit: "cover",
});

export const $caption = style({
  textAlign: "center",
  fontStyle: "italic",
});

export const $dots = style({
  zIndex: 1,
  bottom: "0.2rem",
  position: "absolute",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
