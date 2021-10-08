<template>
  <div class="play-all">
    <div @click="play" class="play">
      <span :class="getPlayIcon" class="iconfont"></span>
      <span>播放全部</span>
    </div>
    <span class="iconfont iconquanxuan"></span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BaseSticky",
  computed: {
    getPlayIcon() {
      return this.playing ? "iconbofang3" : "iconbofang7";
    },
    ...mapGetters(["playing"]),
  },
  methods: {
    play() {
      this.$emit("play");
    },
  },
};
</script>

<style lang="less" scoped>
.play-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11.5px 0 11.5px 0;
  position: sticky;
  top: 45px;
  overflow: hidden;
  background-color: var(--body-bgcolor);
  color: var(--font-color);
  z-index: 14;
  .play {
    font-size: 16px;
    .iconbofang7 {
      font-size: 16px;
      margin-right: 10px;
      background-color: rgb(255, 64, 49);
      color: rgb(255, 255, 255);
      border-radius: 50%;
    }
  }
  .iconquanxuan {
    color: rgb(51, 51, 51);
    font-size: 16px;
  }
  .iconquanxuan {
    color: rgb(51, 51, 51);
    font-size: 22px;
  }
}
</style>
