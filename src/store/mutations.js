import {SET_BANNERS,SET_PLAYLIST,SET_CURRENTINDEX,SET_FULLSCREEN,GET_PRIVATEFM} from './mutation-types'
export default {
  [SET_FULLSCREEN](state,fullscreen) {
    state.fullscreen = fullscreen
  },
  [SET_PLAYLIST](state,playlist) {
    state.playList = playlist
  },
  [SET_CURRENTINDEX](state,currentIndex) {
    state.currentIndex = currentIndex
  },
  [SET_BANNERS](state,{banners}) {
    state.banners = banners
  },
  [GET_PRIVATEFM](state,{privateFm}) {
    state.privateFm = privateFm
  }
}
