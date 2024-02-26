<script lang="ts">
 import type { BoxProperties, Shadow } from "../types";
 import { getBoxShadow } from "../utils";

 export let boxProperties: BoxProperties;
 export let shadows: Shadow[];

 $: shadow = getBoxShadow(shadows);
</script>

<main
 class={`w-[100vw] xl:w-[60vw] flex justify-center items-center xl:h-[calc(100vh-5rem)] py-20 xl:py-0`}
 style={`background-color: ${boxProperties.canvasColor};`}
>
 <div
  id="box"
  style={`width: ${boxProperties.width}rem; height: ${boxProperties.height}rem; background-color: ${boxProperties.backgroundColor}; border-radius: ${boxProperties.borderRadius}rem; border: 1px solid ${boxProperties.borderColor}; box-shadow: ${shadow};`}
 />
</main>
