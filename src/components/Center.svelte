<script lang="ts">
 import type { BoxProperties, Shadow } from "../types";
 import { getBoxShadow } from "../utils";

 export let boxProperties: BoxProperties;
 export let shadows: Shadow[];

 $: shadow = getBoxShadow(shadows);
</script>

<main
 class={`w-[60vw] xl:[100vw] flex justify-center items-center`}
 style={`background-color: ${boxProperties.canvasColor};`}
>
 <div
  id="box"
  style={`width: ${boxProperties.width}rem; height: ${boxProperties.height}rem; background-color: ${boxProperties.backgroundColor}; border-radius: ${boxProperties.borderRadius}rem; border: 1px solid ${boxProperties.borderColor}; box-shadow: ${shadow};`}
 />
</main>

<style>
 main {
  height: calc(100vh - 5rem);
 }
</style>
