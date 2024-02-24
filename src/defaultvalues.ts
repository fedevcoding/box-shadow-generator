import type { BoxProperties, Shadow } from "./types";

export const defaultBoxProperties: BoxProperties = {
 canvasColor: "rgb(17 24 39)",
 borderColor: "transparent",
 borderRadius: 2,
 backgroundColor: "white",
 height: 20,
 width: 20,
};

export const defaultShadow: Shadow = {
 active: true,
 inset: false,
 horizontalOffset: 0,
 verticalOffset: 10,
 blurRadius: 15,
 spreadRadius: -3,
 color: "rgba(0,0,0,0.1)",
};
