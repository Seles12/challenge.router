<template>
  <div class="app">
    <heater></heater>

    <router-view></router-view>
    <barra></barra>
  </div>
</template>

<script>
import heater from "./componente/header.vue";
import barra from "./componente/footer.vue";

export default {
  components: { heater, barra },
};
</script>
<style>
.app {
  display: grid;
  min-height: 100vh;
  gap: 1.5rem;
  grid-template-rows:
    auto
    1fr
    auto;
  background: linear-gradient(to right, #01050f, #49a7c1);
}
</style>
