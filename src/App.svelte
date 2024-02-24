<script lang="ts">
 import "./app.css";
 import Center from "./components/Center.svelte";
 import Header from "./components/Header.svelte";
 import LeftSidebar from "./components/LeftSidebar.svelte";
 import RightSidebar from "./components/RightSidebar.svelte";
 import type { BoxProperties, Shadow } from "./types";

 let shadows: Shadow[] = [];
 let boxProperties: BoxProperties = {
  canvasColor: "rgb(17 24 39)",
  borderColor: "transparent",
  borderRadius: "2rem",
  backgroundColor: "white",
  height: "20rem",
  width: "20rem",
 };
</script>

<section class="bg-gray-900 text-white h-screen">
 <Header {shadows} />
 <div class="flex">
  <LeftSidebar {shadows} />
  <Center bind:boxProperties />
  <RightSidebar {shadows} bind:boxProperties />
 </div>
</section>
