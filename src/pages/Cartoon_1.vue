<template>
  <div>
    <img class="img_full" id="cartoon1_back" alt="cartoon1_back" src="https://testbkim.s3.ap-northeast-2.amazonaws.com/cartoon1_back.jpeg">
    <transition name="fade">
      <img class="img_full" @click="click" v-show="image1_show" id="cartoon1_img1" alt="cartoon1_img1" src="https://testbkim.s3.ap-northeast-2.amazonaws.com/cartoon1_img1.png">
    </transition>
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
  },
  data() {
    return {
      image1_show: false,
    }
  },
  mounted() {
    setTimeout(() => this.image1_show = true, 2000)
  }
}
</script>

<style scoped>

#cartoon1_back {
  z-index: 0;
}

#cartoon1_img1 {
  z-index: 1;
}

</style>