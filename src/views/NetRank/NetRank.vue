<template>
  <div class="net-rank">
    <div class="nav-bar-wrap">
      <nav-bar :bar-title="barTitle"></nav-bar>
    </div>
    <base-scroll :data="top" ref="netRank" class="net-rank-wrap">
      <div class="net-rank-content">
        <div class="rank-official">
          <h1 v-if="top.length > 0" class="rank-title">官方榜</h1>
          <ul class="rank-official-list">
            <li
              @click="selectDetail(item.id)"
              :key="item.id"
              class="rank-official-item"
              v-for="item in top.slice(0, 4)"
            >
              <div class="song-cover">
                <img class="song-cover-img" :src="item.coverImgUrl" alt="" />
              </div>
              <ul class="tracks-list" v-if="item.tracks">
                <li
                  :key="index"
                  v-for="(song, index) in item.tracks"
                  class="tracks-item"
                >
                  <span class="index">{{ index + 1 }}.</span>
                  <span class="name">{{ song.first }}-{{ song.second }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <rank-list :data="top.slice(4)"></rank-list>
        <net-loading v-show="!this.top.length"></net-loading>
      </div>
    </base-scroll>
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getTop } from "@/api";
import NavBar from "@/components/NavBar";
import RankList from "@/components/RankList";
import BaseScroll from "@/components/BaseScroll";
import NetLoading from "@/components/NetLoading";
import {mapGetters } from "vuex";
export default {
  metaInfo() {
    return {
      title: "排行榜",
    };
  },
  name: "NetRank",
  components: {
    NavBar,
    RankList,
    BaseScroll,
    NetLoading,
  },
  created() {
    this._getTop();
  },
  mounted() {
    this.handlePlaylist(this.playList);
  },
  computed: {
    ...mapGetters(["playList"]),
  },
  methods: {
    async _getTop() {
      const res = await getTop();
      if (res.code === 200) {
        this.top = res.list;
      }
    },
    selectDetail(id) {
      this.$router.push(`/rank/${id}`);
    },
    handlePlaylist(playList) {
      if (playList.length > 0) {
        this.$refs.netRank.$el.classList.add("bottom");
      } else {
        this.$refs.netRank.$el.classList.remove("bottom");
      }
      this.$refs.netRank.refresh();
    },
  },
  data() {
    return {
      barTitle: "排行榜",
      top: [],
    };
  },
};
</script>

<style lang="less" scoped>
 @import '../../common/less/variable';
.net-rank {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--body-bgcolor);
  color: var(--font-color);
  .nav-bar-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0px 15px 0 15px;
  }
  .net-rank-wrap {
    position: fixed;
    top: 45px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    &.bottom {
      bottom: 55px;
    }
    .net-rank-content {
      .rank-official {
        padding: 0 15px;
        margin-top: 66px;
        .rank-title {
          font-size:16px;
          font-weight:600;
        }
        .rank-official-list {
          margin-top: 15px;
          .rank-official-item {
            display: flex;
            margin-bottom: 15px;
            background-color: #fff;
            &:last-child {
              margin-bottom: 0;
            }
            .song-cover {
              width: 110px;
              height: 110px;
              flex: 0 0 110px;
              .song-cover-img {
                width: 100%;
                height: 100%;
                border-radius: 6px;
              }
            }
            .tracks-list {
              flex: 1;
              font-size: @font_size_small-s;
              color: rgb(102, 102, 102);
              margin-top: 21px;
              .tracks-item {
                margin-left: 10px;
                margin-bottom: 10px;
                &:last-child {
                  margin-bottom: 0;
                }
                .index {
                }
                .name {
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
