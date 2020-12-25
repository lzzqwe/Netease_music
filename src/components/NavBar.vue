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
          type:String
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
  height: 82px;
  display: flex;
  align-items: center;
  font-weight: 600;
  .iconxia {
    margin-right: 28px;
    font-size: 26px;
  }
  .bar-text {
    font-size: 26px;
  }
}
</style>
