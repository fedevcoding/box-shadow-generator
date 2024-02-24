import type { Shadow } from "./types";

export function getBoxShadow(shadows: Shadow[]): string {
 console.log(shadows);
 return shadows
  .filter((shadow) => shadow.active)
  .map(
   (shadow) =>
    `${shadow.inset ? "inset" : ""} ${shadow.horizontalOffset}px ${
     shadow.verticalOffset
    }px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${shadow.color}`
  )
  .join(", ");
}
