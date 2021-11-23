<template>
  <div @click="click">
    <img class="img_full" id="main_img" alt="cartoon1_back" src="../assets/images/background/0컷배치예시.jpg">
  </div>
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