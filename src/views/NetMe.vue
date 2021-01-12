<template>
    <div class="net-me">
      <div class="nav-bar-container">
        <nav-bar></nav-bar>
      </div>
      <base-scroll class="me-container">
        <div>
          <div class="me-background">
            <img class="image" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11989398626%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613048564&t=6ace57a7775cb74e272d4741587164fa" alt="">
            <div class="user-info">
              <div class="avatar">
                <img class="image" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F14%2F20200714110340_ZUkdi.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613049728&t=63ac0208acd8d187c85ac955264b8971" alt="">
              </div>
              <div class="desc">
                <h1 class="name">我爱男保姆</h1>
                <div class="fans">
                  <span class="following">4<span class="space">关注</span></span>
                  <span class="followers">0<span class="space">粉丝</span></span>
                  <span class="grade">Lv.6</span>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-wrap">
            <van-tabs v-model="active">
              <van-tab title="主页">
                <div class="basic-info">
                  <h1 class="title">基本信息</h1>
                  <div class="age">
                    <span class="village-age">村龄:<span class='num'>1年</span></span>
                  </div>
                  <div class="area">
                    <span class="area-value">地区:<span class="name">白沙</span></span>
                  </div>
                </div>
                <div class="music-taste">
                  <h1 class="title">音乐品味</h1>
                  <ul class="taste-list">
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="music-taste">
                  <h1 class="title">音乐品味</h1>
                  <ul class="taste-list">
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                    <li class="taste-item">
                      <div class="album">
                        <img class="album-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3160823669,3398764720&fm=26&gp=0.jpg" alt="">
                      </div>
                      <div class="content">
                        <p class="rank">听歌排行</p>
                        <p class="number">累计听歌698首</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </van-tab>
              <van-tab title="视频">

              </van-tab>
              <van-tab title="动态">

              </van-tab>
            </van-tabs>
          </div>
        </div>
      </base-scroll>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar";
  import BaseScroll from "../components/BaseScroll";
    export default {
      name: "NetMe",
      data() {
        return {
          active:0
        }
      },
      components:{
        NavBar,
        BaseScroll
      }
    }
</script>

<style lang="less" scoped>
  @import '~../common/less/variable.less';
.net-me {
  width: 100%;
  height: 100%;
  .nav-bar-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    padding: 0 24px;
    z-index: 15;
  }
  .me-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(245,245,245);
    overflow: hidden;
    .me-background {
      height: 37%;
      width: 100%;
      position: relative;
      .user-info {
        position: absolute;
        bottom: -175px;
        left: 24px;
        right: 24px;
        height: 200px;
        margin: 0 24px;
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 23px;
        z-index: 12;
        .avatar {
          width: 120px;
          height: 120px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid @font-light-gray ;
          .image {
            width: 118px;
            height: 118px;
            border-radius: 50%;
          }
        }
      }
      .image {
        width: 100%;
        height: 100%;
      }
    }
    .desc {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%,-50%,0);
      .name {
        font-size: 25px;
        color: @font-black;
        margin-bottom: 13px;
        font-weight: 600;
        text-align: center;
      }
      .fans {
        font-size:@font_size_small-s;
        display: flex;
        color: @font-black;
        .following {
          padding-right: 18px;
          .space {
            margin-left: 6px;
            color:@font-light-gray;
          }
        }
        .followers {
          padding:0 18px;
          border-right: 1px solid @font-light-gray;
          border-left: 1px solid @font-light-gray;
          .space {
            margin-left: 6px;
            color:@font-light-gray;
          }
        }
        .grade {
          padding-left: 18px;
        }
      }
    }
    .tab-wrap {
      width: 100%;
      margin-top: 175px;
      .basic-info {
        margin: 0 24px;
        background-color: rgb(255,255,255);
        font-size: @font_size_medium-s;
        padding-left: 25px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-radius: 12px;
        .title {
          font-size: @font_size_large-s;
          font-weight: 600;
        }
        .age {
          margin: 30px 0;
          .village-age {
            .num {
              margin-left: 20px;
            }
          }
        }
        .area {
          .area-value {
            .name {
              margin-left: 20px;
            }
          }
        }
      }
      .music-taste {
        margin: 24px 24px 0 24px;
        background-color: rgb(255,255,255);
        font-size: 0;
        padding-left: 25px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-radius: 12px;
        .title {
          font-size: @font_size_large-s;
          font-weight: 600;
        }
        .taste-list {
          margin-top: 23px;
          .taste-item {
            display: flex;
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0;
            }
            .album {
              width: 76px;
              height: 76px;
              border-radius: 10px;
              overflow: hidden;
              .album-img {
                width: 100%;
                height: 100%;
              }
            }
            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 16px;
              .rank {
                margin-bottom: 13px;
                font-size: @font_size_medium-l;
                color: @font-black;
              }
              .number {
                font-size: @font_size_small;
                color: @font-deep-gray;
              }
            }
          }
        }
      }
    }
  }
}
</style>
