import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = (resolve) => {
  import('../views/NetHome.vue').then((moudle) =>resolve(moudle))
}
const SongsList = (resolve) => {
  import('../views/NetList.vue').then((module) =>resolve(module))
}
const SongListDetail = (resolve) => {
  import('../views/SongListDetail.vue').then((module) =>resolve(module))
}
const DailylRecommend = (resolve) => {
  import('../views/DailylRecommend').then((module) =>resolve(module))
}
const NetLogin = (resolve) => {
  import('../views/NetLogin').then((module) =>resolve(module))
}
const NetRank = (resolve) => {
  import('../views/NetRank').then((module) =>resolve(module))
}
const PersonalFm = (resolve) => {
  import('../views/PersonalFm').then((module) =>resolve(module))
}
const NetSearch = (resolve) => {
  import('../views/NetSearch').then((module) =>resolve(module))
}
const NetMe = (resolve) => {
  import('../views/NetMe').then((module) =>resolve(module))
}
const NetComment = (resolve) => {
  import('../views/NetComment').then((module) =>resolve(module))
}
const NetMv = (resolve) => {
  import('../views/NetMv').then((module) =>resolve(module))
}

Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},{
  path:'/rank',
  name:'NetRank',
  component: NetRank,
  children: [
    {
      path:':id',
      component: SongListDetail
    }
  ]
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
  },
  {
    path: '/mv',
    name:'NetMv',
    component: NetMv
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
