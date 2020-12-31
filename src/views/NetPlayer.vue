<template>
   <div v-if="$store.state.playList.length>0" class="net-player">
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
                <span class="iconfont iconpinglun1">
                  <span class="comment-count">{{totalCount}}</span>
                </span>
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
                <span @click="togglePlaying" :class="playIcon"></span>
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
        playIcon() {
          return this.playing? 'iconfont iconbofang3':'iconfont iconbofang2'
        },
        ...mapGetters(['currentSong','playList','playing','totalCount'])
      },
      methods:{
        hidePlayer() {
          this.set_fullscreen(false)
        },
        togglePlaying() {
          this.set_playing_status(!this.playing)
        },
        ...mapMutations(['set_playing_status','set_fullscreen'])
      },
      watch:{
        currentSong(newSong,oldSong) {
          console.log(newSong,oldSong)
          if(!newSong.id) {
            return
          }
          console.log(newSong)
          // this.$nextTick(() => {
          //   this.$refs.audio.play()
          // })

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
