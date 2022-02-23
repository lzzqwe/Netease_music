<template>
  <div class="net-mv">
    <div class="nav-bar-container">
      <nav-bar :bar-title="barTitle"></nav-bar>
    </div>
    <div class="tabs-wrap">
      <van-tabs @click="onClick" v-model="active">
        <van-tab :key="item.name" v-for="item in area" :title="item.name">
          <base-scroll
            ref="mvwrap"
            @scrollToEnd="loadMore"
            :data="mvList"
            :pullup="pullup"
            class="mv-content-wrap"
          >
            <div>
              <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                input-align="center"
              />
              <ul class="mv-list">
                <li
                  @click="selctItem(item.id)"
                  :key="item.id + index"
                  v-for="(item, index) in mvList"
                  class="item"
                >
                  <div class="mv-album">
                    <div class="background">
                      <img class="image" :src="item.cover" alt="" />
                    </div>
                    <div class="album-img">
                      <img class="img" v-lazy="item.cover" alt="" />
                    </div>
                  </div>
                  <div class="content">
                    <p class="title">{{ item.name }}</p>
                    <div class="Numbers">
                      <span class="iconfont iconbofangliang1"
                        ><span class="count">{{
                          item.playCount | parseNum(item.playCount, 1)
                        }}</span></span
                      >
                      <span class="iconfont icondianzan"
                        ><span class="count">3615</span></span
                      >
                    </div>
                  </div>
                </li>
                <div v-if="!noData" class="load-more">
                  <load-more :status="status"></load-more>
                </div>
              </ul>
            </div>
            <div class="empty-container">
              <empty :show="noData"></empty>
            </div>
          </base-scroll>
        </van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getMv, getSingerDetail } from "@/api";
import NavBar from "@/components/NavBar";
import BaseScroll from "@/components/BaseScroll";
import Mv from "@/common/js/mv";
import { mapActions, mapGetters } from "vuex";
import empty from "@/components/BaseEmpty.vue";
import LoadMore from "@/components/LoadMore.vue";
export default {
  metaInfo() {
    return {
      title: "mv",
    };
  },
  name: "NetMv",
  created() {
    this.area = Mv.area;
    this._getMv();
  },
  computed: {
    ...mapGetters(["playList"]),
  },
  data() {
    return {
      barTitle: "mv",
      active: 0,
      value: "",
      pullup: true,
      noData: false,
      mvList: [],
      offset: 0,
      status: "loading",
      isHave: true,
    };
  },
  updated() {
    this.handlePlaylist(this.playList);
  },
  methods: {
    async _getMv(value = "") {
      const params = {
        area: value,
        offset: this.offset,
        limit: 10,
      };
      const res = await getMv(params);
      this.status = "loading";
      if (res.code === 200) {
        this.mvList = this.mvList.concat(res.data);
        if (res.data.length > 0 && res.data.length < 10) {
          this.status = "noMore";
          this.isHave = false;
          this.noData = false;
          console.log("nomore");
        } else if (res.data.length === 0) {
          this.noData = true;
          this.status = "noMore";
          this.isHave = false;
        } else {
          console.log("more");
          this.status = "more";
          this.isHave = true;
          this.noData = false;
        }
      }
    },
    loadMore() {
      if (this.isHave) {
        this.offset++;
        this._getMv();
      }
    },
    handlePlaylist(playList) {
      const index = this.$refs.mvwrap.length - 1;
      if (playList.length > 0) {
        this.$refs.mvwrap[index].$el.classList.add("bottom");
      } else {
        this.$refs.mvwrap[index].$el.classList.remove("bottom");
      }
      this.$refs.mvwrap[index].refresh();
    },
    selctItem(id) {
      this.$router.push(`/mv/${id}`);
    },
    onClick(name, title) {
      this.mvList = [];
      this.offset = 0;
      this.status = "loading";
      if (title === "全部") {
        this._getMv();
      } else {
        this._getMv(title);
      }
    },
  },
  components: {
    NavBar,
    BaseScroll,
    empty,
    LoadMore,
  },
};
</script>

<style lang="less" scoped>
@import "../../common/less/variable";
.net-mv {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245);
  /deep/ .van-field__control {
    height: 30px;
    font-size: 12px;
  }
  /deep/ .van-cell {
    align-items: center;
    .van-icon {
      font-size: 16px;
    }
  }
  .nav-bar-container {
    padding: 0 15px;
  }
  .tabs-wrap {
    /deep/ .van-tabs__wrap {
      height: 40px;
      border-bottom: 0.5px solid rgb(181, 186, 187);
      background-color: rgb(193, 197, 201);
    }
    /deep/ .van-tab {
      font-size: 14px;
      color: rgb(81, 84, 84);
    }
    /deep/ .van-tabs__nav--complete {
      padding: 0 12px;
    }
    /deep/ .van-tab--active {
      color: rgb(38, 41, 41);
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
    /deep/ .van-tabs__line {
      bottom: 5px;
      height: 4px;
    }
    .mv-content-wrap {
      position: fixed;
      top: 95px;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      &.bottom {
        bottom: 55px;
      }
      .load-more {
        text-align: center;
        padding: 15px;
        width: 100%;
      }
      .empty-container {
        width: 100%;
        height: 100%;
      }
      .mv-list {
        display: flex;
        padding: 0 15px;
        margin-top: 15px;
        flex-wrap: wrap;
        font-size: 0;
        .item {
          width: 162px;
          margin: 0 5px;
          margin-bottom: 24px;
          .mv-album {
            width: 100%;
            height: 204px;
            font-size: 0;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            .album-img {
              width: 149px;
              height: 88px;
              .img {
                width: 100%;
                height: 100%;
                border-radius: 6px;
              }
            }
            .background {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: -1;
              opacity: 0.5;
              filter: blur(30px);
              .image {
                width: 100%;
                height: 100%;
                transform: scale(3);
              }
            }
          }
          .content {
            width: 100%;
            padding-top: 16px;
            font-size: 0;
            background-color: rgb(255, 255, 255);
            border-radius: 0 0 15px 15px;
            .title {
              font-size: @font_size_small-s;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              padding: 0 14px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: wrap;
              line-height: 25px;
              color: @font-black;
            }
            .Numbers {
              display: flex;
              padding: 0 14px;
              justify-content: space-between;
              align-items: center;
              height: 45px;
              .iconbofangliang1 {
                font-size: 12px;
                color: @font-deep-gray;
              }
              .icondianzan {
                font-size: @font_size_small-m;
                .count {
                  font-size: @font_size_small-m;
                  margin-left: 4px;
                }
              }
              .nickname {
                font-size: 12px;
              }
            }
          }
        }
        .loading-wrap {
          text-align: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
