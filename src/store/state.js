
import {loadUserInfo} from '../common/js/cache'
export default {
  user:loadUserInfo(),  //页面刷新的时候会去localstorage读取数据
  fullscreen:false,
  currentIndex:-1,
  playList:[],
  banners:[],
  privateFm:[],
  playing:false,
  totalCount:0
}
