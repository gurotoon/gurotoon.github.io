<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>
    <audio id="background_2" src="https://gurotoon2021.s3.ap-northeast-2.amazonaws.com/%EB%B0%B0%EA%B2%BD2.mp3"></audio>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  mounted() {
    window.addEventListener('load',function(){
      setTimeout(scrollTo,0,0,1);
    },false);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
form,fieldset,input,textarea,p,blockquote,th,td {
  padding: 0;
  margin: 0;
}

.img_full {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.img_full_2{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fades-enter-active, .fades-leave-active {
  transition: opacity 1.1s;
}
.fades-enter, .fades-leave-to {
  opacity: 0;
}


</style>
