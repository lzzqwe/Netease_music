<template>
  <div v-if="_getToken()" class="daily-recommend">
    <recommend-content></recommend-content>
  </div>
  <div v-else>
    <net-login></net-login>
  </div>
</template>

<script>
import { getToken } from "../common/js/auth";
import NetLogin from "./NetLogin";
import RecommendContent from "../components/RecommendContent";
import { mapGetters } from "vuex";
export default {
  name: "DailyRecommend",
  data() {
    return {
      dailySongs: [],
    };
  },
  methods: {
    _getToken() {
      const token = getToken();
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    NetLogin,
    RecommendContent,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    const token = getToken();
    if (!token) {
      this.$dialog.alert({
        message: "必须要登录后才可以获取每日推荐内容",
      });
    }
  },
};
</script>

<style lang="less" scoped>
.daily-recommend {
  font-size: 40px;
}
</style>
