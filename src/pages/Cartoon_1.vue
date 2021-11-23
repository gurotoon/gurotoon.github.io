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
    <button @click="go_7" class="btn" v-show="image_5_5_show" id="btn_5" alt="btn_5"></button>
    <button @click="goback_5" class="btn" v-show="image_5_5_show" id="btn_7" alt="btn_7"></button>

    <transition name="fade">
      <img @click="go_8" class="img_full" v-show="image_7_1_show" id="cartoon_7_img1" alt="cartoon1_back" src="../assets/images/background/7컷_수정.jpg">
    </transition>

    <transition name="fade">
      <img @click="showImage_8_2" class="img_full" v-show="image_8_1_show" id="cartoon_8_img1" alt="cartoon1_back" src="../assets/images/background/3화_8(1).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_8_3" class="img_full" v-show="image_8_2_show" id="cartoon_8_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_8(2).png">
    </transition>
    <transition name="fade">
      <img @click="go_9" class="img_full" v-show="image_8_3_show" id="cartoon_8_img3" alt="cartoon1_back" src="../assets/images/scripts/3화_8(3).png">
    </transition>

    <transition name="fade">
      <img @click="showImage_9_2" class="img_full" v-show="image_9_1_show" id="cartoon_9_img1" alt="cartoon1_back" src="../assets/images/background/9_배경.jpeg">
    </transition>
    <transition name="fade">
      <img @click="showImage_9_3" class="img_full" v-show="image_9_2_show" id="cartoon_9_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_9(1).png">
    </transition>
    <transition name="fade">
      <img @click="showImage_9_4" class="img_full" v-show="image_9_3_show" id="cartoon_9_img3" alt="cartoon1_back" src="../assets/images/scripts/3화_9(2).png">
    </transition>
    <transition name="fade">
      <img @click="go_10" class="img_full" v-show="image_9_4_show" id="cartoon_9_img4" alt="cartoon1_back" src="../assets/images/scripts/3화_9(3).png">
    </transition>

    <transition name="fade">
      <img @click="showImage_10_2" class="img_full" v-show="image_10_1_show" id="cartoon_10_img1" alt="cartoon1_back" src="../assets/images/background/3화_10(1).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_10_3" class="img_full" v-show="image_10_2_show" id="cartoon_10_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_10(2)_수정.png">
    </transition>
    <transition name="fade">
      <img @click="showImage_10_4" class="img_full" v-show="image_10_3_show" id="cartoon_10_img3" alt="cartoon1_back" src="../assets/images/scripts/3화_10(3)_수정.png">
    </transition>
    <transition name="fade">
      <img @click="showImage_10_5" class="img_full" v-show="image_10_4_show" id="cartoon_10_img4" alt="cartoon1_back" src="../assets/images/scripts/3화_10(4)_수정.png">
    </transition>
    <transition name="fade">
      <img @click="showImage_10_6" class="img_full" v-show="image_10_5_show" id="cartoon_10_img5" alt="cartoon1_back" src="../assets/images/scripts/3화_10(5)_수정.png">
    </transition>
    <transition name="fade">
      <img @click="go_11" class="img_full" v-show="image_10_6_show" id="cartoon_10_img6" alt="cartoon1_back" src="../assets/images/scripts/3화_10(6)_수정.png">
    </transition>

    <transition name="fade">
      <img @click="showImage_11_2" class="img_full" v-show="image_11_1_show" id="cartoon_11_img1" alt="cartoon1_back" src="../assets/images/background/3화_11(1).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" v-show="image_11_2_show" id="cartoon_11_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_11(2).png">
    </transition>
    <img class="img_full" v-show="image_11_2_show_btn" id="cartoon_11_img3" alt="cartoon1_back" src="../assets/images/scripts/11컷_추가이미지.png">
    <button @click="go_12" class="btn" v-show="image_11_2_show" id="btn_12" alt="btn_12"></button>

    <transition name="fade">
      <img @click="showImage_12_2" class="img_full" v-show="image_12_1_show" id="cartoon_12_img1" alt="cartoon1_back" src="../assets/images/background/3화_12(1).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_12_3" class="img_full" v-show="image_12_2_show" id="cartoon_12_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_12(2).png">
    </transition>
    <transition name="fade">
      <img @click="showImage_12_4" class="img_full" v-show="image_12_3_show" id="cartoon_12_img3" alt="cartoon1_back" src="../assets/images/scripts/3화_12(3).png">
    </transition>
    <transition name="fade">
      <img @click="go_13" class="img_full" v-show="image_12_4_show" id="cartoon_12_img4" alt="cartoon1_back" src="../assets/images/scripts/3화_12(4).png">
    </transition>

    <transition name="fade">
      <img @click="showImage_13_2" class="img_full" v-show="image_13_1_show" id="cartoon_13_img1" alt="cartoon1_back" src="../assets/images/background/3화_13(1).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_13_3" class="img_full" v-show="image_13_2_show" id="cartoon_13_img2" alt="cartoon1_back" src="../assets/images/background/3화_13(2).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_13_4" class="img_full" v-show="image_13_3_show" id="cartoon_13_img3" alt="cartoon1_back" src="../assets/images/background/3화_13(3).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_13_5" class="img_full" v-show="image_13_4_show" id="cartoon_13_img4" alt="cartoon1_back" src="../assets/images/background/3화_13(4).jpg">
    </transition>
    <transition name="fade">
      <img @click="showImage_13_6" class="img_full" v-show="image_13_5_show" id="cartoon_13_img5" alt="cartoon1_back" src="../assets/images/background/3화_13(5).jpg">
    </transition>
    <transition name="fade">
      <img class="img_full" v-show="image_13_6_show" id="cartoon_13_img6" alt="cartoon1_back" src="../assets/images/background/3화_13(6).jpg">
    </transition>
    <button @click="go_13_1" class="btn" v-show="image_13_6_show" id="btn_13_1" alt="btn_13_1"></button>
    <button @click="go_13_2" class="btn" v-show="image_13_6_show" id="btn_13_2" alt="btn_13_2"></button>

    <transition name="fade">
      <img @click="showImage_13_1_2" class="img_full" v-show="image_13_1_1_show" id="cartoon_13_1_img1" alt="cartoon1_back" src="../assets/images/background/3화_13-1(1).jpg">
    </transition>
    <transition name="fade">
      <img @click="go_14" class="img_full" v-show="image_13_1_2_show" id="cartoon_13_1_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_13-1(2).png">
    </transition>

    <transition name="fade">
      <img @click="showImage_13_2_2" class="img_full" v-show="image_13_2_1_show" id="cartoon_13_2_img1" alt="cartoon1_back" src="../assets/images/background/3화_13-1(1).jpg">
    </transition>
    <transition name="fade">
      <img @click="go_14" class="img_full" v-show="image_13_2_2_show" id="cartoon_13_2_img2" alt="cartoon1_back" src="../assets/images/scripts/3화_13-2.png">
    </transition>

    <transition name="fades">
      <img @click="go_15" v-show="image_14_1_show" class="img_full" id="cartoon_14_img1" alt="cartoon1_back" src="../assets/images/background/3화_14.jpg">
    </transition>


    <audio id="background_1" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EB%B0%B0%EA%B2%BD1.mp3"></audio>
    <audio id="background_1_2" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EB%B0%B0%EA%B2%BD1.mp3"></audio>
    <audio id="walk_sound" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EB%B0%9C%EA%B1%B8%EC%9D%8C_short.mp3"></audio>
    <audio id="alarm_sound" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EB%9D%A0%EB%A7%81.mp3"></audio>
    <audio id="kakao_sound" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%86%A1+%EC%B1%84%ED%8C%85%EC%9D%8C.mp3"></audio>
    <audio id="kakao_sound_2" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%86%A1+%EC%B1%84%ED%8C%85%EC%9D%8C.mp3"></audio>
    <audio id="kakao_sound_3" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%ED%86%A1+%EC%B1%84%ED%8C%85%EC%9D%8C.mp3"></audio>

    <audio id="noise_sound" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EC%86%8C%EC%9D%8C.mp3"></audio>
    <audio id="koong_sound" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EC%BF%B5%EC%86%8C%EB%A6%AC.mp3"></audio>
    <audio id="dal_sound" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EB%8B%AC%EA%B7%B8%EB%9D%BD%EC%86%8C%EB%A6%AC.mp3"></audio>

  </div>
