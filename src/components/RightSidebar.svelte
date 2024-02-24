<script lang="ts">
 import type { BoxProperties } from "../types";

 export let boxProperties: BoxProperties;
</script>

<aside class="w-[20vw] border-l-2 border-l-gray-500">
 <div class="px-4 py-6">
  <h1 class="text-xl mb-8">Box properties</h1>

  <p>Canvas color</p>
  <input
   type="text"
   class="d-input d-input-bordered w-full"
   value={boxProperties.canvasColor}
   on:input={(e) => (boxProperties.canvasColor = e.currentTarget.value)}
  />

  <p class="mt-4">Background color</p>
  <input
   type="text"
   class="d-input d-input-bordered w-full"
   value={boxProperties.backgroundColor}
   on:input={(e) => (boxProperties.backgroundColor = e.currentTarget.value)}
  />
  <p class="mt-4">Border color</p>
  <input
   type="text"
   class="d-input d-input-bordered w-full"
   value={boxProperties.borderColor}
   on:input={(e) => (boxProperties.borderColor = e.currentTarget.value)}
  />

  <div class="mt-10">
   <div class="flex items-center justify-between">
    <p>Border radius</p>
    <div class="flex items-center gap-1">
     <span class="text-green-500">{boxProperties.borderRadius}</span>
     <p>rem</p>
    </div>
   </div>

   <input
    type="range"
    min="0"
    max="20"
    value={boxProperties.borderRadius}
    on:input={(e) =>
     (boxProperties.borderRadius = parseInt(e.currentTarget.value))}
    class="range w-full"
   />
  </div>
  <div class="mt-10">
   <div class="flex items-center justify-between">
    <p>Height</p>
    <div class="flex items-center gap-1">
     <span class="text-green-500">{boxProperties.height}</span>
     <p>rem</p>
    </div>
   </div>

   <input
    type="range"
    min="0"
    max="40"
    value={boxProperties.height}
    class="range w-full"
    on:input={(e) => (boxProperties.height = parseInt(e.currentTarget.value))}
   />
  </div>
  <div class="mt-10">
   <div class="flex items-center justify-between">
    <p>Width</p>
    <div class="flex items-center gap-1">
     <span class="text-green-500">{boxProperties.width}</span>
     <p>rem</p>
    </div>
   </div>

   <input
    type="range"
    min="0"
    max="40"
    value={boxProperties.width}
    class="range w-full"
    on:input={(e) => (boxProperties.width = parseInt(e.currentTarget.value))}
   />
  </div>
 </div>
</aside>

<style>
 aside {
  height: calc(100vh - 5rem);
 }
</style>
