<template>
  <div>
    <transition name="fade">
      <div id="return_page" v-show="return_page_show"></div>
    </transition>
    <transition name="fade">
      <img @click="showImage_5_2" class="img_full" id="cartoon1_back" alt="cartoon1_back" src="../assets/images/background/3화_5(1).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_5_3" v-show="image_5_2_show" id="cartoon1_img1" alt="cartoon1_img1" src="../assets/images/scripts/3화_5(2).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_5_4" v-show="image_5_3_show" id="cartoon1_img2" alt="cartoon1_img2" src="../assets/images/scripts/3화_5(3).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_5_5" v-show="image_5_4_show" id="cartoon1_img3" alt="cartoon1_img3" src="../assets/images/scripts/3화_5(4).png">
    </transition>
    <transition name="fade">
      <img class="img_full" v-show="image_5_5_show" id="cartoon1_img4" alt="cartoon1_img4" src="../assets/images/scripts/3화_6.png">
    </transition>
    <button @click="goback_5" class="btn" v-show="image_5_5_show" id="btn_5" alt="btn_5"></button>
    <button @click="go_7" class="btn" v-show="image_5_5_show" id="btn_7" alt="btn_7"></button>
  </div>
</template>

<script>
import router from "@/router";


export default {
  name: "Cartoon_5",
  methods: {
    showImage_5_2(){
      this.image1_show = true
    },
    showImage_5_3() {
      this.image2_show = true
    },
    showImage_5_4() {
      this.image3_show = true
    },
    showImage4() {
      this.image1_show = false
      this.image2_show = false
      this.image3_show = false
      this.image4_show = true
    },
    goback_5() {
      this.return_page_show = false
      this.image4_show = false
      this.return_page_show = true
      setTimeout(() => {this.return_page_show = false}, 2000)
    },
    go_7(){
      router.replace('/7')
    }
  },
  data() {
    return {
      image1_show: false,
      image2_show: false,
      image3_show: false,
      image4_show: false,
    }
  },
  mounted() {
    window.addEventListener('load',function(){
      setTimeout(scrollTo,0,0,1);
    },false);
  },
  components: {
  }
}
</script>

<style scoped>

#cartoon1_back {
  position: absolute;

  z-index: 0;
}

#cartoon1_img1 {
  position: absolute;
  z-index: 1;
}

#cartoon1_img2 {
  position: absolute;
  z-index: 2;
}

#cartoon1_img3 {
  position: absolute;
  z-index: 3;
}

#cartoon1_img4 {
  position: absolute;
  z-index: 3;
}

.img_full {
  position: absolute;
  alignment: center;
  height: 100%;
}

.btn {
  position: absolute;
  z-index: 6;
  background-color: transparent;
  border: none;
}

#btn_5 {
  position: absolute;
  width: 42vh;
  height: 10%;
  top: 37%;
  left: 50%;
  transform: translateX(-50%);
}

#btn_7 {
  position: absolute;
  width: 42vh;
  height: 10%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

#return_page {
  position: absolute;
  z-index: 20;
  background: black;
  width: 100%;
  height: 100%;
}


</style>