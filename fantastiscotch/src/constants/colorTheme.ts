import { css } from "styled-components/macro";

export const darkest = "#885053";
export const dark = "#fe5f55";
export const neutral = "#777da7";
export const light = "#94c9a9";
export const lightest = "#c6ecae";

const bg = (color: string) =>
  css`
    background-color: ${color};
  `;
const fg = (color: string) =>
  css`
    color: ${color};
  `;

export const bgDarkest = bg(darkest);
export const bgDark = bg(dark);
export const bgNeutral = bg(neutral);
export const bgLight = bg(light);
export const bgLighest = bg(lightest);

export const fgDarkest = fg(darkest);
export const fgDark = fg(dark);
export const fgNeutral = fg(neutral);
export const fgLight = fg(light);
export const fgLighest = fg(lightest);
