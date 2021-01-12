<template>
    <div class="search">
      <div class="search-input-container">
        <div @click="back" class="left-arrow">
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="input-content">
          <input class="input" type="text">
          <span v-show="keyword" class="iconfont iconiconjia"></span>
        </div>
      </div>
      <div class="tab-wrap">
        <van-tabs v-model="active">
          <van-tab title="综合">
            <base-scroll class="search-content-wrap">
              <div>
                <div class="single-song">
                  <div class="title">
                    <h1 class="txt">单曲</h1>
                    <van-button type="default">
                      <span class="iconfont iconbofang4">播放</span>
                    </van-button>
                  </div>
                  <ul class="single-song-list">
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                  </ul>
                  <div class="look-over-more">
                    查看全部的53首单曲
                  </div>
                </div>
                <div class="single-song">
                  <div class="title">
                    <h1 class="txt">单曲</h1>
                    <van-button type="default">
                      <span class="iconfont iconbofang4">播放</span>
                    </van-button>
                  </div>
                  <ul class="single-song-list">
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                  </ul>
                  <div class="look-over-more">
                    查看全部的53首单曲
                  </div>
                </div>
                <div class="single-song">
                  <div class="title">
                    <h1 class="txt">单曲</h1>
                    <van-button type="default">
                      <span class="iconfont iconbofang4">播放</span>
                    </van-button>
                  </div>
                  <ul class="single-song-list">
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                    <li class="item">
                      <div class="content">
                        <p class="name">12岁</p>
                        <div class="desc">刘德华演唱会</div>
                      </div>
                      <span class="iconfont iconsandian"></span>
                    </li>
                  </ul>
                  <div class="look-over-more">
                    查看全部的53首单曲
                  </div>
                </div>
              </div>
            </base-scroll>
          </van-tab>
          <van-tab title="单曲">内容 2</van-tab>
          <van-tab title="歌单">内容 3</van-tab>
          <van-tab title="视频">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
  import BaseScroll from "../components/BaseScroll";
    export default {
      name: "NetSearch",
      props:{
        keyword:String
      },
      components:{
        BaseScroll
      },
      data() {
        return {
          list: [],
          active:0
        };
      },
      methods: {
        back() {
          this.$router.back()
        }
      },
      created() {
        console.log(this.$route.query.keyword)
      }
    }
</script>
<style lang="less" scoped>
@import '~../common/less/variable.less';
.search {
  width: 100%;
  height: 100%;
  background-color: rgb(245,245,245);
  /deep/ .van-field__control {
    font-size: 20px;
  }
  .search-input-container {
    display: flex;
    height: 70px;
    align-items: center;
    margin: 0 24px;
    overflow: hidden;
    font-size: 0;
    .left-arrow {
      flex: 0 0 @font_size_large-l;
      width: @font_size_large-l;
      .iconyoujiantou {
        font-size:@font_size_large-l;
      }
    }
    .input-content {
      flex: 1;
      position: relative;
      margin-left: 27px;
      .input {
        width: 100%;
        border-bottom: 1px solid @font-deep-gray;
        font-size: @font_size_large-s;
        padding-bottom: 13px;
      }
      .iconiconjia {
        position: absolute;
        bottom: 10px;
        right: 0;
        font-size:@font_size_large-l;
      }
    }
  }
  .tab-wrap {
    .search-content-wrap {
      position: fixed;
      top: 156px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      .single-song {
        margin: 0 24px 24px 24px;
        background-color: rgb(255,255,255);
        padding: 0 24px;
        .title {
          display: flex;
          padding-top: 34px;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid @font-deep-gray;
          .txt {
            font-size: @font_size_large;
            font-weight: 600;
            color: @font-black;
          }
        }
        .single-song-list {
          .item {
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid @font-light-gray;
            .content {
              .name {
                font-size: @font_size_medium-l;
                color:@font-black;
                margin-bottom: 10px;
              }
              .desc {
                font-size: @font_size_small;
                color: @font-deep-gray;
              }
            }
            .iconsandian {
              font-size:@font_size_medium-l;
              color: @font-deep-gray;
            }
          }
        }
        .look-over-more {
          height: 60px;
          font-size: @font_size_small;
          color: @font-deep-gray;
          text-align: center;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
