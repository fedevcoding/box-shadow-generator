<script lang="ts">
 import img from "../assets/logo.svg";
 import githubLogo from "../assets/github.svg";
 import type { Shadow } from "../types";

 export let shadows: Shadow[];
</script>

<header
 class="h-20 border-b-gray-500 border-b-2 flex items-center justify-between px-12"
>
 <div class="flex items-center gap-6">
  <img src={img} alt="log" class="w-10" />
  <h1 class="text-2xl font-semibold">Css box shadow</h1>
 </div>

 <div class="flex items-center gap-8">
  <a href="https://github.com/fedevcoding/box-shadow-generator" target="_blank">
   <img src={githubLogo} alt="github" class="w-8" />
  </a>
  <button class="d-btn d-btn-primary">Get code</button>
 </div>
</header>