</template>

<script>
import router from '@/router'


export default {
  name: "Cartoon_1",
  methods: {
    fadeIn(element){
      let audio = document.getElementById(element);
      audio.play()
      audio.volume = 0
      let fadein = setInterval(
          function() {
            if (audio.volume < 0.95) {
              audio.volume = audio.volume + 0.05;
            }
            else {
              clearInterval(fadein);
            }
          }, this.interval);
    },
    fadeOut(element){
      let audio = document.getElementById(element);

      setTimeout(() => audio.pause(), 800)
      let fadeout = setInterval(
          function() {
            let audio = document.getElementById(element);
            if (audio.volume > 0.1) {
              audio.volume = audio.volume - 0.1;
            }
            else {
              audio.volume = 0
              audio.pause()
              clearInterval(fadeout);
            }
          }, this.interval);
    },

    showImage2() {
      let audio = document.getElementById("alarm_sound");
      audio.play()

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
      // let audio = document.getElementById("background_1");
      // audio.pause()

      this.fadeOut("background_1")
      this.fadeIn("noise_sound")
      this.image_4_1_show = false
      this.image_4_2_show = false
      setTimeout(() => {
        this.image_5_1_show = true
      }, 200)
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
      let audio = document.getElementById("walk_sound");
      audio.play()
      this.return_page_show = false
      this.image_5_5_show = false
      this.return_page_show = true
      setTimeout(() => {this.return_page_show = false}, 2000)
    },
    go_7(){
      this.fadeOut("noise_sound")
      this.fadeIn("background_1_2")
      this.image_5_1_show = false
      this.image_5_5_show = false
      let audio = document.getElementById("dal_sound");
      audio.play()
      setTimeout(() => {this.image_7_1_show = true}, 200)
    },

    go_8(){
      this.image_7_1_show = false
      setTimeout(() => {this.image_8_1_show = true}, 200)
    },

    showImage_8_2(){
      this.image_8_2_show = true
    },
    showImage_8_3(){
      this.image_8_3_show = true
    },
    go_9(){
      this.image_8_1_show = false
      this.image_8_2_show = false
      this.image_8_3_show = false
      setTimeout(() => {this.image_9_1_show = true}, 200)
    },

    showImage_9_2(){
      this.image_9_2_show = true
    },
    showImage_9_3(){
      this.image_9_2_show = false
      this.image_9_3_show = true
    },
    showImage_9_4(){
      this.image_9_4_show = true
    },
    go_10(){
      this.image_9_1_show = false
      this.image_9_3_show = false
      this.image_9_4_show = false
      setTimeout(() => {this.image_10_1_show = true}, 200)
    },

    showImage_10_2(){
      this.image_10_2_show = true
    },
    showImage_10_3(){
      this.image_10_3_show = true
    },
    showImage_10_4(){
      this.image_10_4_show = true
    },
    showImage_10_5(){
      this.image_10_5_show = true
    },
    showImage_10_6(){
      this.image_10_6_show = true
    },
    go_11(){
      this.image_10_1_show = false
      this.image_10_2_show = false
      this.image_10_3_show = false
      this.image_10_4_show = false
      this.image_10_5_show = false
      this.image_10_6_show = false
      setTimeout(() => {this.image_11_1_show = true}, 200)
    },

    showImage_11_2(){
      this.image_11_2_show = true
      this.btn_interval =  setInterval(() => {this.image_11_2_show_btn = !this.image_11_2_show_btn}, 350)
    },
    go_12(){
      this.image_11_1_show = false
      this.image_11_2_show = false
      clearInterval(this.btn_interval)
      this.image_11_2_show_btn = false
      setTimeout(() => {this.image_12_1_show = true}, 200)
    },

    showImage_12_2(){
      let audio = document.getElementById("kakao_sound");
      audio.play()
      this.image_12_2_show = true
    },
    showImage_12_3(){
      let audio = document.getElementById("kakao_sound_2");
      audio.play()
      this.image_12_3_show = true
    },
    showImage_12_4(){
      let audio = document.getElementById("kakao_sound_3");
      audio.play()
      this.image_12_4_show = true
    },
    go_13(){
      this.image_12_1_show = false
      this.image_12_2_show = false
      this.image_12_3_show = false
      this.image_12_4_show = false
      setTimeout(() => {this.image_13_1_show = true}, 200)
    },

    showImage_13_2(){
      this.image_13_2_show = true
    },
    showImage_13_3(){
      this.image_13_3_show = true
    },
    showImage_13_4(){
      this.image_13_4_show = true
    },
    showImage_13_5(){
      this.image_13_5_show = true
    },
    showImage_13_6(){
      this.image_13_1_show = false
      this.image_13_2_show = false
      this.image_13_3_show = false
      this.image_13_4_show = false
      this.image_13_5_show = false
      this.image_13_6_show = true
    },
    go_13_1(){
      this.image_13_6_show = false
      setTimeout(() => {this.image_13_1_1_show = true}, 200)
    },
    go_13_2(){
      this.image_13_6_show = false
      setTimeout(() => {this.image_13_2_1_show = true}, 200)
    },

    showImage_13_1_2(){
      this.image_13_1_2_show = true
    },
    showImage_13_2_2(){
      this.image_13_2_2_show = true
    },
    go_14(){
      this.image_13_1_1_show = false
      this.image_13_1_2_show = false
      this.image_13_2_1_show = false
      this.image_13_2_2_show = false
      setTimeout(() => {this.image_14_1_show = true}, 200)
      let audio = document.getElementById("koong_sound");
      audio.play()
    },

    go_15(){
      this.fadeOut("background_1")
      setTimeout(() => {router.replace("/14")}, 500)
    }


  },
  data() {
    return {
      btn_interval: null,

      vol: 0.2,
      interval: 200,

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

      image_7_1_show:false,

      image_8_1_show: false,
      image_8_2_show: false,
      image_8_3_show: false,

      image_9_1_show: false,
      image_9_2_show: false,
      image_9_3_show: false,
      image_9_4_show: false,

      image_10_1_show:false,
      image_10_2_show:false,
      image_10_3_show:false,
      image_10_4_show:false,
      image_10_5_show:false,
      image_10_6_show:false,

      image_11_1_show:false,
      image_11_2_show:false,
      image_11_2_show_btn: false,

      image_12_1_show:false,
      image_12_2_show:false,
      image_12_3_show:false,
      image_12_4_show:false,

      image_13_1_show:false,
      image_13_2_show:false,
      image_13_3_show:false,
      image_13_4_show:false,
      image_13_5_show:false,
      image_13_6_show:false,

      image_13_1_1_show:false,
      image_13_1_2_show:false,

      image_13_2_1_show:false,
      image_13_2_2_show:false,

      image_14_1_show: false,

    }
  },
  mounted() {
    setTimeout(() => this.image_1_1_show = true, 500)
    setTimeout(() => this.image_1_2_show = true, 1000)
    this.fadeIn("background_1")
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

#cartoon_8_img1 {
  z-index: 80;
}

#cartoon_8_img2 {
  z-index: 81;
}

#cartoon_8_img3 {
  z-index: 82;
}

#cartoon_9_img1 {
  z-index: 90;
}
#cartoon_9_img2 {
  z-index: 91;
}
#cartoon_9_img3 {
  z-index: 92;
}
#cartoon_9_img4 {
  z-index: 93;
}

#cartoon_10_img1 {
  z-index: 100;
}
#cartoon_10_img2 {
  z-index: 101;
}
#cartoon_10_img3 {
  z-index: 102;
}
#cartoon_10_img4 {
  z-index: 103;
}
#cartoon_10_img5 {
  z-index: 104;
}
#cartoon_10_img6 {
  z-index: 105;
}

#cartoon_11_img1 {
  z-index: 110;
}
#cartoon_11_img2 {
  z-index: 111;
}
#cartoon_11_img3 {
  z-index: 112;
}


#btn_12 {
  position: absolute;
  width: 40vh;
  height: 11%;
  top: 78%;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
}

#btn_13_1 {
  position: absolute;
  width: 100%;
  height: 10%;
  top: 36%;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
}

#btn_13_2 {
  position: absolute;
  width: 100%;
  height: 10%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
}


</style>