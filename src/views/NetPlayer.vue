<template>
   <div v-if="playList.length>0" class="net-player">
     <transition name="van-slide-up">
       <div v-show="$store.state.fullscreen" class="normal-player">
            <div :style="{backgroundImage:`url(${currentSong.picUrl})`}" class="background"></div>
            <div class="top">
              <span @click="hidePlayer" class="iconfont iconshouqi"></span>
              <div class="name">
                <van-notice-bar class="song-name" scrollable :text="currentSong.name" />
                <div class="singer">
                  <span class="text">{{currentSong.singer}}</span>
                  <span class="iconfont icongengduo1"></span>
                </div>
              </div>
              <span class="iconfont iconfenxiang"></span>
            </div>
            <div class="middle">
              <div class="inner-circle">
                <div class="album-img">
                  <img class="image" :src="currentSong.picUrl" alt="">
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="operator_1">
                <span class="iconfont iconshoucang"></span>
                <span class="iconfont icondibar-xiazai"></span>
                <span class="iconfont iconicon-test"></span>
                <span class="iconfont iconpinglun1"></span>
                <span class="iconfont iconsandian"></span>
              </div>
              <div class="progress">
                <span class="time">00:10</span>
                <div class="progress-bar">
                  <div class="progress-inner-bar"></div>
                  <div class="progress-circle"></div>
                </div>
                <span class="time">04:20</span>
              </div>
              <div class="operator_2">
                <span class="iconfont iconloop"></span>
                <span class="iconfont iconshangyiqu3"></span>
                <span class="iconfont iconbofang3"></span>
                <span class="iconfont iconxiayiqu1"></span>
                <span class="iconfont iconbofangliebiao"></span>
              </div>
            </div>
          </div>
     </transition>
     <audio ref="audio" :src="currentSong.url"></audio>
   </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    export default {
      name: "NetPlayer",
      computed:{
        ...mapGetters(['currentSong','playList'])
      },
      methods:{
        hidePlayer() {
          this.set_fullscreen(false)
        },
        ...mapMutations(['set_fullscreen'])
      },
      watch:{
        currentSong(newSong,oldSong) {
          if(!newSong.id) {
            return
          }
          this.$nextTick(() => {
            this.$refs.audio.play()
          })
        }
      }
    }
</script>

<style lang="less" scoped>
.net-player {
  .normal-player {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:10;
    .background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 50%;
      filter: blur(30px);
      transform-origin: center center;
      transform: scale(1.5);
      opacity: 1;
      z-index: -1;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      padding: 0 21px 0 27px;
      color: rgba(255,255,253);
      margin-top: 32px;
      .iconshouqi {
        font-size: 24px;
        width: 24px;
        flex: 0 0 24px;
      }
      .name {
        font-size: 0;
        flex: 1;
        .song-name {
          font-size: 24px;
          padding: 0 30px;
          margin: 0 auto;
        }
        .singer {
          margin-top: 9px;
          display: flex;
          justify-content: center;
          color: rgb(116,136,149);
          .text {
            font-size: 18px;
            margin-right: 7px;
          }
          .icongengduo1 {
            font-size: 18px;
          }
        }
      }
      .iconfenxiang {
        font-size: 30px;
        flex: 0 0 30px;
      }
    }
    .middle {
      position: fixed;
      top: 270px;
      left: 67px;
      right: 67px;
      height: 406px;
      border-radius: 50%;
      background-color: rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      .inner-circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-image: url("https://s3.music.126.net/mobile-new/img/disc-plus.png?b700b62e1971b351dcb8b8ce1c9ceea3=");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .album-img {
          width: 266px;
          height: 266px;
          z-index: 10;
          position: absolute;
          .image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
    .bottom {
      position: fixed;
      bottom: 31px;
      height: 192px;
      left: 30px;
      right: 30px;
      .operator_1{
        display: flex;
        justify-content: space-between;
        color: rgb(185,191,200);
        padding: 0 46px;
        align-items: center;
        .iconshoucang {
          font-size: 31px;
        }
        .icondibar-xiazai {
          font-size: 31px;
        }
        .iconicon-test {
          font-size: 31px;
        }
        .iconpinglun1 {
          font-size: 31px;
        }
        .iconsandian {
          font-size: 31px;
        }
      }
      .progress {
        display: flex;
        justify-content: space-between;
        color: rgb(185,191,200);
        margin-top: 37px;
        align-items: center;
        /*position: relative;*/
        .time {
          font-size: 10px;
          flex: 0 0 33px;
          width: 33px;
        }
        .progress-bar {
          flex: 1;
          height: 3px;
          background-color: rgb(94,105,125);
          margin: 0 17px;
          position: relative;
          .progress-circle {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color:rgb(254,254,254);
            position: absolute;
            bottom: -4.5px;
            left: 0;
          }
          .progress-inner-bar {
            height: 3px;
            top: 0;
            position: absolute;
            left: 0;
            background-color: red;
          }
        }
      }
      .operator_2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(185,191,200);
        padding: 0 46px;
        margin-top: 31px;
        .iconloop {
          font-size: 28px;
        }
        .iconshangyiqu3 {
          font-size: 28px;
        }
        .iconbofang3 {
          font-size: 76px;
        }
        .iconxiayiqu1 {
          font-size: 28px;
        }
        .iconbofangliebiao {
          font-size: 28px;
        }
      }
    }
  }
}
.net-player {
  /deep/ .van-notice-bar {
    background-color:transparent;
    color: rgb(254,254,254);
    text-align: center;
  }
}
</style>
