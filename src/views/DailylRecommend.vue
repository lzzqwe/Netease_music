<template>
  <div v-if="token" class="daily-recommend">
    <recommend-content></recommend-content>
  </div>
  <div v-else>
    <net-login></net-login>
  </div>
</template>

<script>
    import NetLogin from "./NetLogin";
    import RecommendContent from "../components/RecommendContent";
    export default {
      name: "DailyRecommend",
      data() {
        return {
          token:localStorage.netToken,
          dailySongs:[]
        }
      },
      components:{
        NetLogin,
        RecommendContent
      },
      methods:{

      },
      mounted() {
        const token = localStorage.netToken
        if(!token) {
          this.$dialog.alert({
            message: '必须要登录后才可以获取每日推荐内容',
          });
        }
      }
    }
</script>

<style lang="less" scoped>
.daily-recommend {
  font-size: 40px;
}
</style>
