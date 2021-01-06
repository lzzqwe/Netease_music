import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/NetHome'
import SongsList from "../views/SongsList";
import SongListDetail from "../views/SongListDetail";
import DailylRecommend from "../views/DailylRecommend";
import NetLogin from "../views/NetLogin";
import NetRank from "../views/NetRank";
import PersonalFm from "../views/PersonalFm";
import NetSearch from "../views/NetSearch";
import NetMe from "../views/NetMe";
import NetComment from "../views/NetComment";
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},{
  path:'/discovery/songrank',
  name:'NetRank',
  component: NetRank
},
  {
  path:'/playlistCollection',
  name:'SongsList',
  component: SongsList,
  children:[
    {
      path:':id',
      component: SongListDetail
    }
  ]
},{
  path:'/songrcmd',
  name:'DailylRecommend',
  component: DailylRecommend
},{
  path:'/login',
  name:'NetLogin',
  component:NetLogin
},{
    path:'/privatefm',
    name:'PersonalFm',
    component: PersonalFm
  },
  {
    path: '/search',
    name:'NetSearch',
    component: NetSearch,
    props:(route) => ({keyword:route.query.keyword})
  },
  {
    path: '/me',
    name:'NetMe',
    component: NetMe
  },
  {
    path: '/comment',
    name:'NetComment',
    component: NetComment
  }
]



const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
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
