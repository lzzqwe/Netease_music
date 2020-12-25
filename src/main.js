import Vue from 'vue'
import App from './App.vue'
import './common/css/reset.css'
import './common/font/iconfont.css'
import router from './router'
import store from './store'

import { Swipe, SwipeItem,Col, Row,Tab, Tabs} from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs);
Vue.use(Col);
Vue.use(Row);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
