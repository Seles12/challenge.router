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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
