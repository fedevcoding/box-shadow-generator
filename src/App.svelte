<script lang="ts">
 import "./app.css";
 import Center from "./components/Center.svelte";
 import Header from "./components/Header.svelte";
 import LeftSidebar from "./components/LeftSidebar.svelte";
 import RightSidebar from "./components/RightSidebar.svelte";
 import { defaultBoxProperties, defaultShadow } from "./defaultvalues";
 import type { BoxProperties, Shadow } from "./types";

 let shadows: Shadow[] = [{ ...defaultShadow }];
 let boxProperties: BoxProperties = { ...defaultBoxProperties };
</script>

<section class="bg-gray-900 text-white h-screen">
 <Header {shadows} />
 <div class="block xl:flex">
  <LeftSidebar bind:shadows />
  <Center {shadows} {boxProperties} />
  <RightSidebar bind:boxProperties />
 </div>
</section>
