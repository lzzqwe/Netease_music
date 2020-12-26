import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/NetHome'
import SongsList from "../views/SongsList";
import SongListDetail from "../views/SongListDetail";
import DailylRecommend from "../views/DailylRecommend";
import NetLogin from "../views/NetLogin";
import NetRank from "../views/NetRank";
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},{
  path:'/rank',
  name:'NetRank',
  component: NetRank
},
  {
  path:'/songslist',
  name:'SongsList',
  component: SongsList,
  children:[
    {
      path:':id',
      component: SongListDetail
    }
  ]
},{
  path:'/recommend',
  name:'DailylRecommend',
  component: DailylRecommend
},{
  path:'/login',
  name:'NetLogin',
  component:NetLogin
}
]



const router = new VueRouter({
    routes
})


// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.netToken
//   if(to.path==='/login' || to.path==='/') {
//     next()
//   } else {
//     isLogin ? next() : next('/login')
//   }
// })

export default router
