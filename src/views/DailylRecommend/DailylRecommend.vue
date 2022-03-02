<template>
  <div class="daily-recommend">
    <recommend-content></recommend-content>
  </div>
</template>

<script>

import RecommendContent from "@/components/RecommendContent";
import { mapGetters } from "vuex";
export default {
  metaInfo() {
    return {
      title: "每日推荐",
    };
  },
  name: "DailyRecommend",
  data() {
    return {
      dailySongs: [],
    };
  },
  components: {
    // NetLogin,
    RecommendContent,
  },
  computed: {
    ...mapGetters(["user", "token"]),
  },
};
</script>

<style lang="less" scoped>
.daily-recommend {
  font-size: 40px;
}
</style>
