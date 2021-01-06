<template>
    <div class="search">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </div>
</template>

<script>
  import { Toast } from 'vant';
    export default {
      name: "NetSearch",
      props:{
        keyword:String
      },
      data() {
        return {
          list: [],
          loading: false,
          finished: false,
          refreshing: false,
        };
      },
      methods: {
        onLoad() {
          // 异步更新数据
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          setTimeout(() => {
            for (let i = 0; i < 50; i++) {
              this.list.push(this.list.length + 1);
            }
            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.list.length >= 100) {
              this.finished = true;
              this.refreshing =false
            }
          }, 1000);
        },
        onRefresh() {
          // 清空列表数据
          this.finished = false;

          // 重新加载数据
          // 将 loading 设置为 true，表示处于加载状态
          this.loading = true;
          this.onLoad();
        },
      },
      created() {
        console.log(this.$route.query.keyword)
      }
    }
</script>
<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  font-size: 40px;
}
</style>
