import ajax from './ajax.js'
//基础地质
let BASE
const env = process.env.NODE_ENV
if (env === 'development') {
  BASE = 'http://127.0.0.1:3000'
} else if (env === 'production') {
  BASE = ''
}
/*
* 1.获取移动端首页的轮播图
*/
export const getHomeSwiper = () => {
  return ajax(BASE + '/banner', { type: 1 })
}
/*
* 2.推荐歌单 /personalized?limit=10
* */
export const getRecommendList = () => {
  return ajax(BASE + '/personalized', {limit:10})
}
/*
* 3.私人定制 获取最新的音乐  /personalized/newsong
* */
export const getPrivateMusic = () => {
  return ajax(BASE + '/personalized/newsong')
}
/*
* 4.歌单标签 就是歌单分类
* */
export const getSongsTags = () => {
  return ajax( BASE + '/playlist/catlist')
}
/*
* 5.歌单列表
* */
export const getSongList = (cat,limit,offset) => {
  return ajax( BASE +'/top/playlist', {cat,limit,offset})
}
/*
* 6.热搜列表详细
* */
export const getHotSearchDetail = () => {
  return ajax( BASE + '/search/hot/detail')
}
/*
* 7.搜索建议
* */
export const getSearchSuggest = (keywords,type=mobile) => {
  return ajax( BASE +'/search/suggest',{keywords,type})
}
/*
* 8.登录
* */
export const getLogin = (phone,password) => {
  return ajax( BASE + '/login/cellphone', {phone,password},'POST')
}
/*
* 9.每日推荐
* */
export const getDayRecommend = () => {
  return ajax( BASE + '/recommend/songs')
}
/*
* 10.获取歌单详情
* */
export const getSongListDetail = (id) => {
  return ajax( BASE + '/playlist/detail',{id})
}
/*
* 11.获取歌单的所有歌曲
* */
export const getAllSongs = (tracks) => {
  return ajax( BASE + `/song/detail?ids=${tracks}`)
}
/*
* 12.获取首页的圆形图标
* */
export const getHomeCircleIcon = () => {
  return ajax( BASE + '/homepage/dragon/ball')
}
/*
* 13.获取歌单评论
* */
export const getCommentPlaylist = (id,offset,limit) => {
  return ajax( BASE + '/comment/playlist',{id,offset,limit})
}
/*
* 14.获取私人FM
* */
export const getPrivateFm = () => {
  return ajax( BASE + '/personal_fm')
}
/*
 *15.获取歌曲评论
 * */
export const getSongComment = (id,offset,limit) => {
  return ajax(BASE + '/comment/music',{id,offset,limit})
}
/*
* 16.判断音乐是否可以用
* */
export const distinguishMusicUrl = (id) => {
  return ajax( BASE + '/check/music',{id})
}
/*
* 17.获取歌词
* */
export const getlyric = (id) => {
  return ajax( BASE + '/lyric',{id})
}
/*
* 18.搜索
* */
export const getSearch = (keywords,type=1018) => {
  return ajax( BASE + '/search',{keywords,type})
}
/*
* 19.收藏/取消收藏歌单
* */
export const handleCollect = (t,id) => {
  return ajax( BASE + '/playlist/subscribe',{t,id})
}
/*
* 20.获取用户的歌单
* */
export const getUserPlaylist = (uid) => {
  return ajax( BASE + '/user/playlist',{uid})
}
