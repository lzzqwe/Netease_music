<template>
  <div class="net-rank">
    <div class="nav-bar-wrap">
      <nav-bar :bar-title="barTitle"></nav-bar>
    </div>
    <base-scroll class="net-rank-wrap">
      <div class="net-rank-content">
        <rank-list></rank-list>
        <div class="rank-official">
          <h1 class="official-title">官方榜</h1>
          <ul class="rank-official-list">
            <li class="rank-official-item">
              <div class="song-cover">
                <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
              </div>
              <ul class="tracks-list">
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
              </ul>
            </li>
            <li class="rank-official-item">
              <div class="song-cover">
                <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
              </div>
              <ul class="tracks-list">
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
              </ul>
            </li>
            <li class="rank-official-item">
              <div class="song-cover">
                <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
              </div>
              <ul class="tracks-list">
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
              </ul>
            </li>
            <li class="rank-official-item">
              <div class="song-cover">
                <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
              </div>
              <ul class="tracks-list">
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
              </ul>
            </li>
            <li class="rank-official-item">
              <div class="song-cover">
                <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
              </div>
              <ul class="tracks-list">
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
              </ul>
            </li>
            <li class="rank-official-item">
              <div class="song-cover">
                <img class="song-cover-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
              </div>
              <ul class="tracks-list">
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
                <li class="tracks-item">
                  <span class="index">1</span>
                  <span class="name">周杰伦的撒打算的撒</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </base-scroll>
  </div>
</template>

<script>
  import NavBar from "../components/NavBar";
  import RankList from "../components/RankList";
  import BaseScroll from "../components/BaseScroll";
  export default {
    name: "NetRank",
    components:{
      NavBar,
      RankList,
      BaseScroll
    },
    data() {
      return {
        barTitle:'排行榜'
      }
    }
  }
</script>

<style lang="less" scoped>
.net-rank {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  .nav-bar-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 32px 24px 0 24px;
  }
  .net-rank-wrap {
    position: fixed;
    top: 114px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .net-rank-content {
      .rank-official {
        padding: 0 24px;
        margin-top: 66px;
        .rank-title {
          font-size:24px ;
          font-weight: 600;
        }
        .rank-official-list {
          margin-top: 30px;
          .rank-official-item {
            display: flex;
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0;
            }
            .song-cover {
              width: 155px;
              height: 155px;
              flex: 0 0 155px;
              .song-cover-img {
                width: 100%;
                height: 100%;
              }
            }
            .tracks-list {
              flex: 1;
              font-size: 16px;
              color: rgb(102,102,102);
              margin-top: 21px;
              .tracks-item {
                margin-left: 16px;
                margin-bottom: 29px;
                &:last-child {
                  margin-bottom: 0;
                }
                .index {

                }
                .name {

                }
              }
            }
          }
        }
      }
    }
  }
  .rank-recommend {
    padding: 0 16.5px;
    .rank-title {
      font-size: 24px;
      font-weight: 600;
      color: rgb(51,51,51);
      margin-left: 7.5px;
      margin-bottom: 18px;
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
}
</style>
