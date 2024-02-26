<script lang="ts">
 import img from "../assets/logo.svg";
 import githubLogo from "../assets/github.svg";
 import type { Shadow } from "../types";
 import { getBoxShadow } from "../utils";

 export let shadows: Shadow[];

 $: code = getBoxShadow(shadows);
 let status: "Copy" | "Copied!" = "Copy";

 function copy() {
  status = "Copied!";
  navigator.clipboard.writeText(`box-shadow: ${code};`);
  setTimeout(() => {
   status = "Copy";
  }, 1000);
 }

 const handleClick = () => {
  (document.getElementById("code-modal") as any).showModal();
 };
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

  <button class="d-btn d-btn-primary" on:click={handleClick}>Get code</button>
  <dialog id="code-modal" class="d-modal">
   <div class="d-modal-box w-[30vw] max-w-3xl">
    <h3 class="font-bold text-lg">Generated styles</h3>
    <p class="py-4">
     This is the CSS needed to generate the box shadows you see in the app.
    </p>

    <div class="mockup-code flex gap-4 items-center">
     <pre class="bg-gray-950 py-5 px-2 rounded-md overflow-x-scroll"><code
       >box-shadow: {code};</code
      ></pre>
     <button class="d-btn d-btn-secondary" on:click={copy}>{status}</button>
    </div>

    <div class="d-modal-action">
     <form method="dialog">
      <button class="d-btn d-btn-error">Close</button>
     </form>
    </div>
   </div>
  </dialog>
 </div>
</header>

<style>
 pre::-webkit-scrollbar-track {
  background-color: #f5f5f5;
 }

 pre::-webkit-scrollbar {
  height: 2px;
  background-color: #f5f5f5;
 }

 pre::-webkit-scrollbar-thumb {
  background-color: #575757;
 }
</style>
