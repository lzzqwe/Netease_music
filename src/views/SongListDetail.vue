<template>
    <div class="song-list-detail">
      <div class="nav-bar-wrap">
        <nav-bar :bar-title="barTitle"></nav-bar>
      </div>
      <base-scroll :data="songs" class="song-list-wrap">
        <div>
          <div class="background-wrap">
            <div :style="{backgroundImage:`url(${playlist.coverImgUrl})`}" class="song-list-background"> </div>
          </div>
          <div class="song-detail-cover">
            <div class="detail-cover-content">
              <div class="cover-img">
                <img class="icon-album" :src="playlist.coverImgUrl" alt="">
              </div>
              <div class="description">
                <p class="song-list-title">{{playlist.name}}</p>
                <div v-if="playlist.creator" class="attention">
                  <img class="avatar" :src="playlist.creator.avatarUrl" alt="">
                  <span class="user-name">{{playlist.creator.nickname}}</span>
                  <div class="increase">
                    <span class="iconfont iconhao"></span>
                  </div>
                </div>
                <div class="song-list-content">
                  <p class="text">{{playlist.description}}</p>
                  <span class="iconfont icongengduo1"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="song-detail-operation">
            <ul class="operation-list">
              <li class="operator-item">
                <span class="iconfont iconjiatianjiakuangxuanduoxuan-8"></span><span>{{playlist.subscribedCount}}</span>
              </li>
              <li @click="isShowComment" class="operator-item">
                <span class="iconfont iconpinglun1"></span><span>{{playlist.commentCount}}</span>
              </li>
              <li class="operator-item">
                <span class="iconfont iconfenxiang1"></span><span>{{playlist.shareCount}}</span>
              </li>
            </ul>
          </div>
          <div class="open-vip">
            <div class="vip-song">
              <span class="iconfont iconVIP-"></span>
              <span>含有14首VIP专享歌曲</span>
            </div>
            <div class="price">
              <span>首开vip仅仅5元</span>
              <span class="iconfont icongengduo1"></span>
            </div>
          </div>
          <div class="play-all">
            <div class="play">
              <span class="iconfont iconbofang7"></span>
              <span class="all">播放全部</span>
              <span class="num">(132)</span>
            </div>
            <div class="down-select">
              <span class="iconfont iconxiazai"></span><span class="iconfont iconquanxuan"></span>
            </div>
          </div>
          <div class="list">
            <ul class="list-content">
              <li @click="playSong(index)" :key="item.id" v-for="(item,index) in songs" class="list-item">
                <div class="item-index">{{index+1}}</div>
                <div class="desc">
                  <div class="song-name-text">
                    <h1 class="name">{{item.name}}</h1>
                    <div class="text">
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
          </div>
          <net-loading v-show="!this.songs.length"></net-loading>
        </div>
      </base-scroll>
      <net-comment :playlist="playlist" :id="id" v-if="isShow"></net-comment>
    </div>
</template>

<script>
   import NavBar from "../components/NavBar";
   import NetLoading from "../components/NetLoading";
   import BaseScroll from "../components/BaseScroll";
   import NetComment from "../components/NetComment";
   import {getSongListDetail,getAllSongs} from '../api/index'
   import {createSong} from '../common/js/song'
   import {mapActions} from 'vuex'
   export default {
     name: "SongListDetail",
     components:{
       NavBar,
       BaseScroll,
       NetComment,
       NetLoading
     },
     data() {
       return {
         id:Number(this.$route.params.id),
         barTitle:'歌单',
         playlist:{},
         songs:[],
         isShow:false
       }
     },
     methods:{
       isShowComment() {
         this.isShow =true
       },
       playSong(index) {
         this.select_play({playlist:this.songs,index})
       },
       ...mapActions(['select_play']),
       async _getSongListDetail(id) {
         const res = await getSongListDetail(id)
         try {
           if(res.code === 200) {
             this.playlist = res.playlist
           }
           this._normalizeSongs(res.playlist)
         } catch (e) {
           console.log(e)
         }

       },
       async _normalizeSongs(list) {
         const tracksId= []
         list.trackIds.forEach((item) => {
           if(item.id) {
             tracksId.push(item.id)
           }
         })
         const res = await getAllSongs(tracksId)
         if(res.code === 200) {
           this.songs = this._createSong(res.songs)
         }
       },
       _createSong(list) {
         const songs = []
         list.forEach((item) => {
           songs.push(createSong({
             id:item.id,
             picUrl:item.al.picUrl,
             duration:item.dt,
             singer:item.ar[0].name,
             name:item.name
           }))
         })
         return songs
       },
       // ...mapMutations(['isFullscreen'])
     },
     created() {
       this._getSongListDetail(this.id)
     },
   }
</script>

