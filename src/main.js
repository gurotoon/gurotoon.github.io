import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from "vue-analytics";
import router from './router'
import VueHead from "vue-head";
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);


import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VueAnalytics, {
  id: 'UA-209669899-1',
  router
})



Vue.use(VueHead)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


