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
            <div class="middle">
              <transition name="van-fade">
                <div @click="showLyric" v-show="!isFlag" class="cd">
                  <div :class="poleIcon" class="music-pole"></div>
                  <div class="inner-circle">
                    <div class="album-img" :class="albumIcon">
                      <img class="image" :src="currentSong.picUrl" alt="">
                    </div>
                  </div>
                  <p v-if="txt" class="current-text">{{txt}}</p>
                </div>
              </transition>
              <transition name="van-fade">
                <base-scroll ref="lyric"  v-show="isFlag" :data="lines" v-if="lines" class="lyric">
                  <div>
                    <p :class="{'current':currentLineNum===index}" ref="line" :key="index" @click="showLyric" v-for="(item,index) in lines">{{item.txt}}</p>
                  </div>
                </base-scroll>
              </transition>
            </div>
            <div class="bottom">
              <transition name="van-fade">
                <div v-show="!isFlag" class="operator_1">
                  <span class="iconfont iconshoucang"></span>
                  <span class="iconfont icondibar-xiazai"></span>
                  <span class="iconfont iconicon-test"></span>
                  <span class="iconfont iconpinglun1">
                  <span class="comment-count">{{totalCount}}</span>
                </span>
                  <span class="iconfont iconsandian"></span>
                </div>
              </transition>
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
           <span @click.stop="togglePlaying" :class="playIcon"></span>
         </div>
         <div class="control">
           <span class="iconfont iconliebiao"></span>
         </div>
       </div>
     </transition>
<!--     <net-comment :get-comment="getCommentPlaylist" :playlist="playlist" :id="id" v-if="isShow"></net-comment>-->
     <audio
       @error="error"
       @timeupdate="timeupdate"
       ref="audio"
       @ended="end"
       :src="currentSong.url"></audio>
   </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    import ProgressBar from "../components/ProgressBar";
    import BaseScroll from "../components/BaseScroll";
    import {getlyric} from '../api/index'
    import Lyric from 'lyric-parser'
    export default {
      name: "NetPlayer",
      data() {
        return {
          currentTime:0,
          percent:0,
          lines:[],
          isFlag:false,
          currentLineNum:0,
          txt:''
        }
      },
      components:{
        ProgressBar,
        BaseScroll
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
        showLyric() {
          this.isFlag = !this.isFlag
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
        togglePlaying() {
          this.set_playing_status(!this.playing)
        },
        /*
        * 获取当前歌曲的歌词
        * */
        async _getLyric(id) {
          const res =await getlyric(id)
          if(res.code===200) {
            if(res.lrc.lyric) {
              let lyric = new Lyric(res.lrc.lyric, this.handler)
              this.lines = lyric.lines
              if(this.playing) {
                /*
                * 实例播放的时候执行handler函数 读取歌词到哪一行和那句歌词
                * */
                lyric.play()
              } else {
                lyric.pause()
              }
            }
          } else {
            console.log('dsdsds')
          }
        },
        handler({lineNum,txt}) {
          if(lineNum >5) {
            this.$refs.lyric.scrollToElement(this.$refs.line[lineNum-5],1000)
          } else {
            this.$refs.lyric.scrollTo(0,0,1000)
          }
          this.currentLineNum =lineNum
          this.txt = txt
        },
        ...mapMutations(['set_playing_status','set_fullscreen','set_currentIndex'])
      },
      watch:{
        currentSong(newSong,oldSong) {
          if(!newSong.id) {
            return
          }
          /*
          * 一般是等dom的数据更新后 然后才会播放歌曲的
          * */
          setTimeout(() => {
            this.$refs.audio.play()
            this._getLyric(this.currentSong.id)
          },30)

        },
        isFlag() {
          this.$nextTick(() => {
            this.$refs.lyric.refresh()
          })
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
