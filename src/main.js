import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from "vue-analytics";
import router from './router'
import VueKakaoSdk from 'vue-kakao-sdk'
import VueHead from "vue-head";

import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VueAnalytics, {
  id: 'UA-209669899-1',
  router
})

const apiKey = '7c5082e78920d40539efce8db5b36c27'
Vue.use(VueKakaoSdk, { apiKey }) // apiKey 를 반드시 입력해줘야한다.

Vue.use(VueHead)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

