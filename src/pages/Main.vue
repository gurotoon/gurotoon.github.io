<template>
  <div @click="click"><h1>화면을 터치해주세요.3</h1></div>
</template>

<script>
import router from "@/router";

export default {
  name: "Main",
  methods: {
    click() {
      router.push({ path: '/1'});
    }
  },

}
</script>

<style scoped>
  div {
    height: 100vh;
    background: black;
  }
  h1 {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    white-space: nowrap;

  }
</style>