import { style } from "@vanilla-extract/css";

export const $root = style({
  fontWeight: 300,
  maxWidth: "var(--max-width)",
  margin: "0 auto 40px",
  padding: "0 8px 0 20px",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const $link = style({
  textDecoration: "none",
  padding: "10px 12px",
  display: "block",
});

export const $active = style([
  $link,
  {
    position: "relative",
    display: "inline-block",
    "::after": {
      position: "absolute",
      content: "",
      width: "calc(100% - 24px)",
      height: "3px",
      backgroundColor: "var(--blue)",
      display: "block",
      bottom: "8px",
    },
  },
]);
