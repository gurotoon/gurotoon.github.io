<template>
  <div>
    <img @click="click" src="https://testbkim.s3.ap-northeast-2.amazonaws.com/pink.jpg">
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Cartoon_1",
  methods: {
    click() {
      router.push({path: '/23'});
    }
  }
}
</script>

<style scoped>
img {
  height: 100vh;
}
</style>