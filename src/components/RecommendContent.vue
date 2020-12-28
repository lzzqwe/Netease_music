<template>
  <div class="recommend-content-wrap">
    <div :style="backgroundStyle" class="nav-bar-wrap">
      <nav-bar :bar-title="barTitle"></nav-bar>
    </div>
    <base-sticky :style="paddingStyle" v-show="showPlay"></base-sticky>
    <transition name="van-slide-up">
      <div v-show="showPlay" class="backgroud"></div>
    </transition>
    <base-scroll :data="list" :probe-type="probeType" :listen-scroll="listenScroll" @onscroll="scroll" class="day-recommend-wrap">
      <div>
        <div :style="opacityStyle" class="day-recommend">
          <div class="date">
            <div class="title">
              <span class="large">22</span>/
              <span class="small">12</span>
            </div>
            <div class="history-recommend">
              <span>历史日推</span>
              <span class="iconfont iconVIP-"></span>
            </div>
          </div>
        </div>
        <div class="recommend-content">
          <base-sticky v-show="isShow"></base-sticky>
          <ul class="play-list">
            <li :key="item.id" class="play-item" v-for="(item) in list">
              <div class="Thumbnails">
                <img class="icon-img" :src="item.picUrl" alt="">
              </div>
              <div class="text">
                <div class="content">
                  <h1 class="name">{{item.name}}</h1>
                  <div class="desc">
                    <span class="iconfont icondujia"></span>
                    <span class="iconfont iconsq"></span>
                    <span>{{item.singer}}-{{item.name}}</span>
                  </div>
                </div>
                <div class="play-icon">
                  <span class="iconfont iconbofang6"></span>
                  <span class="iconfont iconsandian"></span>
                </div>
              </div>
            </li>
          </ul>
          <net-loading v-show="!this.list.length"></net-loading>
        </div>
      </div>
    </base-scroll>
  </div>
</template>

<script>
  import {getDayRecommend} from '../api/index.js'
  import {createSong} from '../common/js/song'
  import BaseScroll from "./BaseScroll";
  import BaseSticky from "./BaseSticky";
  import NavBar from "./NavBar";
  import NetLoading from "./NetLoading";
  export default {
    name: "RecommendContent",
    components:{
      NavBar,
      BaseScroll,
      BaseSticky,
      NetLoading
    },
    data() {
      return {
        list:[],
        showPlay:false,
        listenScroll:true,
        probeType:3,
        barTitle:'',
        isShow:true,
        opacityStyle:{
          opacity: 1
        },
        backgroundStyle:{
          backgroundColor:''
        },
        paddingStyle:{
          padding:'24px'
        }
      }
    },
    created() {
      this._getDayRecommend()
    },
    methods:{
      async _getDayRecommend() {
        const res = await getDayRecommend()
        if(res.code===200) {
          this.list = this._createSong(res.data.dailySongs)
        }
      },
      _createSong (list) {
        const result= []
        list.forEach((item) => {
          result.push(createSong({id:item.id,picUrl:item.al.picUrl,duration:item.dt,singer:item.ar[0].name,name:item.name}))
        })
        return result
      },
      scroll(pos) {
        // console.log(pos.y)
        let top = Math.abs(pos.y)
        let opacity = 0
        let backgroundColor ='#ffffff'
        console.log(top)
        if(top >= 186) {
          this.opacityStyle = { opacity }
          this.barTitle='每日推荐'
          this.isShow = false
          this.showPlay= true
          this.backgroundStyle = {backgroundColor}
        } else {
          opacity=1
          backgroundColor=''
          this.opacityStyle = { opacity }
          this.barTitle=''
          this.isShow = true
          this.showPlay= false
          this.backgroundStyle = {backgroundColor}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommend-content-wrap {
    position: fixed;
    top:0;
    bottom: 0;
    width: 100%;
    .nav-bar-wrap {
      position: fixed;
      top:32px;
      left: 24px;
      right: 24px;
      z-index:15;
      overflow: hidden;
    }
    .backgroud {
      height: 32px;
      background-color: #ffffff;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 15;
    }
    .day-recommend-wrap {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      .day-recommend {
        height: 300px;
        box-sizing: border-box;
        padding: 32px 24px 0 24px;
        background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4229497013,2367969643&fm=26&gp=0.jpg");
        background-size: 540px 300px;
        background-repeat: no-repeat;
        color: rgb(233,255,255);
        transition: all 0.5s;
        .date {
          margin-top: 123px;
          .title {
            font-size: 20px;
            .large {
              font-size: 38px;
            }
          }
          .history-recommend {
            margin-top: 15px;
            width: 140px;
            height: 37px;
            font-size: 18px;
            background-color: rgb(252,228,223);
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgb(49,47,45);
            border-radius: 15px;
            .iconVIP- {
              margin-left: 5px;
            }
          }
        }
      }
      .recommend-content {
        padding: 0 24px;
        .play-all {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0 22px 0;
          position: sticky;
          top: 114px;
          .play {
            font-size: 23px;
            color: rgb(51,51,51);
            .iconbofang7 {
              font-size: 30px;
              margin-right: 23px;
              background-color: rgb(255,64,49);
              color: rgb(255,255,255);
              border-radius: 50%;
            }
          }
          .iconquanxuan {
            color: rgb(51,51,51);
            font-size: 30px;
          }
        }
        .play-list {
          margin-top: 14px;
          .play-item {
            display: flex;
            margin-bottom: 30px;
            &:last-child {
              margin-bottom: 0;
            }
            .Thumbnails {
              width: 61px;
              height: 61px;
              flex: 0 0 61px;
              .icon-img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
              }
            }
            .text {
              flex: 1;
              display: flex;
              justify-content: space-between;
              .content {
                margin-left: 15px;
                .name {
                  font-size: 20px;
                  margin-top: 6px;
                  margin-bottom: 14px;
                }
                .desc {
                  font-size: 16px;
                  color: rgb(128,128,128);
                  .icondujia {
                    margin-right: 5px;
                    color: rgb(246,162,159);
                  }
                  .iconsq {
                    color: rgb(225,113,71);
                  }
                }
              }
              .play-icon {
                .iconbofang6 {
                  font-size: 27px;
                  margin-right: 34px;
                  color: rgb(179,179,179);
                }
                .iconsandian {
                  font-size: 27px;
                  color: rgb(179,179,179);
                }
              }
            }
          }
        }
      }
    }

  }
</style>
