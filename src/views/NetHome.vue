<template>
  <div class="net-home-wrap">
    <div class="search">
      <span @click="toggleSetting" class="iconfont iconliebiao"></span>
      <div @click="showSearch" class="search-input">
        <span class="iconfont iconsousuo"></span>
        <span>en</span>
      </div>
      <span class="iconfont icontinggeshiqu40x40"></span>
    </div>
    <base-scroll :data="recommednList" class="net-home">
      <div class="net-home-content">
        <div class="swiper-container">
          <div class="swiper-content">
            <van-swipe class="my-swipe" indicator-color="white">
              <van-swipe-item :key="item.bannerId" v-for="(item) in swiper">
                <img class="swip-item-img" width="100%" :src="item.pic" alt="">
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <base-scroll :scroll-x='scrollX' class="net-nav-wrap">
          <ul class="nav-content">
            <router-link to="/recommend" tag="li" class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/day-recommend.gif" alt="">
              </div>
              <p class="text">每日推荐</p>
            </router-link>
            <li class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/private-fm.gif" alt="">
              </div>
              <p class="text">私人FM</p>
            </li>
            <router-link tag="li" to="/songslist" class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/song-list.gif" alt="">
              </div>
              <p class="text">歌单</p>
            </router-link>
            <router-link tag="li" to="/rank" class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/rank.gif" alt="">
              </div>
              <p class="text">排行榜</p>
            </router-link>
            <li class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/live-play.gif" alt="">
              </div>
              <p class="text">直播</p>
            </li>
            <li class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/num-album.gif" alt="">
              </div>
              <p class="text">数字专辑</p>
            </li>
            <li class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/sing-chat.gif" alt="">
              </div>
              <p class="text">唱聊</p>
            </li>
            <li class="nav-item">
              <div class="nav-icon">
                <img class="img" src="../assets/game-zone.gif" alt="">
              </div>
              <p class="text">游戏专区</p>
            </li>
          </ul>
        </base-scroll>
        <base-section :recommend-list="recommednList" title="推荐歌单"></base-section>
        <base-divder></base-divder>
        <div class="private-custom-made">
          <div class="custom-made-title">
            <h3 class="title">私人定制</h3>
            <div class="refresh">
              <span class="iconfont iconrefresh"></span>歌声里藏着故事
            </div>
          </div>
          <div class="play-muisc">
            <span class="iconfont iconbofang4"></span>播放
          </div>
          <div class="private-song-wrap">
            <div class="private-song-content">
              <van-swipe class="my-swipe" indicator-color="white">
                <van-swipe-item>
                  <ul class="private-song-list">
                    <li :key="item.id" v-for="(item) in privateMusic.slice(0,3)" class="item">
                      <div class="cover">
                        <img class="cover-imgage" :src="item.picUrl" alt="">
                      </div>
                      <div class="desc">
                        <div class="name">
                          <span class="text">{{item.name}}</span><span class="horizontal">-</span>{{item.singer}}
                        </div>
                        <div class="lyric-overview">
                          <span class="quality"></span>我曾以为我会永远守护在她身旁
                        </div>
                      </div>
                    </li>
                  </ul>
                </van-swipe-item>
                <van-swipe-item>
                  <ul class="private-song-list">
                    <li :key="item.id" v-for="(item) in privateMusic.slice(3,6)" class="item">
                      <div class="cover">
                        <img class="cover-imgage" :src="item.picUrl" alt="">
                      </div>
                      <div class="desc">
                        <div class="name">
                          <span class="text">{{item.name}}</span><span class="horizontal">-</span>{{item.singer}}
                        </div>
                        <div class="lyric-overview">
                          <span class="quality"></span>我曾以为我会永远守护在她身旁
                        </div>
                      </div>
                    </li>
                  </ul>
                </van-swipe-item>
                <van-swipe-item>
                  <ul class="private-song-list">
                    <li :key="item.id" v-for="(item) in privateMusic.slice(6,9)" class="item">
                      <div class="cover">
                        <img class="cover-imgage" :src="item.picUrl" alt="">
                      </div>
                      <div class="desc">
                        <div class="name">
                          <span class="text">{{item.name}}</span><span class="horizontal">-</span>{{item.singer}}
                        </div>
                        <div class="lyric-overview">
                          <span class="quality"></span>我曾以为我会永远守护在她身旁
                        </div>
                      </div>
                    </li>
                  </ul>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </base-scroll>
    <slider-bar @toggle="toggleSetting" :isShowSetting="isShowSetting"></slider-bar>
    <search-input @close="close" :is-show-search="isShowSearch"></search-input>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseScroll from '../components/BaseScroll'
