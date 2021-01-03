import {
  SET_BANNERS,
  SET_PLAYLIST,
  SET_CURRENTINDEX,
  SET_FULLSCREEN,
  GET_PRIVATEFM,
  SET_PLAYING_STATUS,
  GET_COMMENT_NUM,
  SAVE_USER_INFO
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
  [SET_PLAYING_STATUS](state,playing) {
    state.playing = playing
  },
  [GET_COMMENT_NUM](state,{totalCount}) {
    state.totalCount = totalCount
  },
  [SAVE_USER_INFO](state,{userInfo}) {
    state.user = userInfo
  }
}
