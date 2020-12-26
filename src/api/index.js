import ajax from './ajax.js'
//基础地质
const BASE = 'http://localhost:3000'
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
