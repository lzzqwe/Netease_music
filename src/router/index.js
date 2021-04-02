import Vue from 'vue';
import VueRouter from 'vue-router';
// import NetHome from "../views/NetHome";
// import SongList from "../components/SongList";
// import SongListDetail from "../views/SongListDetail";
// import DailylRecommend from "../views/DailylRecommend";
// import NetLogin from "../views/NetLogin";
// import NetRank from "../views/NetRank";
// import PersonalFm from "../views/PersonalFm";
// import NetSearch from "../views/NetSearch";
// import NetMe from "../views/NetMe";
// import NetComment from "../views/NetComment";
// import NetMv from "../views/NetMv";
// import NetTest from "../views/NetTest";
// import MvPlayer from "../views/MvPlayer";
const NetHome = (resolve) => {
    import('../views/NetHome.vue').then((moudle) => resolve(moudle));
}
const SongsList = (resolve) => {
    import('../views/NetList.vue').then((module) => resolve(module));
}
const SongListDetail = (resolve) => {
    import('../views/SongListDetail.vue').then((module) => resolve(module));
}
const DailylRecommend = (resolve) => {
    import('../views/DailylRecommend').then((module) => resolve(module));
}
const NetLogin = (resolve) => {
    import('../views/NetLogin').then((module) => resolve(module));
}
const NetRank = (resolve) => {
    import('../views/NetRank').then((module) => resolve(module));
}
const PersonalFm = (resolve) => {
    import('../views/PersonalFm').then((module) => resolve(module));
}
const NetSearch = (resolve) => {
    import('../views/NetSearch').then((module) => resolve(module));
}
const NetMe = (resolve) => {
    import('../views/NetMe').then((module) => resolve(module));
}
const NetComment = (resolve) => {
    import('../views/NetComment').then((module) => resolve(module));
}
const NetMv = (resolve) => {
    import('../views/NetMv').then((module) => resolve(module));
}
const MvPlayer = (resolve) => {
    import('../views/MvPlayer').then((module) => resolve(module));
}
Vue.use(VueRouter);
const routes = [{
    path: '/',
    name: 'NetHome',
    component: NetHome,
    meta: { keepAlive: false }
}, {
    path: '/rank',
    name: 'NetRank',
    component: NetRank,
    meta: { keepAlive: false },
    children: [{
        path: ':id',
        component: SongListDetail,
        meta: { keepAlive: false }
    }]
},
{
    path: '/playlistCollection',
    name: 'SongsList',
    component: SongsList,
    meta: { keepAlive: false },
    children: [{
        path: ':id',
        component: SongListDetail,
        meta: { keepAlive: false },
    }]
}, {
    path: '/songrcmd',
    name: 'DailylRecommend',
    component: DailylRecommend,
    meta: { keepAlive: false },
}, {
    path: '/login',
    name: 'NetLogin',
    component: NetLogin,
    meta: { keepAlive: false }
}, {
    path: '/privatefm',
    name: 'PersonalFm',
    component: PersonalFm,
    meta: { keepAlive: false },
},
{
    path: '/search',
    name: 'NetSearch',
    component: NetSearch,
    props: (route) => ({ keyword: route.query.keyword }),
    meta: { keepAlive: false },
},
{
    path: '/me',
    name: 'NetMe',
    component: NetMe,
    meta: { keepAlive: false },
},
{
    path: '/comment',
    name: 'NetComment',
    component: NetComment,
    meta: { keepAlive: false },
},
{
    path: '/mv',
    name: 'NetMv',
    component: NetMv,
    meta: { keepAlive: false },
    children: [{
        path: ':id',
        name: "MvPlayer",
        component: MvPlayer,
        meta: { keepAlive: false }
    }]
}
]
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err);
}


// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.netToken
//   if(to.path==='/login' || to.path==='/') {
//     next()
//   } else {
//     isLogin ? next() : next('/login')
//   }
// })
router.beforeEach((to, from, next) => {
    console.log(to, from)
    if (to.path === '/login' || to.path === '/') {
        next()
    } else {
        next()
    }
})
router.beforeResolve((to, from, next) => {
    console.log(to, from)
    next()
})
export default router
