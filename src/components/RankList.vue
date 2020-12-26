<template>
  <div class="rank-recommend">
    <h1 class="rank-title">榜单推荐</h1>
    <ul class="rank-list">
      <li class="rank-item">
        <div class="song-cover">
          <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
        </div>
        <p class="text">云音乐达人榜</p>
      </li>
      <li class="rank-item">
        <div class="song-cover">
          <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
        </div>
        <p class="text">云音乐达人榜</p>
      </li>
      <li class="rank-item">
        <div class="song-cover">
          <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
        </div>
        <p class="text">云音乐达人榜</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "RankList",
      // props:{
      //
      // }
    }
</script>

<style lang="less" scoped>
  .rank-recommend {
    padding: 0 16.5px;
    .rank-title {
      font-size: 24px;
      font-weight: 600;
      color: rgb(51,51,51);
      margin-left: 7.5px;
      margin-bottom: 18px;
      padding-top: 31px;
    }
    .rank-list {
      display: flex;
      flex-wrap: wrap;
      .rank-item {
        margin-top: 30px;
        .song-cover {
          width: 155px;
          height: 155px;
          padding: 0 7px;
          .song-cover-img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          font-size: 14px;
          margin-top: 13px;
          text-align: left;
          padding-left: 7px;
        }
      }
    }
  }
</style>
