<template>
  <div>
    <div id="wpac-rating"></div>
    <a href="https://widgetpack.com" class="wpac-cr">Star Rating WIDGET PACK</a>
    <h2>본 컨텐츠가<br>직장 내 괴롭힘을 이해하는 데<br>도움이 되었나요?</h2>
    <div id="buttons">
      <button @click="next">네,도움이 되었어요:)</button>
      <button>아뇨,별로 안됐어요:(</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Cartoon_23",
  methods: {
    move() {
      router.push({path: '/24'});
    }
  },
  head: {
    script: [
      {
        type: 'text/javascript',
        src: 'https://embed.widgetpack.com/widget.js',
        async: true,
      }
    ]
  },
  beforeCreate() {
    let wpac_init = window.wpac_init || [];
    wpac_init.push({widget: 'Rating', id: 32504});
    (function() {
      if ('WIDGETPACK_LOADED' in window) return;
      window.WIDGETPACK_LOADED = true;
    })();
  }
}
</script>

<style scoped>
  h2 {
    text-align: center;
    position: absolute;
    top: 25vh;
    width: 100vw;
  }
  #buttons {
    position: absolute;
    bottom: 10vh;
    width: 100vw;
    height: 30vh;
  }
  button {
    width: 60%;
    height: 10vh;
    margin: 1vh;
    border-radius: 15px;
  }
  #wpac-rating{
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 10vh;
  }
</style>