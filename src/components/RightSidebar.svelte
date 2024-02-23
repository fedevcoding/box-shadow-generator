<script lang="ts">
 import type { Shadow } from "../types";

 export let shadows: Shadow[];
</script>

<aside class="w-[20vw] border-l-2 border-l-gray-500">
 <div class="px-4 py-6">
  <h1 class="text-xl mb-8">Box properties</h1>

  <p>Canvas color</p>
  <input type="text" class="d-input d-input-bordered w-full max-w-xs" />

  <p class="mt-4">Background color</p>
  <input type="text" class="d-input d-input-bordered w-full max-w-xs" />

  <p class="mt-4">Border color</p>
  <input type="text" class="d-input d-input-bordered w-full max-w-xs" />
 </div>
</aside>

<style>
 aside {
  height: calc(100vh - 5rem);
 }
</style>
