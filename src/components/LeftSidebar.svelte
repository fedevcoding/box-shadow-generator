<script lang="ts">
 import type { Shadow } from "../types";

 export let shadows: Shadow[];
</script>

<aside class="w-[20vw] border-r-2 border-r-gray-500">
 <div class="flex items-center justify-center gap-6 py-6">
  <h1>Customizs Shadows</h1>
  <div class="d-btn d-btn-primary d-btn-sm">Add a shadow</div>
 </div>
</aside>

<style>
 aside {
  height: calc(100vh - 5rem);
 }
</style>
