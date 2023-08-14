<template>
  <div>
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
