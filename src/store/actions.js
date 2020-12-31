import {getHomeSwiper, getPrivateFm,getSongComment} from '../api/index.js'
import {createSong} from '../common/js/song'
import {SET_BANNERS,
  SET_CURRENTINDEX,
  SET_PLAYLIST,
  SET_FULLSCREEN,
  GET_PRIVATEFM,
  SET_PLAYING_STATUS,
  GET_COMMENT_NUM
} from './mutation-types'
export default {
  async set_banners({commit}) {
     const res = await getHomeSwiper()
     commit(SET_BANNERS,{banners:res.banners})
  },
  async select_play({commit,getters},{playlist,index}) {
    commit(SET_PLAYLIST,playlist)
    commit(SET_CURRENTINDEX,index)
    commit(SET_PLAYING_STATUS,true)
    commit(SET_FULLSCREEN,true)
    const res = await getSongComment(getters.currentSong.id)
    commit(GET_COMMENT_NUM,{totalCount:res.total})
  },
  async get_privateFm({dispatch,commit,state}) {
    const res = await getPrivateFm()
    let result = []
    res.data.forEach((item) => {
      result.push(createSong({
        id:item.id,
        picUrl:item.album.picUrl,
        duration:item.duration,
        singer:item.artists[0].name,
        name:item.name
      }))
    })
    commit(GET_PRIVATEFM,{privateFm:result})
    await dispatch('select_play',{playlist:state.privateFm,index:0})
  }
}
