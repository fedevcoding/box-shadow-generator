<script lang="ts">
 import { defaultShadow } from "../defaultvalues";
 import type { Shadow } from "../types";
 import caret from "../assets/caret-right.svg";

 export let shadows: Shadow[];

 function addShadow() {
  shadows.push({ ...defaultShadow });
  shadows = shadows;
 }

 function removeShadow(idx: number) {
  shadows = shadows.filter((_, i) => i != idx);
 }
</script>

<aside
 class="w-[100vw] xl:w-[20vw] border-r-2 border-r-gray-500 px-4 py-6 overflow-y-scroll xl:h-[calc(100vh-5rem)]"
>
 <div class="flex items-center justify-center gap-6 pb-6">
  <h1 class="font-bold">Customizs Shadows</h1>
  <button class="d-btn d-btn-primary d-btn-sm" on:click={addShadow}>
   Add a shadow
  </button>
 </div>

 {#each shadows as shadow, i (i)}
  <div>
   <button
    on:click={() => (shadow.collapse = !shadow.collapse)}
    class="w-full py-6"
   >
    <div class="flex items-center justify-between">
     <h1 class="font-semibold">
      Shadow {i + 1}
     </h1>
     <img
      src={caret}
      alt="caret"
      class="caret"
      id={shadow.collapse ? "collapse" : ""}
     />
    </div>
   </button>

   <div class="options-wrapper mb-16" id={shadow.collapse ? "collapse" : ""}>
    <div class="flex justify-between">
     <div class="flex gap-2 items-center">
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
     </div>

     <button
      class="d-btn d-btn-sm d-btn-error text-white"
      on:click={() => removeShadow(i)}>Remove</button
     >
    </div>

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
      on:input={(e) =>
       (shadow.verticalOffset = parseInt(e.currentTarget.value))}
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
  </div>
 {/each}
</aside>

<style>
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

 .caret {
  width: 20px;
  transform: rotate(90deg);
  transition: all 100ms linear;
 }
 .caret#collapse {
  transform: rotate(0);
 }

 .options-wrapper {
  display: block;
 }

 .options-wrapper#collapse {
  display: none;
 }
</style>
