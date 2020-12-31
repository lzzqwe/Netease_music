import {
  SET_BANNERS,
  SET_PLAYLIST,
  SET_CURRENTINDEX,
  SET_FULLSCREEN,
  GET_PRIVATEFM,
  SET_PLAYINGSTATUS,
  GET_COMMENT_NUM
} from './mutation-types'
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
  },
  [SET_PLAYINGSTATUS](state,playing) {
    state.playing = playing
  },
  [GET_COMMENT_NUM](state,{totalCount}) {
    state.totalCount = totalCount
  }
}
