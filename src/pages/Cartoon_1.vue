<template>
  <div>

    <img class="img_full" v-show="image_1_1_show" id="cartoon1_back" alt="cartoon1_back" src="../assets/images/background/3화_2_수정(1).jpg">
    <transition name="fade">
      <img class="img_full" @click="showImage2" v-show="image_1_2_show" id="cartoon1_img1" alt="cartoon1_img1" src="../assets/images/scripts/3화_2수정(3).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage3" v-show="image_1_3_show" id="cartoon1_img2" alt="cartoon1_img2" src="../assets/images/scripts/3화_2수정(2).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage4" v-show="image_1_4_show" id="cartoon1_img3" alt="cartoon1_img3" src="../assets/images/scripts/3화_2수정(4).png">
    </transition>
    <transition name="fade">
      <img class="img_full" v-show="image_1_5_show" id="cartoon1_img4" alt="cartoon1_img4" src="../assets/images/scripts/3화_3.png">
    </transition>
    <button @click="go_3_1" class="btn" v-show="image_1_5_show" id="btn_3_1" alt="btn_3_1"></button>
    <button @click="go_3_2" class="btn" v-show="image_1_5_show" id="btn_3_2" alt="btn_3_2"></button>


    <transition name="fade">
      <img @click="showImage_3_1_2" class="img_full" v-show="image_3_1_1_show" id="cartoon_3_1_img1" alt="cartoon_3_1_img1" src="../assets/images/background/3화_3-1(1).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_3_1_3" v-show="image_3_1_2_show" id="cartoon_3_1_img2" alt="cartoon_3_1_img2" src="../assets/images/scripts/3화_3-1(2).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_3_1_4" v-show="image_3_1_3_show" id="cartoon_3_1_img3" alt="cartoon_3_1_img3" src="../assets/images/scripts/3화_3-1(3).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="go_4_from_3_1" v-show="image_3_1_4_show" id="cartoon_3_1_img4" alt="cartoon_3_1_img4" src="../assets/images/scripts/3화_3-1(4).png">
    </transition>


    <transition name="fade">
      <img @click="showImage_3_2_2" v-show="image_3_2_1_show" class="img_full" id="cartoon_3_2_img1" alt="cartoon_3_2_1" src="../assets/images/background/3화_2_수정(1).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_3_2_3" v-show="image_3_2_2_show" id="cartoon_3_2_img2" alt="cartoon_3_2_2" src="../assets/images/scripts/3화_3-2(1).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="go_4_from_3_2" v-show="image_3_2_3_show" id="cartoon_3_2_img3" alt="cartoon_3_2_3" src="../assets/images/scripts/3화_3-2(2).png">
    </transition>

    <transition name="fade">
      <img @click="showImage_4_2" v-show="image_4_1_show" class="img_full" id="cartoon_4_img1" alt="cartoon_4_img1" src="../assets/images/background/3화_4(1).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="go_5" v-show="image_4_2_show" id="cartoon_4_img2" alt="cartoon_4_img2" src="../assets/images/scripts/3화_4(2).png">
    </transition>

    <transition name="fade">
      <div id="return_page" v-show="return_page_show"></div>
    </transition>
    <transition name="fade">
      <img @click="showImage_5_2" v-show="image_5_1_show" class="img_full" id="cartoon_5_img1" alt="cartoon1_back" src="../assets/images/background/3화_5(1).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_5_3" v-show="image_5_2_show" id="cartoon_5_img2" alt="cartoon1_img1" src="../assets/images/scripts/3화_5(2).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_5_4" v-show="image_5_3_show" id="cartoon_5_img3" alt="cartoon1_img2" src="../assets/images/scripts/3화_5(3).png">
    </transition>
    <transition name="fade">
      <img class="img_full" @click="showImage_5_5" v-show="image_5_4_show" id="cartoon_5_img4" alt="cartoon1_img3" src="../assets/images/scripts/3화_5(4).png">
    </transition>
    <transition name="fade">
      <img class="img_full" v-show="image_5_5_show" id="cartoon_5_img5" alt="cartoon_5_img5" src="../assets/images/scripts/3화_6.png">
    </transition>
    <button @click="goback_5" class="btn" v-show="image_5_5_show" id="btn_5" alt="btn_5"></button>
    <button @click="go_7" class="btn" v-show="image_5_5_show" id="btn_7" alt="btn_7"></button>

  </div>
</template>

<script>
import router from '@/router'


