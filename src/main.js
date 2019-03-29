import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
const eventBus=new Vue();

require("swiper/dist/css/swiper.css");

import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper);
Vue.config.productionTip = false

Vue.use(Vant);
Vue.prototype.$eventBus=eventBus;

new Vue({
  router,
  render: h => h(App),
  
  
}).$mount('#app')
