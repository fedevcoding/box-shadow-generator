<script lang="ts">
 import "./app.css";
 import Header from "./components/Header.svelte";
 import LeftSidebar from "./components/LeftSidebar.svelte";
 import type { Shadow } from "./types";

 const shadows: Shadow[] = [];
</script>

<section class="bg-gray-900 text-white h-screen">
 <Header {shadows} />
 <LeftSidebar {shadows} />
</section>
