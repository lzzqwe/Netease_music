<template>
  <li v-if="song" @click="playSong" class="list-item">
    <div class="item-index">{{ index + 1 }}</div>
    <div class="desc">
      <div class="song-name-text">
        <div class="song-name-content">
          <h1 class="name">{{ song.name }}</h1>
          <div class="text">
            <span class="iconfont icondujia"></span>
            <span class="iconfont iconsq"></span>
            <span>{{ song.singer }}-{{ song.name }}</span>
          </div>
        </div>
        <span v-show="song.mvId" class="iconfont iconbofang6"></span>
      </div>
      <div class="play-icon">
        <span class="iconfont iconsandian"></span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "BaseSongs",
  props: {
    song: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    playSong() {
      this.$emit("play");
    },
  },
};
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 10px;
  padding-left: 5px;
  width: 100%;
  .item-index {
    flex: 0 0 7px;
    width: 7px;
    font-size: 12px;
    color: rgb(153, 153, 153);
    // font-weight: 600;
  }
  .desc {
    width: 320px;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    align-items: center;
    .song-name-text {
      margin-right: 39px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .song-name-content {
        flex: 0 0 240px;
        width: 240px;
        .name {
          width: 100%;
          font-size: 14px;
          margin-bottom: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 24px;
        }
        .text {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 12px;
          color: rgb(179, 179, 179);
          line-height: 16px;
          .icondujia {
            margin-right: 5px;
            color: rgb(246, 162, 159);
          }
          .iconsq {
            color: rgb(225, 113, 71);
            margin-right: 5px;
          }
        }
      }
      .iconbofang6 {
        font-size: 16px;
        margin-left: 34px;
        color: rgb(179, 179, 179);
      }
    }
    .play-icon {
      flex: 0 0 16px;
      width: 16px;
      .iconsandian {
        font-size: 16px;
        color: rgb(179, 179, 179);
      }
    }
  }
}
</style>
