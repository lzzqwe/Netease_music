<template>
  <div class="rank-recommend">
    <h1 v-if="data.length>0" class="rank-title">榜单推荐</h1>
    <ul class="rank-list">
      <li @click="selectDetail(item.id)" :key="item.id" v-for="(item) in data" class="rank-item">
        <div class="song-cover">
          <img class="song-cover-img" v-lazy="item.coverImgUrl" alt="">
        </div>
        <p class="text">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "RankList",
      props:{
        data:{
          type:Array
        }
      },
      methods:{
        selectDetail(id) {
          this.$router.push(`/rank/${id}`)
        },
      }
    }
</script>

<style lang="less" scoped>
  .rank-recommend {
    padding: 0 15px;
    .rank-title {
      font-size: 16px;
      font-weight: 600;
      color: rgb(51,51,51);
      /*margin-left: 7.5px;*/
      margin-bottom: 10px;
      padding-top: 20px;
       font-family: PingFangSC-Medium;
    font-weight: 500;
    }
    .rank-list {
      display: flex;
      flex-wrap: wrap;
      .rank-item {
        // margin-top: 15px;
        // margin-left: 7.5px;
        background-color: #fff;
        // padding-bottom: 10px;
        border-radius: 10px;
         padding: 0 2px 10px 2px;
         margin: 0 3px 15px 3px;
        .song-cover {
          width: 105px;
          height: 105px;
          /*padding: 0 7px;*/
          font-size: 0;
          .song-cover-img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        .text {
          font-size: 12px;
          margin-top: 13px;
          text-align: left;
          // padding: 0 3.5px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 105px;
          text-align: center;
        }
      }
    }
  }
</style>
