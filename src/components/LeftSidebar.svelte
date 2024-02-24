<script lang="ts">
 import { defaultShadow } from "../defaultvalues";
 import type { Shadow } from "../types";

 export let shadows: Shadow[];

 function addShadow() {
  shadows.push({ ...defaultShadow });
  shadows = shadows;
 }
</script>

<aside
 class="w-[20vw] border-r-2 border-r-gray-500 px-4 py-6 overflow-y-scroll"
>
 <div class="flex items-center justify-center gap-6 pb-6">
  <h1>Customizs Shadows</h1>
  <button class="d-btn d-btn-primary d-btn-sm" on:click={addShadow}>
   Add a shadow
  </button>
 </div>

 {#each shadows as shadow, i (i)}
  <div>
   <h1>
    Shadow {i + 1}
   </h1>
   <input
    type="checkbox"
    checked={shadow.active}
    class="d-checkbox d-checkbox-sm"
    id={`active-${i}`}
    on:change={() => (shadow.active = !shadow.active)}
   />
   <label for={`active-${i}`}>Active</label>
   <input
    type="checkbox"
    checked={shadow.inset}
    class="d-checkbox d-checkbox-sm"
    id={`inset-${i}`}
    on:change={() => (shadow.inset = !shadow.inset)}
   />
   <label for={`inset-${i}`}>Inset</label>

   <div class="mt-10">
    <div class="flex items-center justify-between">
     <p>Horizontal offset</p>
     <div class="flex items-center gap-1">
      <span class="text-green-500">{shadow.horizontalOffset}</span>
      <p>px</p>
     </div>
    </div>

    <input
     type="range"
     min="-100"
     max="100"
     value={shadow.horizontalOffset}
     class="range w-full"
     on:input={(e) =>
      (shadow.horizontalOffset = parseInt(e.currentTarget.value))}
    />
   </div>

   <div class="mt-10">
    <div class="flex items-center justify-between">
     <p>Vertical offset</p>
     <div class="flex items-center gap-1">
      <span class="text-green-500">{shadow.verticalOffset}</span>
      <p>px</p>
     </div>
    </div>

    <input
     type="range"
     min="-100"
     max="100"
     value={shadow.verticalOffset}
     class="range w-full"
     on:input={(e) => (shadow.verticalOffset = parseInt(e.currentTarget.value))}
    />
   </div>

   <div class="mt-10">
    <div class="flex items-center justify-between">
     <p>Blur radius</p>
     <div class="flex items-center gap-1">
      <span class="text-green-500">{shadow.blurRadius}</span>
      <p>px</p>
     </div>
    </div>

    <input
     type="range"
     min="0"
     max="100"
     value={shadow.blurRadius}
     class="range w-full"
     on:input={(e) => (shadow.blurRadius = parseInt(e.currentTarget.value))}
    />
   </div>

   <div class="mt-10">
    <div class="flex items-center justify-between">
     <p>Spread radius</p>
     <div class="flex items-center gap-1">
      <span class="text-green-500">{shadow.spreadRadius}</span>
      <p>px</p>
     </div>
    </div>

    <input
     type="range"
     min="-100"
     max="100"
     value={shadow.spreadRadius}
     class="range w-full"
     on:input={(e) => (shadow.spreadRadius = parseInt(e.currentTarget.value))}
    />
   </div>

   <p class="mt-4">Color</p>
   <input
    type="text"
    class="d-input d-input-bordered w-full"
    value={shadow.color}
    on:input={(e) => (shadow.color = e.currentTarget.value)}
   />
  </div>
 {/each}
</aside>

<style>
 aside {
  height: calc(100vh - 5rem);
 }

 aside::-webkit-scrollbar-track {
  background-color: #f5f5f5;
 }

 aside::-webkit-scrollbar {
  width: 2px;
  background-color: #f5f5f5;
 }

 aside::-webkit-scrollbar-thumb {
  background-color: #575757;
 }
</style>
