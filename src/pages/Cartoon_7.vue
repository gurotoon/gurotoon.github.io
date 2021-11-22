<template>
  <div>
    <img @click="next" class="img_full" id="cartoon1_back" alt="cartoon1_back" src="../assets/images/background/3화_7.jpg">
  </div>
</template>

<script>
import router from "@/router";


export default {
  name: "Cartoon_7",
  methods: {
    next() {
      router.replace('/8')
    },
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
  position: absolute;
  alignment: center;
  height: 100%;
}
</style>