import {getHomeSwiper, getPrivateFm,getSongComment} from '../api/index.js'
import {SET_BANNERS,
  SET_CURRENTINDEX,
  SET_PLAYLIST,
  SET_FULLSCREEN,
  GET_PRIVATEFM,
  SET_PLAYINGSTATUS,
  GET_COMMENT_NUM
} from './mutation-types'

export default {
  async set_banners({commit}) {
     const res = await getHomeSwiper()
     commit(SET_BANNERS,{banners:res.banners})
  },
  async select_play({commit,getters},{playlist,index}) {
    console.log(getters)
    console.log(playlist,index)
    commit(SET_PLAYLIST,playlist)
    commit(SET_CURRENTINDEX,index)
    commit(SET_PLAYINGSTATUS,true)
    commit(SET_FULLSCREEN,true)
    const res = await getSongComment(getters.currentSong.id)
    commit(GET_COMMENT_NUM,{totalCount:res.total})
  },
  async get_privateFm({commit}) {
    const res = await getPrivateFm()
    console.log(res)
    commit(GET_PRIVATEFM,{privateFm:res.data})
  }
}
