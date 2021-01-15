<template>
    <div class="search">
      <div class="search-input-container">
        <div @click="back" class="left-arrow">
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="input-content">
          <input v-model="value" class="input" type="text">
          <span @click="clear" v-show="keyword" class="iconfont iconiconjia"></span>
        </div>
      </div>
      <div class="tab-wrap">
        <van-tabs v-model="active">
          <van-tab title="综合">
            <base-scroll class="search-content-wrap">
              <div>
                <net-card :data="songs" :title="songTitle">
                  <ul class="single-song-list">
                    <li :key="item.id" v-for="(item) in songs" class="item">
                      <div class="content">
                        <p class="name">{{item.name}}</p>
                        <div class="desc">{{item.name}}-{{item.singer}}</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                  </ul>
                  <div class="look-over-more">
                    {{song.moreText}}
                  </div>
                </net-card>
                <net-card :data="playLists" :title="title">
                  <ul class="single-song-list">
                    <base-list :song="item" :key="item.id" v-for="(item) in playLists"></base-list>
                  </ul>
                  <div class="look-over-more">
                    {{playList.moreText}}
                  </div>
                </net-card>
              </div>
            </base-scroll>
          </van-tab>
          <van-tab title="单曲">内容 2</van-tab>
          <van-tab title="歌单">内容 3</van-tab>
          <van-tab title="视频">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
  import BaseScroll from "../components/BaseScroll";
  import BaseList from "../components/BaseList";
  import NetCard from "../components/NetCard";
  import {getSearch} from '../api'
  import {createSong} from "../common/js/song";
    export default {
      name: "NetSearch",
      props:{
        keyword:String
      },
      components:{
        BaseScroll,
        BaseList,
        NetCard
      },
      data() {
        return {
          list: [],
          active:0,
          result:{},
          songTitle:"单曲",
          title:"歌单",
          songs:[],
          song:{},
          playList:{},
          playLists:[],
          value:''|| this.$route.query.keyword
        };
      },
      methods: {
        back() {
          this.$router.back()
        },
        clear() {
          this.value=''
        },
        async _getSearch(keywords) {
          const res = await getSearch(keywords)
          if(res.code===200) {
            this.song = res.result.song
            this.playList = res.result.playList
            this.playLists = res.result.playList.playLists
            this.songs =this._createSong(res.result.song.songs)
          }
        },
        _createSong(list) {
          const songs = []
          list.forEach((item) => {
            songs.push(createSong({
              id:item.id,
              picUrl:item.picUrl,
              duration:item.dt,
              singer:item.ar[0].name,
              name:item.name,
              mvId:item.mv
            }))
          })
          return songs
        }
      },
      created() {
        console.log(this.$route.query.keyword)
        this._getSearch(this.$route.query.keyword)
      }
    }
</script>
<style lang="less" scoped>
@import '~../common/less/variable.less';
.search {
  width: 100%;
  height: 100%;
  background-color: rgb(245,245,245);
  /deep/ .van-field__control {
    font-size: 20px;
  }
  .search-input-container {
    display: flex;
    height: 70px;
    align-items: center;
    margin: 0 24px;
    overflow: hidden;
    font-size: 0;
    .left-arrow {
      flex: 0 0 @font_size_large-l;
      width: @font_size_large-l;
      .iconyoujiantou {
        font-size:@font_size_large-l;
      }
    }
    .input-content {
      flex: 1;
      position: relative;
      margin-left: 27px;
      .input {
        width: 100%;
        border-bottom: 1px solid @font-deep-gray;
        font-size: @font_size_large-s;
        padding-bottom: 13px;
      }
      .iconiconjia {
        position: absolute;
        bottom: 10px;
        right: 0;
        font-size:@font_size_large-l;
      }
    }
  }
  .tab-wrap {
    .search-content-wrap {
      position: fixed;
      top: 156px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      .single-song-list {
        .item {
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid @font-light-gray;
          .content {
            flex: 0 0 410px;
            width: 410px;
            .name {
              font-size: @font_size_medium-l;
              color:@font-black;
              margin-bottom: 10px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .desc {
              font-size: @font_size_small;
              color: @font-deep-gray;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          .iconsandian {
            font-size:@font_size_medium-l;
            color: @font-deep-gray;
          }
        }
      }
      .look-over-more {
        height: 60px;
        font-size: @font_size_small;
        color: @font-deep-gray;
        text-align: center;
        line-height: 60px;
      }
    }
  }
}
</style>
