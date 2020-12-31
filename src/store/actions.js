import {getHomeSwiper, getPrivateFm} from '../api/index.js'
import {SET_BANNERS, SET_CURRENTINDEX, SET_PLAYLIST,SET_FULLSCREEN,GET_PRIVATEFM} from './mutation-types'

export default {
  async set_banners({commit}) {
     const res = await getHomeSwiper()
     commit(SET_BANNERS,{banners:res.banners})
  },
  select_play({commit},{playlist,index}) {
    console.log(playlist,index)
    commit(SET_PLAYLIST,playlist)
    commit(SET_CURRENTINDEX,index)
    commit(SET_FULLSCREEN,true)
  },
  async get_privateFm({commit}) {
    const res = await getPrivateFm()
    console.log(res)
    commit(GET_PRIVATEFM,{privateFm:res.data})
  }
}
