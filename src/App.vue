<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <net-player></net-player>
  </div>
</template>
<script>
  import NetPlayer from "./views/NetPlayer";
  export default {
    name:'App',
    components:{
      NetPlayer
    }
  }
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
