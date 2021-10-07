<template>
  <li @click="selectItem" class="taste-item">
    <div class="album">
      <img class="album-img" v-lazy="song.coverImgUrl" alt="" />
    </div>
    <div class="content">
      <p class="rank">{{ song.name }}</p>
      <p class="number">
        {{ song.trackCount }}首,by<span class="nickname">{{
          song.creator.nickname
        }}</span
        >,播放{{ song.playCount | parseNum(song.playCount, 1) }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "BaseList",
  props: {
    song: {
      type: Object,
    },
  },
  methods: {
    selectItem() {
      this.$emit("select");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~../common/less/variable.less";
.taste-item {
  display: flex;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
  /*&:last-child {*/
  /*  margin-bottom: 0;*/
  /*}*/
  .album {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    overflow: hidden;
    flex: 0 0 60px;
    .album-img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    .rank {
      margin-bottom: 13px;
      font-size: @font_size_small-s;
      color: @font-black;
      width: 190px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .number {
      font-size: @font_size_small-m;
      color: @font-deep-gray;
      width: 190px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 25px;
      .nickname {
        margin-left: 5px;
      }
    }
  }
}
</style>