import BaseSection from "../components/BaseSection";
import BaseDivder from "../components/BaseDivder";
import SearchInput from "../components/SearchInput";
import SliderBar from "../components/SliderBar";
import {getHomeSwiper,getRecommendList,getPrivateMusic} from '../api/index.js'
import {createSong} from '../common/js/song'
export default {
  name: 'NetHome',
  components:{
    BaseScroll,
    BaseSection,
    BaseDivder,
    SearchInput,
    SliderBar
  },
  created() {
    this._getSwiper()
    this._getRecommedList()
    this._getPrivateMusic()
  },
  data() {
    return {
      scrollX:true,
      isShowSetting:false,
      isShowSearch:false,
      swiper:[],
      recommednList:[],
      privateMusic:[]
    }
  },
  methods:{
    async _getSwiper() {
      const res =await getHomeSwiper()
      if(res.code===200) {
        this.swiper = res.banners
      }
    },
    async _getRecommedList() {
      const res =await getRecommendList()
      if(res.code===200) {
        this.recommednList = res.result
      }
    },
    _createSong(res) {
      let result = []
      res.forEach((item) => {
        result.push(createSong(item))
      })
      return result
    },
    async _getPrivateMusic() {
      const res = await getPrivateMusic()
      if(res.code===200) {
        this.privateMusic = this._createSong(res.result)
      }
    },
    toggleSetting() {
      this.isShowSetting = !this.isShowSetting
    },
    showSearch() {
      this.isShowSearch = true
    },
    close() {
      this.isShowSearch = false
    }
  }
}
</script>
<style lang="less" scoped>
.net-home-wrap {
  width: 100%;
  height: 100%;
  .search {
    display: flex;
    padding: 16px 24px 28px 24px;
    align-items: center;
    background-color: #eae8e6;
    color:#2d2d2d;
    .iconliebiao {
      font-size: 28px;
    }
    .search-input {
      height: 53px;
      flex: 1;
      margin: 0 24px;
      background-color: #fcfcfc;
      border-radius: 25px;
      display: flex;
      align-items: center;
      padding-left: 23px;
      font-size: 14px;
      color: #989898;
      .iconsousuo {
        font-size: 30px;
        margin-right: 6px;
      }
    }
    .icontinggeshiqu40x40 {
      font-size: 28px;
    }
  }
  .net-home {
    overflow: hidden;
    position: fixed;
    top: 97px;
    bottom: 0;
    width: 100%;
    .net-home-content {
      .swiper-container {
        background-color: #eae8e6;
        .swiper-content {
          padding: 0 24px 0 24px;
          .my-swipe {
            width: 100%;
            overflow: hidden;
            border-radius: 5px;
            .van-swipe-item {
              color: #fff;
              font-size: 20px;
              text-align: center;
              display: inline-block;
              border-radius: 5px;
              overflow: hidden;
              .swip-item-img {
                width: 100%;
                height: 200px;
                border-radius: 5px;
              }
            }
          }
        }
      }
      .net-nav-wrap {
        padding: 24px 0 24px 0;
        margin-left: 24px;
        margin-right: 24px;
        background-color: #fff;
        .nav-content {
          display: flex;
          width: 754px;
          .nav-item {
            margin-right:30px;
            text-align: center;
            &:last-child {
              margin-right: 0;
            }
            .nav-icon {
              width: 68px;
              height: 68px;
              background-color:#fef2f1;
              border-radius: 50%;
              margin-bottom: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              .img {
                width: 33px;
                height: 33px;
              }
            }
            .text {
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
      .private-custom-made {
        margin: 0 24px 0 24px;
        padding-top: 38px;
        position: relative;
        .custom-made-title {
          .title {
            font-size: 16px;
            margin-bottom: 10px;
            color: rgb(179,179,179);
          }
          .refresh {
            font-size: 26px;
            font-weight: 600;
            color: rgb(51,51,51);
            .iconrefresh {
              font-size: 26px;
              margin-right: 11px;
            }
          }
        }
        .play-muisc {
          position: absolute;
          top: 58px;
          right: 0;
          width: 85px;
          height: 37px;
          border: 1px solid rgb(230,230,230);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(51,51,51);
          font-size: 18px;
          .iconbofang4 {
            margin-right: 5px;
          }
        }
        .private-song-wrap {
          padding: 23px 0;
          .private-song-content {
            .my-swipe {
              .van-swipe-item {
                .private-song-list {
                  .item {
                    display: flex;
                    width: 468px;
                    margin-bottom: 8px;
                    &:last-child {
                      margin-bottom: 0;
                    }
                    .cover {
                      width: 76px;
                      height: 76px;
                      margin-right: 15px;
                      flex: 0 0 76px;
                      .cover-imgage {
                        width: 100%;
                        height: 100%;
                        border-radius: 7px;
                      }
                    }
                    .desc {
                      flex: 1;
                      border-bottom: 1px solid rgb(230,230,230);
                      &:last-child {
                        border-bottom: 0;
                      }
                      .name {
                        font-size: 16px;
                        display: flex;
                        align-items: center;
                        color: rgb(153,153,153);
                        margin-top: 15px;
                        margin-bottom: 15px;
                        .text {
                          font-size: 22px;
                          color: rgb(51,51,51);
                        }
                        .horizontal {
                          margin: 0 5px;
                        }
                      }
                      .lyric-overview {
                        padding-bottom: 18px;
                        font-size: 18px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}



.net-home {
  /deep/ .van-swipe__indicator {
    width: 12px;
    height: 3px;
    border-radius:1px;
  }
}




</style>

