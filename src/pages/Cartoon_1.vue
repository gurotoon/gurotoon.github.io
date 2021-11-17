<template>
  <div>
    <vue-load-image>
      <img class="img_full" id="cartoon1_back" alt="cartoon1_back" src="../assets/images/2/3화_2_수정(1).jpg">
      <transition name="fade">
        <img class="img_full" @click="showImage2" v-show="image1_show" id="cartoon1_img1" alt="cartoon1_img1" src="../assets/images/2/3화_2_수정(3).jpg">
      </transition>
      <transition name="fade">
        <img class="img_full" @click="showImage3" v-show="image2_show" id="cartoon1_img2" alt="cartoon1_img2" src="../assets/images/2/3화_2_수정(2).jpg">
      </transition>
      <transition name="fade">
        <img class="img_full" @click="showImage4" v-show="image3_show" id="cartoon1_img3" alt="cartoon1_img3" src="../assets/images/2/3화_2(2).jpg">
      </transition>
      <transition name="fade">
        <img class="img_full" v-show="image4_show" id="cartoon1_img4" alt="cartoon1_img4" src="../assets/images/3/3화_3.jpg">
      </transition>
      <button @click="go_3_1" class="btn" v-show="image4_show" id="btn_3_1" alt="btn_3_1"></button>
      <button @click="go_3_2" class="btn" v-show="image4_show" id="btn_3_2" alt="btn_3_2"></button>
    </vue-load-image>
  </div>
</template>

<script>
import router from "@/router";
import vueLoadImage from 'vue-load-image'


export default {
  name: "Cartoon_1",
  methods: {
    showImage2() {
      this.image2_show = true
    },
    showImage3() {
      this.image3_show = true
    },
    showImage4() {
      this.image4_show = true
    },
    go_3_1(){
      router.replace('/3_1')
    },
    go_3_2(){
      router.replace('/3_2')
    }
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
    setTimeout(() => this.image1_show = true, 2000)
    window.addEventListener('load',function(){
      setTimeout(scrollTo,0,0,1);
    },false);
  },
  components: {
    vueLoadImage
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

#cartoon1_img4 {
  z-index: 4;
}

.img_full {
  alignment: center;
  height: 100%;
}

.btn {
  z-index: 5;
  background-color: transparent;
  border: none;
}

#btn_3_1 {
  position: absolute;
  width: 42vh;
  height: 10%;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
}

#btn_3_2 {
  position: absolute;
  width: 42vh;
  height: 10%;
  top: 41%;
  left: 50%;
  transform: translateX(-50%);
}

</style>