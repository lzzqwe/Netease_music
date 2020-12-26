import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import './common/css/reset.css'
import './common/font/iconfont.css'
import router from './router'
import store from './store'

import { Swipe, SwipeItem,Col, Row,Tab, Tabs,Image as VanImage,Form,Field,Button,Dialog } from 'vant';

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(VanImage)
  .use(Col)
  .use(Row)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(Dialog)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
