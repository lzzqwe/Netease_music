<template>
   <div v-if="$store.state.playList.length>0" class="net-player">
     <transition name="van-slide-up">
       <div v-show="$store.state.fullscreen" class="normal-player">
            <div :style="{backgroundImage:`url(${currentSong.picUrl})`}" class="background">
            </div>
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
            <div :class="poleIcon" class="music-pole"></div>
            <div class="middle">
              <div class="inner-circle">
                <div class="album-img" :class="albumIcon">
                  <img class="image" :src="currentSong.picUrl" alt="">
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="operator_1">
                <span class="iconfont iconshoucang"></span>
                <span class="iconfont icondibar-xiazai"></span>
                <span class="iconfont iconicon-test"></span>
                <span class="iconfont iconpinglun1">
                  <span class="comment-count">{{totalCount}}</span>
                </span>
                <span class="iconfont iconsandian"></span>
              </div>
              <progress-bar
                @onPercentChange="onPercentChange"
                :percent="percent"
                :time="currentTime"
                :current-song="currentSong"
              ></progress-bar>
              <div class="operator_2">
                <span class="iconfont iconloop"></span>
                <span @click="prev" class="iconfont iconshangyiqu3"></span>
                <span @click="togglePlaying" :class="playIcon"></span>
                <span @click="next" class="iconfont iconxiayiqu1"></span>
                <span class="iconfont iconbofangliebiao"></span>
              </div>
            </div>
          </div>
     </transition>
     <transition name="van-slide-up">
       <div @click="showPlayer" v-show="!$store.state.fullscreen" class="mini-player">
         <div :class="albumIcon" class="mini-icon">
           <img class="image" :src="currentSong.picUrl" alt="">
         </div>
         <div class="text">
           <span>{{currentSong.name}}<span class="singer-name">-{{currentSong.singer}}</span> </span>
         </div>
         <div class="control">
           <span class="iconfont iconbofang3"></span>
         </div>
         <div class="control">
           <span class="iconfont iconliebiao"></span>
         </div>
       </div>
     </transition>
<!--     <net-comment :get-comment="getCommentPlaylist" :playlist="playlist" :id="id" v-if="isShow"></net-comment>-->
     <audio
       @error="error"
       @stalled="stalled"
       @timeupdate="timeupdate"
       ref="audio"
       @ended="end"
       :src="currentSong.url"></audio>
   </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    import ProgressBar from "../components/ProgressBar";
    export default {
      name: "NetPlayer",
      data() {
        return {
          currentTime:0,
          percent:0
        }
      },
      components:{
        ProgressBar
      },
      computed:{
        playIcon() {
          return this.playing? 'iconfont iconbofang3 ':'iconfont iconbofang2 rotate_pause'
        },
        albumIcon() {
          return this.playing? 'rotate':'rotate rotate_pause'
        },
        poleIcon() {
          return this.playing?'rateCls':'pase_rateCls'
        },
        ...mapGetters(['currentSong','currentIndex','playList','playing','totalCount'])
      },
      methods:{
        hidePlayer() {
          this.set_fullscreen(false)
        },
        showPlayer() {
          this.set_fullscreen(true)
        },
        onPercentChange(percent) {
          console.log(percent)
          this.$refs.audio.currentTime =percent*this.currentSong.duration
        },
        timeupdate(e) {
          this.currentTime = e.target.currentTime
          this.percent = e.target.currentTime/this.currentSong.duration
        },
        end() {
          this.next()
        },
        next() {
          let index = this.currentIndex+1
          if(index ===this.playList.length) {
            index =0
            this.set_currentIndex(index)
            return
          }
          this.set_currentIndex(index)
          console.log('next'+index)
        },
        prev() {
          let index = this.currentIndex-1
          if (index ===-1) {
            index=this.playList.length-1
            this.set_currentIndex(index)
            return
          }
          this.set_currentIndex(index)
        },
        /*
        * 事件 error 会在因为一些错误（如网络连接错误）导致无法加载资源的时候触发。
        * */
        error() {
          console.log('萨达萨达萨达')
        },
        stalled() {
          console.log('sdsdsd')
        },
        togglePlaying() {
          this.set_playing_status(!this.playing)
        },
        ...mapMutations(['set_playing_status','set_fullscreen','set_currentIndex'])
      },
      watch:{
        currentSong(newSong,oldSong) {
          console.log(newSong,oldSong)
          if(!newSong.id) {
            return
          }
          console.log(newSong)
          setTimeout(() => {
            this.$refs.audio.play()
          },30)

        },
        playing(newPlaying,oldValue) {
          this.$nextTick(() => {
            newPlaying?this.$refs.audio.play():this.$refs.audio.pause()
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import '~./NetPlayer.less';
</style>
