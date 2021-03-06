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
    metaInfo() {
      return {
        title:"欢迎来的net-music"
      }
    },
    name:'App',
    components:{
      NetPlayer
    },
    computed:{
      flag() {
        return this.$store.state
      }
    },
    watch:{
      flag: {
            handler() {
                if (this.$store._committing) {
                    console.log(this.$store._committing);
                    console.log(this.$store);
                    console.log('通过commit修改');
                } else {
                    console.log(this.$store._committing);
                    console.log('直接修改');
                }
            },
            deep: true,
          	sync: true
        }
    }
  }
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
