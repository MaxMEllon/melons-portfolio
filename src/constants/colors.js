import { random } from "lodash/fp";

const colors = Object.freeze({
  pink: "#FD5992",
  cyan: "#01C9D5",
  white: "#FFFFFF",
  black: "#0A0A0A",
});

export function randomColor() {
  switch (random(0, 1)) {
    case 0:
      return colors.pink;
    case 1:
      return colors.cyan;
  }
}

export default colors;
