/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
 content: ["./src/**/*.{html,js,svelte,ts}"],
 theme: {
  extend: {},
 },
 plugins: [daisyui],
 daisyui: {
  prefix: "d-",
  themes: [
   {
    mytheme: {
     primary: "#2563eb",

     secondary: "#006fff",

     accent: "#007d8a",

     neutral: "#080e21",

     "base-100": "#111827",

     info: "#00f6ff",

     success: "#00a214",

     warning: "#c79100",

     error: "#f85457",
    },
   },
  ],
 },
};
