<template>
    <div class="net-mv">
      <div class="nav-bar-container">
        <nav-bar :bar-title="barTitle"></nav-bar>
      </div>
      <div class="tabs-wrap">
        <van-tabs v-model="active">
          <van-tab title="广场">
            <div class="mv-content-wrap">
              <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                input-align="center"
              />
            </div>
          </van-tab>
          <van-tab title="演唱">内容 2</van-tab>
          <van-tab title="演奏">内容 3</van-tab>
          <van-tab title="Mv">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar";
    export default {
      name: "NetMv",
      data() {
        return {
          barTitle:'mv',
          active:0,
          value:''
        }
      },
      components:{
        NavBar
      }
    }
</script>

<style lang="less" scoped>
.net-mv {
  width: 100%;
  height: 100%;
  background-color: rgb(245,245,245);
  .nav-bar-container {
    padding: 0 24px;
  }
}
</style>
