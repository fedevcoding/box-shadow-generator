<script lang="ts">
 import { defaultShadow } from "../defaultvalues";
 import type { Shadow } from "../types";

 export let shadows: Shadow[];

 function addShadow() {
  shadows.push({ ...defaultShadow });
  shadows = shadows;
 }
</script>

<aside class="w-[20vw] border-r-2 border-r-gray-500">
 <div class="flex items-center justify-center gap-6 py-6">
  <h1>Customizs Shadows</h1>
  <button class="d-btn d-btn-primary d-btn-sm" on:click={addShadow}>
   Add a shadow
  </button>
 </div>

 {#each shadows as shadow, i (i)}
  <div>
   Shadow {i}
  </div>
 {/each}
</aside>

<style>
 aside {
  height: calc(100vh - 5rem);
 }
</style>
