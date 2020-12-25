import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/NetHome'
import SongsList from "../views/SongsList";
import SongListDetail from "../views/SongListDetail";
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},{
  path:'/songslist',
  name:'SongsList',
  component: SongsList,
  children:[
    {
      path:':id',
      component: SongListDetail
    }
  ]
}]

const router = new VueRouter({
    routes
})

export default router
