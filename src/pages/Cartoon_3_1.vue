<template>
  <div>
    <cube-spin id="cube"></cube-spin>
    <img @click="showImage1" class="img_full" id="cartoon1_back" alt="cartoon1_back" src="../assets/images/3-1/3화_3-1(1).jpg">
    <transition name="fade">
      <img class="img_full" @click="showImage2" v-show="image1_show" id="cartoon1_img1" alt="cartoon1_img1" src="../assets/images/3-1/3화_3-1(2).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage3" v-show="image2_show" id="cartoon1_img2" alt="cartoon1_img2" src="../assets/images/3-1/3화_3-1(3).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage4" v-show="image3_show" id="cartoon1_img3" alt="cartoon1_img3" src="../assets/images/3-1/3화_3-1(4).jpg">
    </transition>
  </div>
</template>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/RotateSquare'
// import router from "@/router";


export default {
  name: "Cartoon_3_1",
  methods: {
    showImage1(){
      this.image1_show = true
    },
    showImage2() {
      this.image2_show = true
    },
    showImage3() {
      this.image3_show = true
    },
    showImage4() {
      //todo
    },
  },
  data() {
    return {
      image1_show: false,
      image2_show: false,
      image3_show: false,
      image4_show: false
    }
  },
  mounted() {
    window.addEventListener('load',function(){
      setTimeout(scrollTo,0,0,1);
    },false);
  },
  components: {
    CubeSpin
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

#cartoon1_img2 {
  z-index: 2;
}

#cartoon1_img3 {
  z-index: 3;
}

.img_full {
  alignment: center;
  height: 100%;
}

#cube {
  z-index: -1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>