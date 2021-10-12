<template>
    <div v-if=" Object.values(this.data).length>0" class="net-card">
      <div class="title">
        <h1 class="txt">{{title}}</h1>
        <div class="play">
          <span class="iconfont iconbofang4">播放</span>
        </div>
      </div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
      name: "NetCard",
      props:{
        title:{
          type:String
        },
        monted() {
         console.log('dsds');
        },
        data:{
          type: [Array, Object],
          default:() => ([])
        }
      }
    }
</script>

<style lang="less" scoped>
  @import '~../common/less/variable.less';
  .net-card {
    margin: 0 24px 24px 24px;
    background-color: rgb(255,255,255);
    padding: 0 24px;
    .title {
      display: flex;
      padding-top: 34px;
      justify-content: space-between;
      padding-bottom: 12px;
      .txt {
        font-size: @font_size_small;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: @font-black;
      }
      .play {
        width: 70px;
        height: 26px;
        border: 1px solid var(--btn-border-color);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        .iconbofang4 {
          font-size: @font_size_small-m;
        }
      }
    }
  }
</style>