export default {
  name: "Cartoon_1",
  methods: {
    showImage2() {
      this.image_1_3_show = true
      this.image_1_2_show = false
    },
    showImage3() {
      this.image_1_4_show = true
    },
    showImage4() {
      this.image_1_5_show = true
      this.image_1_4_show = false
      this.image_1_3_show = false
    },
    go_3_1(){
      this.image_1_5_show = false
      this.image_1_1_show = false
      setTimeout(() => {
        this.image_3_1_1_show = true
      }, 200)
    },
    go_3_2(){
      this.image_1_5_show = false
      this.image_1_1_show = false
      setTimeout(() => {
        this.image_3_2_1_show = true
      }, 200)
    },

    showImage_3_1_2(){
      this.image_3_1_2_show = true
    },
    showImage_3_1_3() {
      this.image_3_1_3_show = true
    },
    showImage_3_1_4() {
      this.image_3_1_4_show = true
    },
    go_4_from_3_1() {
      this.image_3_1_1_show = false
      this.image_3_1_2_show = false
      this.image_3_1_3_show = false
      this.image_3_1_4_show = false
      setTimeout(() => {
        this.image_4_1_show = true
      }, 200)
    },

    showImage_3_2_2(){
      this.image_3_2_2_show = true
    },
    showImage_3_2_3(){
      this.image_3_2_3_show = true
    },
    go_4_from_3_2() {
      this.image_3_2_1_show = false
      this.image_3_2_2_show = false
      this.image_3_2_3_show = false
      setTimeout(() => {
        this.image_4_1_show = true
      }, 200)
    },

    showImage_4_2(){
      this.image_4_2_show = true
    },
    go_5(){
      this.image_4_1_show = false
      this.image_4_2_show = false
      setTimeout(() => {
        this.image_5_1_show = true
      }, 200)
    },

    return_page_show(){
      //todo
    },
    showImage_5_2(){
      this.image_5_2_show = true
    },
    showImage_5_3(){
      this.image_5_3_show = true
    },
    showImage_5_4(){
      this.image_5_4_show = true
    },
    showImage_5_5(){
      this.image_5_2_show= false
      this.image_5_3_show= false
      this.image_5_4_show= false
      this.image_5_5_show = true
    },
    goback_5(){
      this.return_page_show = false
      this.image_5_5_show = false
      this.return_page_show = true
      setTimeout(() => {this.return_page_show = false}, 2000)
    },
    go_7(){
      //todo
    }

  },
  data() {
    return {
      image_1_1_show: false,
      image_1_2_show: false,
      image_1_3_show: false,
      image_1_4_show: false,
      image_1_5_show: false,

      image_3_1_1_show: false,
      image_3_1_2_show: false,
      image_3_1_3_show: false,
      image_3_1_4_show: false,

      image_3_2_1_show: false,
      image_3_2_2_show: false,
      image_3_2_3_show: false,

      image_4_1_show: false,
      image_4_2_show: false,

      image_5_1_show:false,
      image_5_2_show:false,
      image_5_3_show:false,
      image_5_4_show:false,
      image_5_5_show:false,
      return_page_show: false,

    }
  },
  mounted() {
    setTimeout(() => this.image_1_1_show = true, 500)
    setTimeout(() => this.image_1_2_show = true, 1000)
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

  z-index: 1;
}

#cartoon1_img1 {
  position: absolute;

  z-index: 2;
}

#cartoon1_img2 {
  position: absolute;

  z-index: 3;
}

#cartoon1_img3 {
  position: absolute;

  z-index: 4;
}

#cartoon1_img4 {
  z-index: 5;
}

.img_full {
  position: absolute;
  alignment: center;
  height: 100%;
}

.btn {
  z-index: 999;
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

#cartoon_3_1_img1 {
  z-index: 30;
}

#cartoon_3_1_img2 {
  z-index: 31;
}

#cartoon_3_1_img3 {
  z-index: 32;
}

#cartoon_3_1_img4 {
  z-index: 33;
}

#cartoon_3_2_img1 {
  z-index: 30;
}

#cartoon_3_2_img2 {
  z-index: 31;
}

#cartoon_3_2_img3 {
  z-index: 32;
}

#cartoon_4_img2 {
  z-index: 42;
}

#cartoon_4_img1 {
  z-index: 41;
}

#cartoon_5_img1 {
  z-index: 50;
}

#cartoon_5_img2 {
  z-index: 51;
}

#cartoon_5_img3 {
  z-index: 53;
}

#cartoon_5_img4 {
  z-index: 54;
}

#cartoon_5_img5 {
  z-index: 55;
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
  z-index: 998;
  background: black;
  width: 100%;
  height: 100%;
}


</style>