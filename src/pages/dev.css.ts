import { style } from "@vanilla-extract/css";

export const $h1 = style({
  textAlign: "center",
});

export const $blurb = style({
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "40px auto",
    },
  },
});

export const $figure = style({
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto 10px",
});

export const $img = style({
  width: "100%",
  margin: "0",
});

export const $figcaptions = style({
  fontStyle: "italic",
});

export const $blockquote = style({
  width: "100%",
  maxWidth: "420px",
  margin: "20px auto",
  textAlign: "center",
});

export const $blockquotep = style({
  display: "block",
  margin: "0",
  position: "relative",
});

export const $blockquotecite = style({ textAlign: "right" });
