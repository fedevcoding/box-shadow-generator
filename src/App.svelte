<script lang="ts">
 import "./app.css";
 import Header from "./components/Header.svelte";
 import type { Shadow } from "./types";

 const shadows: Shadow[] = [];
</script>

<section>
 <Header {shadows} />
</section>
