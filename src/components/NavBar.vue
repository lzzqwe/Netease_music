<template>
    <div @click="back" class="nav-bar">
      <span class="iconfont iconxia"></span><span class="bar-text">{{barTitle}}</span>
    </div>
</template>

<script>
    export default {
      name: "NavBar",
      props:{
        barTitle:{
          type:String,
          default:null
        }
      },
      methods:{
        back() {
          this.$router.back()
        }
      }
    }
</script>

<style lang="less" scoped>
.nav-bar {
  height: 44px;
  display: flex;
  align-items: center;
  .iconxia {
    margin-right: 10px;
    font-size: 16px;
  }
  .bar-text {
    font-size: 16px;
    line-height: 30px;
    width: 270px;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
