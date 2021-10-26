<template>
  <div class="uni-load-more" @click="onClick">
    <svg
      width="24"
      height="24"
      viewBox="25 25 50 50"
      v-if="
        !webviewHide &&
        (iconType === 'circle' ||
          (iconType === 'auto' )) &&
        status === 'loading' &&
        showIcon
      "
      :style="{ width: iconSize + 'px', height: iconSize + 'px' }"
      class="uni-load-more__img uni-load-more__img--android-H5"
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        :style="{ color: color }"
        :stroke-width="3"
      ></circle>
    </svg>
    <span class="uni-load-more__text" :style="{ color: color }">{{
      status === "more"
        ? contentText.contentdown
        : status === "loading"
        ? contentText.contentrefresh
        : contentText.contentnomore
    }}</span>
  </div>
</template>

<script>
/**
 * LoadMore 加载更多
 * @description 用于列表中，做滚动加载使用，展示 loading 的各种状态
 * @tutorial https://ext.dcloud.net.cn/plugin?id=29
 * @property {String} status = [more|loading|noMore] loading 的状态
 * 	@value more loading前
 * 	@value loading loading中
 * 	@value noMore 没有更多了
 * @property {Number} iconSize 指定图标大小
 * @property {Boolean} iconSize = [true|false] 是否显示 loading 图标
 * @property {String} iconType = [snow|circle|auto] 指定图标样式
 * 	@value snow ios雪花加载样式
 * 	@value circle 安卓唤醒加载样式
 * 	@value auto 根据平台自动选择加载样式
 * @property {String} color 图标和文字颜色
 * @property {Object} contentText 各状态文字说明，值为：{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}
 * @event {Function} clickLoadMore 点击加载更多时触发
 */
export default {
  name: "UniLoadMore",
  props: {
    status: {
      // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
      type: String,
      default: "more",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    iconType: {
      type: String,
      default: "auto",
    },
    iconSize: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: "#777777",
    },
    contentText: {
      type: Object,
      default() {
        return {
          contentdown: "上拉显示更多",
          contentrefresh: "正在加载...",
          contentnomore: "没有更多数据了",
        };
      },
    },
  },
  data() {
    return {
      webviewHide: false
    };
  },
  computed: {
    iconSnowWidth() {
      return (Math.floor(this.iconSize / 24) || 1) * 2;
    },
  },
  methods: {
    onClick() {
      this.$emit("clickLoadMore", {
        detail: {
          status: this.status,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.uni-load-more {
  display: flex;

  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.uni-load-more__text {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}

.uni-load-more__img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.uni-load-more__img--nvue {
  color: #666666;
}

.uni-load-more__img--android,
.uni-load-more__img--ios {
  width: 24px;
  height: 24px;
  transform: rotate(0deg);
}

.uni-load-more__img--android {
  animation: loading-ios 1s 0s linear infinite;
}

@keyframes loading-android {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.uni-load-more__img--ios-H5 {
  position: relative;
  animation: loading-ios-H5 1s 0s step-end infinite;
}

.uni-load-more__img--ios-H5 > image {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

@keyframes loading-ios-H5 {
  0% {
    transform: rotate(0deg);
  }

  8% {
    transform: rotate(30deg);
  }

  16% {
    transform: rotate(60deg);
  }

  24% {
    transform: rotate(90deg);
  }

  32% {
    transform: rotate(120deg);
  }

  40% {
    transform: rotate(150deg);
  }

  48% {
    transform: rotate(180deg);
  }

  56% {
    transform: rotate(210deg);
  }

  64% {
    transform: rotate(240deg);
  }

  73% {
    transform: rotate(270deg);
  }

  82% {
    transform: rotate(300deg);
  }

  91% {
    transform: rotate(330deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.uni-load-more__img--android-H5 {
  animation: loading-android-H5-rotate 2s linear infinite;
  transform-origin: center center;
}

.uni-load-more__img--android-H5 > circle {
  display: inline-block;
  animation: loading-android-H5-dash 1.5s ease-in-out infinite;
  stroke: currentColor;
  stroke-linecap: round;
}

@keyframes loading-android-H5-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-android-H5-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
