<script lang="ts">
 import type { BoxProperties } from "../types";

 export let boxProperties: BoxProperties;
</script>

<main
 class={`w-[60vw] flex justify-center items-center`}
 style={`background-color: ${boxProperties.canvasColor};`}
>
 <div
  style={`width: ${boxProperties.width}rem; height: ${boxProperties.height}rem; background-color: ${boxProperties.backgroundColor}; border-radius: ${boxProperties.borderRadius}rem; border: 1px solid ${boxProperties.borderColor};`}
 />
</main>

<style>
 main {
  height: calc(100vh - 5rem);
 }
</style>
