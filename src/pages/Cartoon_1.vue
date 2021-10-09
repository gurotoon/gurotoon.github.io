<template>
  <div>
    <img id="cartoon1_back" alt="cartoon1_back" src="https://testbkim.s3.ap-northeast-2.amazonaws.com/cartoon1_back.jpeg">\
    <img v-show="image1_show" id="cartoon1_img1" alt="cartoon1_img1" src="https://testbkim.s3.ap-northeast-2.amazonaws.com/cartoon1_img1.png">
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Cartoon_1",
  methods: {
    click() {
      router.push({path: '/24'});
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
img {

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
}
#cartoon1_back {
  z-index: 0;
}

#cartoon1_img1 {
  z-index: 1;
}

</style>