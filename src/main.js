import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import './common/css/reset.css'
import './common/font/iconfont.css'
import router from './router'
import store from './store'
import 'vant/lib/dialog/style/less';
import 'vant/lib/tabs/style/less'
import 'vant/lib/search/style/less'
import { Swipe,
  SwipeItem,
  Col,
  Row,Tab,
  Tabs,
  Image as VanImage,
  Form,Field,
  Button,Dialog,
  NoticeBar,
  Switch,
  PullRefresh,
  List,
  Toast,
  Cell,
  CellGroup,
  Lazyload,
  Search
} from 'vant';

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
  .use(NoticeBar)
  .use(Switch)
  .use(PullRefresh)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(Toast)
  .use(Search)
  .use(Lazyload,{
    lazyComponent: true,
  })

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
