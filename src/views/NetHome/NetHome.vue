<template>
  <div class="net-home-wrap">
    <div class="search">
      <span @click="toggleSetting" class="iconfont iconliebiao"></span>
      <div @click="showSearch" class="search-input">
        <span class="iconfont iconsousuo"></span>
        <span class="search-input_keyword">en</span>
      </div>
      <span class="iconfont icontinggeshiqu40x40"></span>
    </div>
    <base-scroll ref="netHome" :data="result" class="net-home">
      <div class="net-home-content">
        <div ref="swiperContainer" class="swiper-container">
          <div class="swiper-content">
            <van-swipe
              v-if="banners.length > 0"
              class="my-swipe"
              indicator-color="white"
            >
              <van-swipe-item :key="item.bannerId" v-for="item in banners">
                <img
                  class="swip-item-img"
                  width="100%"
                  v-lazy="item.pic"
                  alt=""
                />
              </van-swipe-item>
            </van-swipe>
            <div v-else class="no-data-wrap">
              <div class="no-data-icon">
                <span class="no-data-txt">暂无数据</span>
              </div>
            </div>
          </div>
        </div>
        <base-scroll :scroll-x="scrollX" class="net-nav-wrap">
          <ul ref="navCotent" class="nav-content">
            <router-link
              :to="item.path"
              tag="li"
              :key="index"
              v-for="(item, index) in navIcon"
              class="nav-item"
              ref="navItem"
            >
              <div class="nav-icon">
                <img :src="item.picUrl" class="img" alt="" />
              </div>
              <p class="text">{{ item.name }}</p>
            </router-link>
          </ul>
        </base-scroll>
        <base-section
          :recommend-list="recommednList"
          title="推荐歌单"
        ></base-section>
        <div class="home-bac"></div>
        <base-divder></base-divder>
        <div class="private-custom-made">
          <div class="custom-made-title">
            <h3 class="title">私人定制</h3>
            <div class="refresh">
              <span class="iconfont iconrefresh"></span>歌声里藏着故事
            </div>
          </div>
          <div @click="playAll" class="play-muisc">
            <span :class="_getIcon" class="iconfont"></span>播放
          </div>
          <div class="private-song-wrap">
            <div v-if="privateMusic.length > 0" class="private-song-content">
              <ul class="private-song-list">
                <li
                  @click="selectItem(index)"
                  :key="item.id"
                  v-for="(item, index) in privateMusic"
                  class="item"
                >
                  <div class="cover">
                    <img v-lazy="item.picUrl" class="cover-imgage" alt="" />
                    <span class="iconfont iconbofangliang1"></span>
                  </div>
                  <div class="desc">
                    <div class="name">
                      <span class="text">{{ item.name }}</span
                      ><span class="horizontal">-</span>{{ item.singer }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-else class="no-data-wrap">
              <div class="no-data-icon">
                <span class="no-data-txt">暂无数据</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </base-scroll>
    <div v-show="!result.length" class="loading-wrap">
      <net-loading></net-loading>
    </div>
    <slider-bar
      @toggle="toggleSetting"
      :isShowSetting="isShowSetting"
    ></slider-bar>
    <search-input @close="close" :is-show-search="isShowSearch"></search-input>
  </div>
</template>

<script>
import recommend from "./recommend.png";
import songlist from "./songlist.png";
import singer from "./singer.png";
import rank from "./rank.png";
import MV from "./MV.png";
import BaseScroll from "@/components/BaseScroll";
import NetLoading from "@/components/NetLoading";
import BaseSection from "@/components/BaseSection";
import BaseDivder from "@/components/BaseDivder";
import SearchInput from "@/components/SearchInput";
import SliderBar from "@/components/SliderBar";
import {
  getRecommendList,
  getPrivateMusic,
  getHomeCircleIcon,
  getHomeSwiper,
} from "@/api/index.js";
import { createSong } from "@/common/js/song";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NetHome",
  components: {
    BaseScroll,
    BaseSection,
    BaseDivder,
    SearchInput,
    SliderBar,
    NetLoading,
  },
  created() {
    this.set_banners()
    this._getHomeSwiper();
    // this._getHomeCircleIcon();
    this.getHomeData();
  },
  data() {
    return {
      scrollX: true,
      isShowSetting: false,
      isShowSearch: false,
      recommednList: [],
      privateMusic: [],
      navIcon: [
        {
          picUrl: recommend,
          name: "每日推荐",
          path: "/songrcmd",
        },
        {
          picUrl: songlist,
          name: "歌单",
          path: "/playlistCollection",
        },
        {
          picUrl: singer,
          name: "歌手",
          path: "/singer",
        },
        {
          picUrl: rank,
          name: "排行榜",
          path: "/rank",
        },
        {
          picUrl: MV,
          name: "MV",
          path: "/mv",
        },
      ],
      result: [],
      banners: [],
    };
  },
  computed: {
    _getIcon() {
      return this.playing ? "iconzanting" : "iconbofang4";
    },
    ...mapGetters(["fullscreen", "playList", "playing"]),
  },
  mounted() {
   this.handlePlaylist(this.playList)
  },
  methods: {
    async _getHomeSwiper() {
      try {
        const params = {
          type: 1,
        };
        const res = await getHomeSwiper(params);
        if (res.code === 200) {
          this.banners = res.banners;
        }
      } catch (error) {
        console.log("2222");
      }
    },
    async getHomeData() {
      const params = {
        limit: 10,
      };
      try {
        const res_1 = await getRecommendList(params);
        const res_2 = await getPrivateMusic();
        Promise.all([res_1, res_2])
          .then((res) => {
            this.result = res;
            this.recommednList = this.result[0].result;
            this.privateMusic = this._createSong(this.result[1].result);
          })
          .catch((err) => {
            console.log("8888");
            throw new Error(err);
          });
      } catch (error) {
        this.$notify({
          message: "获取数据失败",
          color: "#FFFFFF",
          background: "#00A2E8",
        });
      }
    },
    handlePlaylist(playList) {
      if (playList.length > 0) {
        this.$refs.netHome.$el.classList.add("bottom");
      } else {
        this.$refs.netHome.$el.classList.remove("bottom");
      }
      this.$refs.netHome.refresh();
    },
    playAll() {
      this.select_play({ playlist: this.privateMusic, index: 0 });
    },
    _createSong(res) {
      if (res instanceof Array) {
        return res.map((item) => {
          return createSong({
            id: item.id,
            picUrl: item.picUrl,
            duration: item.song.duration,
            singer: item.song.artists[0].name,
            name: item.name,
            mvId: item.mv,
          });
        });
      }
    },
    selectItem(index) {
      this.select_play({ playlist: this.privateMusic, index });
    },
    // async _getHomeCircleIcon() {
    //   try {
    //     const res = await getHomeCircleIcon();
    //     if (res.code === 200) {
    //       const nav = res.data.slice(0,5);
    //       nav[4].name = "mv";
    //       nav[4].url = "orpheus://mv";
    //       nav[3].url = "orpheus://rank";
    //       this.navIcon = nav;
    //     }
    //   } catch (error) {
    //     this.$notify({
    //       message: "获取数据失败",
    //       color: "#FFFFFF",
    //       background: "#00A2E8",
    //     });
    //   }
    // },
    // handleString(str) {
    //   return str.slice(9);
    // },
    toggleSetting() {
      this.isShowSetting = !this.isShowSetting;
    },
    showSearch() {
      this.isShowSearch = true;
    },
    close() {
      this.isShowSearch = false;
    },
    ...mapActions(["set_banners", "select_play"]),
  },
  watch: {
    fullscreen() {
      this.$refs.netHome.refresh();
    },
    playList(newValue) {
      console.log(newValue);
      this.handlePlaylist(newValue);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>

