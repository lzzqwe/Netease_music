<template>
  <div class="section">
    <div class="title">
      <h1 class="text">{{ title }}</h1>
      <div @click="$router.push('/playlistCollection')" class="more">
        更多<span class="iconfont icongengduo1"></span>
      </div>
    </div>
    <base-scroll
      :data="recommendList"
      :scroll-x="scrollX"
      v-if="recommendList.length > 0"
      class="song-list-wrap"
    >
      <ul class="song-list-content">
        <li
          @click="skip(item)"
          :key="item.id"
          class="song-list-item"
          v-for="item in recommendList"
        >
          <div class="item-icon">
            <img class="img" v-lazy="item.picUrl" alt="" />
            <div class="play-count">
              <span class="iconfont iconbofangliang1"></span
              >{{ item.playCount | parseNum(item.playCount, 1) }}
            </div>
          </div>
          <p class="text">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </base-scroll>
    <div class="no-data-wrap" v-else>
      <div class="no-data-icon">
        <span class="no-data-txt">暂无数据</span>
      </div>
    </div>
  </div>
</template>

<script>
import BaseScroll from "./BaseScroll";
export default {
  props: {
    title: {
      type: String,
    },
    recommendList: {
      type: Array,
    },
  },
  data() {
    return {
      scrollX: true,
    };
  },
  methods: {
    skip(item) {
      this.$router.push(`/playlistCollection/${item.id}`);
    },
  },
  components: {
    BaseScroll,
  },
};
</script>

<style lang="less" scoped>
@import "~../common/less/variable.less";
.section {
  margin-left: 15px;
  margin-right: 15px;
  padding: 18px 0 29px 0;
  border-top: 1px solid rgb(var(--font-color));
  color: var(--font-color);
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    .text {
      font-size: @font_size_medium-s;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
    .more {
      width: 70px;
      height: 26px;
      border: 1px solid var(--btn-border-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      font-size: @font_size_small-m;
    }
  }
  .song-list-wrap {
    overflow: hidden;
    .song-list-content {
      display: flex;
      width: 1204px;
      .song-list-item {
        margin-right: 6px;
        background-color: #ffffff;
        &:last-child {
          margin-right: 0;
        }
        .item-icon {
          width: 103.5px;
          height: 103.5px;
          margin-bottom: 10px;
          position: relative;
          .img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }
          .play-count {
            position: absolute;
            top: 6px;
            right: 6px;
            width: 65px;
            height: 18px;
            border-radius: 5px;
            background-color: rgba(164, 184, 198, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(255, 255, 255);
            font-size: @font_size_small-m;
            .iconbofangliang1 {
              font-size: @font_size_small-m;
              margin-right: 5px;
            }
          }
        }
        .text {
          width: 103.5px;
          height: 40px;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0 5px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: @font_size_small-m;
          line-height: 18px;
        }
      }
    }
  }
  .no-data-wrap {
    position: relative;
    height: 165.5px;
    background-color: #ffffff;
    .no-data-icon {
      width: 100px;
      height: 100px;
      background-image: url("./Icon - no data available.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      .no-data-txt {
        font-size: 12px;
        color: #1683fe;
        line-height: 22px;
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }
    }
  }
}
</style>