<style lang="less" scoped>
.song-list-detail {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  background-color: #ffffff;
  .nav-bar-wrap {
    padding: 32px 24px 0 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .song-list-wrap {
    position: relative;
    height: 100%;
    overflow: hidden;
    .background-wrap {
      overflow: hidden;
      .song-list-background {
        height: 400px;
        width: 100%;
        position: relative;
        background-image: url("http://p3.music.126.net/1sH2hLcE5vNY_47m47pF9Q==/109951165351179804.jpg");
        background-size: cover;
        filter: blur(20px);
        background-repeat: no-repeat;
        transform: scale(3);
        background-position: 50%;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0,0,0,0.25);
          z-index: 1;
        }
      }
    }
    .song-detail-cover {
      position: absolute;
      top: 145px;
      left: 0;
      right: 0;
      .detail-cover-content {
        padding: 0 24px;
        display: flex;
        .cover-img {
          flex: 0 0 181px;
          width: 181px;
          .icon-album {
            width: 181px;
            height: 181px;
            border-radius: 12px;
          }
        }
        .description {
          flex: 1;
          margin-left: 28px;
          .song-list-title {
            font-size: 20px;
            line-height: 36px;
            color: rgba(255,255,255);
          }
          .attention {
            display: flex;
            margin: 24px 0 32px 0;
            font-size: 16px;
            align-items: center;
            .avatar {
              width: 37px;
              height: 37px;
              border-radius: 50%;
            }
            .user-name {
              margin: 0 4px 0 12px;
              color: rgb(182,175,178);
              font-weight: 600;
            }
            .increase {
              padding: 8px 16px;
              background-color: rgb(161,151,155);
              border-radius: 13px;
              .iconhao {
                color: rgb(216,213,214);
              }
            }
          }
          .song-list-content {
            display: flex;
            font-size: 16px;
            justify-content: space-between;
            color: rgb(182,175,178);
            .icongengduo1 {
              font-size: 16px;
            }
            .text {
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 200px;
              overflow: hidden;
              font-weight: 600;
            }
          }
        }
      }
    }
    .song-detail-operation {
      background-color: rgb(250,250,250);
      height: 60px;
      position: absolute;
      top: 365px;
      left: 75px;
      right: 75px;
      border-radius: 30px;
      padding: 0 41px;
      box-shadow: 0 15px 30px  rgba(0, 0, 0, .4);
      .operation-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .operator-item {
          font-size: 14px;
          display: flex;
          align-items: center;
          border-right: 1px solid rgb(226,226,226);
          padding-right: 23px;
          &:last-child {
            padding-right: 0;
            border-right: 0;
          }
          .iconjiatianjiakuangxuanduoxuan-8 {
            font-size: 26px;
            margin-right: 12px;
          }
          .iconpinglun1 {
            font-size: 26px;
            margin-right: 12px;
          }
          .iconfenxiang1 {
            font-size: 26px;
            margin-right: 12px;
          }
        }
      }
    }
    .open-vip {
      margin: 60px 18px 0 18px;
      display: flex;
      height: 65px;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      border: 1px solid rgb(233,233,233);
      border-radius: 12px;
      .vip-song {
        font-size: 20px;
        .iconVIP- {
          margin-right: 17px;
          font-size: 20px;
        }
      }
      .price {
        font-size: 18px;
        color: rgb(154,154,154);
        .icongengduo1 {
          font-size: 18px;
          margin-left: 12px;
        }
      }
    }
    .play-all {
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 12px 0 20px 0;
      height: 75px;
      .play {
        display: flex;
        align-items: center;
        .iconbofang7 {
          font-size: 30px;
          color: rgb(255,65,30);
        }
        .num {
          font-size: 18px;
          color: rgb(153,153,153);
        }
        .all {
          font-size: 23px;
          font-weight: 600;
          margin: 0 14px 0 23px;
        }
      }
      .down-select {
        .iconxiazai {
          font-size: 25px;
          color: rgb(51,51,51);
          margin-right: 25px;
        }
        .iconquanxuan {
          font-size: 25px;
          color: rgb(51,51,51);
        }
      }
    }
    .list {
      padding: 0 33px;
      .list-content {
        .list-item {
          display: flex;
          align-items: center;
          margin-bottom: 38px;
          .item-index {
            flex: 0 0 7px;
            width: 7px;
            font-size: 16px;
            color: rgb(153,153,153);
            font-weight: 600;
          }
          .desc {
            flex: 1;
            display: flex;
            justify-content: space-between;
            margin-left: 37px;
            align-items: center;
            .song-name-text {
              .name {
                font-size: 20px;
                margin-bottom: 16px;
              }
              .text {
                font-size: 12px;
                color: rgb(179,179,179);
                .icondujia {
                  margin-right: 5px;
                  color: rgb(246,162,159);
                }
                .iconsq {
                  color: rgb(225,113,71);
                  margin-right: 5px;
                }
              }
            }
            .play-icon {
              .iconbofang6 {
                font-size: 22px;
                margin-right: 34px;
                color: rgb(179,179,179);
              }
              .iconsandian {
                font-size: 22px;
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
