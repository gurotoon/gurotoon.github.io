<template>
  <div>
    <img @click="showCaption" class="img_full" id="cartoon1_back" alt="cartoon2_back" src="https://gurotoon.s3.ap-northeast-2.amazonaws.com/images/2/3%ED%99%94_2_%EC%88%98%EC%A0%95(1).jpg">
    <transition name="fade">
      <img class="img_full" @click="next" v-show="image1_show" id="cartoon2_img1" alt="cartoon2_img1" src="https://gurotoon.s3.ap-northeast-2.amazonaws.com/images/2/3%ED%99%94_2_%EC%88%98%EC%A0%95(3).jpg">
    </transition>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Cartoon_1",
  methods: {
    showCaption() {
      this.image1_show = true
    },
    next() {
      router.push({path: '/3'});
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

#cartoon2_back {
  z-index: 0;
}

#cartoon2_img1 {
  z-index: 1;
}

</style>