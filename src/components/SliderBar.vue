<template>
  <transition name="van-slide-left">
    <div @click="toggle" v-show="isShowSetting" class="setting-wrap">
      <div class="setting">
        <div class="avatar">
            <div class="avatar-image">
              <van-image
                fit="cover"
                round
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1113177382,1537582296&fm=26&gp=0.jpg"
              ></van-image>
            </div>
            <div class="user-name">
              <div class="name">
                <span>liudehua</span>
                <span class="iconfont icongengduo1"></span>
              </div>
              <div class="scan-code">
                <span class="iconfont iconsaoma"></span>
              </div>
            </div>
          </div>
        <base-scroll class="setting-content">
          <div>
            <div class="music-package">
              <div class="prerogative">
                <div class="exclusive">
                  <h1 class="title web-font">音乐包</h1>
                  <div class="desc">
                    <p class="text">立享17项专属特权</p>
                    <span class="iconfont icongengduo1"></span>
                  </div>
                </div>
                <div class="member-center ">会员中心</div>
              </div>
              <div class="member-system">
                <p>会员成长体系攻略,解锁专属特权</p>
                <van-image
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1113177382,1537582296&fm=26&gp=0.jpg"
                ></van-image>
              </div>
            </div>
            <div class="info-center">
              <ul class="info-center-list">
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
                <li class="list-item">
                  <div class="infomation">
                    <span class="iconfont iconicon-test1"></span>
                    <span class="text">我的消息</span>
                  </div>
                  <span class="iconfont icongengduo1"></span>
                </li>
              </ul>
            </div>
          </div>
        </base-scroll>
      </div>
    </div>
  </transition>
</template>

<script>
  import BaseScroll from "./BaseScroll";
    export default {
      name: "SliderBar",
      props:{
        isShowSetting:{
          type:Boolean
        }
      },
      components:{
        BaseScroll
      },
      methods:{
        toggle() {
          this.$emit('toggle')
        }
      }
    }
</script>

<style lang="less" scoped>
  .setting-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    width:100%;
    z-index: 10;
    background-color: rgba(102,102,102,0.5);
    .setting {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 454px;
      background-color: rgb(245,245,245);
      .setting-content {
        position: fixed;
        top: 64px;
        bottom: 0;
        width: 454px;
        overflow: hidden;
        .music-package {
          margin: 34px 24px 24px 24px;
          height: 163px;
          background-color: rgb(153,153,153);
          border-radius: 23px;
          .prerogative {
            padding: 20px 0 22px 0;
            margin: 0 23px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgb(174,174,174);
            .exclusive {
              margin-top: 2px;
              .title {
                margin-bottom: 9px;
                color: rgb(255,255,255);
              }
              .web-font {
                font-family: "webfont" !important;
                font-size: 27px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              .desc {
                font-size: 16px;
                color: rgb(216,216,216);
                display: flex;
                .text {
                  margin-right: 2px;
                }
              }
            }
            .member-center {
              width: 95px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 17px;
              border: 1px solid rgb(238,238,238);
              color: rgb(238,238,238);
              font-size: 18px;
            }
          }
          .member-system {
            display: flex;
            padding: 0 23px;
            justify-content: space-between;
            margin-top: 15px;
            align-items: center;
            color: rgb(215,215,215);
            font-size: 18px;
          }
        }
        .info-center {
          padding: 0 24px;
          .info-center-list {
            .list-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 74px;
              border-bottom: 1px solid rgb(230,230,230);
              &:last-child {
                border-bottom: 0;
              }
              .infomation {
                font-size: 20px;
                .iconicon-test1 {
                  font-size: 22px;
                }
                .text {
                  margin-left: 18px;
                }
              }
              .icongengduo1 {
                font-size: 22px;
                color: rgb(204,204,204);
              }
            }
          }
        }
      }
      .avatar {
        padding: 22px 24px 0 24px;
        display: flex;
        .avatar-image {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
        }
        .user-name {
          flex: 1;
          margin-left: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .name {
            font-size: 18px;
            color: rgb(49,49,49);
            .icongengduo1 {
              margin-left: 9px;
              font-size: 18px;
            }
          }
          .scan-code {
            width: 32px;
            height: 32px;
            .iconsaoma {
              font-size: 32px;
            }
          }
        }
      }
    }
  }
  .setting {
    /deep/ .van-image {
      width:42px ;
      height: 42px;
    }
  }
  .member-system {
    /deep/ .van-image {
      width: 33px;
      height: 33px;
    }
  }
</style>
