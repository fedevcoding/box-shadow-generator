<script lang="ts">
 import "./app.css";
 import Center from "./components/Center.svelte";
 import Header from "./components/Header.svelte";
 import LeftSidebar from "./components/LeftSidebar.svelte";
 import RightSidebar from "./components/RightSidebar.svelte";
 import type { Shadow } from "./types";

 const shadows: Shadow[] = [];
</script>

<section class="bg-gray-900 text-white h-screen">
 <Header {shadows} />
 <div class="flex">
  <LeftSidebar {shadows} />
  <Center />
  <RightSidebar {shadows} />
 </div>
</section>
