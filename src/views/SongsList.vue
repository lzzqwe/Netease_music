<template>
  <div class="song-piazza">
    <div class="nav-bar-wrap">
      <nav-bar :bar-title="barTitle"></nav-bar>
    </div>
    <van-tabs @click="changeTag" line-height="9" line-width="50">
      <van-tab :key="item.name" v-for="(item,index) in tags" :title="item.name">
        <base-scroll @scrollToEnd="loadMore" :pullup="pullup" :data="songList" :key="index" class="song-list-wrap">
          <div class="song-list-content">
            <div class="song-swiper">
              <van-swipe v-show="needOne(index)" class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item @click="selectItem(item)" :key="index" v-for="(item,index) in songList.slice(0,3)">
                  <img width="100%" height="100%" :src="item.coverImgUrl" alt="">
                </van-swipe-item>
              </van-swipe>
            </div>
            <keep-alive>
              <div class="songs-wrap">
                <song-list @select="selectItem(item)" :song-item="item" :key="index" v-for="(item,index) in songList.slice(3)"></song-list>
<!--                <net-loading v-show="loading"></net-loading>-->
              </div>
            </keep-alive>
            <net-loading v-show="!songList.length"></net-loading>
          </div>
        </base-scroll>
      </van-tab>
    </van-tabs>
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import NavBar from "../components/NavBar";
  import SongList from "../components/SongList";
  import BaseScroll from "../components/BaseScroll";
  import NetLoading from "../components/NetLoading";
  import {getSongsTags,getSongList} from '../api/index'
  export default {
    name:'SongsList',
    data() {
      return {
        barTitle:'歌单广场',
        tags:[],
        cat:'全部',
        songList:[],
        pullup:true,
        limit:50,
        offset:0,
        loading:false
      }
    },
    created() {
      this._getSongsTags()
      this._getSongList(this.cat,this.limit,this.offset)
    },
    methods:{
      needOne(index) {
        if(index===0) {
          return true
        } else {
          return false
        }
      },
      selectItem(item) {
        this.$router.push(`/playlistCollection/${item.id}`)
      },
       loadMore() {
        this.loading = true
        this.offset++
         setTimeout(() => {
           this._getSongList(this.cat,this.limit,this.offset)
           this.loading = false
         },2000)


      },
      changeTag(name,title) {
        console.log(name,title)
        this.cat = title
      },
      async _getSongsTags() {
        const res = await getSongsTags()
        if(res.code===200) {
           res.sub.unshift(res.all)
           this.tags = res.sub
        }
      },
      async _getSongList(cat,limit,offset) {
        const res = await getSongList(cat,limit,offset)
        if(res.code === 200) {
          this.songList = this.songList.concat(res.playlists)
        }
      }
    },
    watch:{
      cat:function (newvalue,oldValue) {
        if(newvalue!==oldValue) {
          console.log(newvalue)
          this.songList=[]
          this.offset=0
          this._getSongList(newvalue,this.limit,this.offset)
        }
      }
    },
    components:{
      NavBar,
      SongList,
      BaseScroll,
      NetLoading
    }
  }

</script>
<style lang="less" scoped>
.song-piazza {
  width: 100%;
  height: 100%;
  background-color: var(--body-bgcolor);
  color: var(--font-color);
  .nav-bar-wrap {
    padding: 0 24px;
    background-color: rgb(193,197,201);
  }
  .song-list-wrap {
    position: fixed;
    top: 178px;
    bottom: 0;
    left:0;
    right: 0;
    overflow: hidden;
    .song-list-content {
      .song-swiper {
        padding: 0 24px;
        .my-swipe {
          margin-bottom: 32px;
          .van-swipe-item {
            color: #fff;
            font-size: 20px;
            height: 320px;
            text-align: center;
            background-color: #39a9ed;
          }
        }
      }
      .songs-wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 0 16.5px;
      }
    }

  }
}
.song-piazza {
  /deep/ .van-tabs__wrap {
    height: 60px;
    border-bottom: 1px solid rgb(181,186,187);
    background-color: rgb(193,197,201);
  }
  /deep/ .van-tab {
    font-size: 20px;
    color: rgb(81,84,84);
  }
  /deep/ .van-tabs__nav--complete {
    padding: 0 12px;
  }
  /deep/ .van-tab--active {
    color: rgb(38,41,41);
    font-weight: 600;
  }
}
/*.loader {*/
/*  width: 60px;*/
/*  height: 30px;*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate3d(-50%,-50%,0);*/
/*}*/
.loading-wrap {
  width: 100%;
  height: 30px;
  .loader {
    width: 60px;
    height: 30px;
    margin: 0 auto;
  }
}

</style>
