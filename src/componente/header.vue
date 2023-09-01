<template>
  <div class="header">
    <button class="btn" @click="irParaInicio">Home</button> |
    <button class="btn" @click="IrParaabout">Gallery</button> |
    <button class="btn" @click="IrParaservices">WEEK ABOUT</button>
  </div>
</template>
<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push("/");
      this.$router.push({ path: "/home" });
    },
    IrParaabout() {
      this.$router.push({ path: "/gallery" });
    },
    IrParaservices() {
      this.$router.push({ path: "/about" });
    },
  },
};
</script>
<style>
.header {
  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  justify-content: end;
  align-items: center;
}
.btn {
  color: rgb(5, 36, 129);

  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid royalblue;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;
}

.btn:hover {
  color: white;
}

.btn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0%;
  top: 0;
  left: -40px;
  transform: skewX(45deg);
  background-color: royalblue;
  z-index: -1;
  transition: all 1s;
}

.btn:hover::before {
  width: 160%;
}
</style>
