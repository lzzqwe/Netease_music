<template>
    <div class="net-mv">
      <div class="nav-bar-container">
        <nav-bar :bar-title="barTitle"></nav-bar>
      </div>
      <div class="tabs-wrap">
        <van-tabs @click="onClick" v-model="active">
          <van-tab :key="item.name" v-for="(item) in area" :title="item.name">
            <base-scroll :data="mvList" class="mv-content-wrap">
              <div>
                <van-search
                  v-model="value"
                  placeholder="请输入搜索关键词"
                  input-align="center"
                />
                <ul class="mv-list">
                  <li :key="item.id" v-for="(item) in mvList" class="item">
                    <div class="mv-album">
                      <img class="image" v-lazy="item.cover" alt="">
                    </div>
                    <div class="content">
                      <p class="title">{{item.name}}</p>
                      <div class="Numbers">
                        <span class="iconfont iconbofangliang1"><span class="count">{{_normalNum(item.playCount,1)}}</span></span>
                        <span class="iconfont icondianzan"><span class="count">3615</span></span>
                        <span class="nickname">音乐安利</span>
                      </div>
                    </div>
                  </li>
                  <div class="loading-wrap">
                    <net-loading></net-loading>
                  </div>
                </ul>
              </div>
            </base-scroll>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
  import {getMv} from '../api'
  import NavBar from "../components/NavBar";
  import BaseScroll from "../components/BaseScroll";
  import Mv from '../common/js/mv'
  import NetLoading from "../components/NetLoading";
    export default {
      name: "NetMv",
      created() {
        this.area =Mv.area
        this._getMv()
      },
      data() {
        return {
          barTitle:'mv',
          active:0,
          value:'',
          mvList:[]
        }
      },
      methods:{
        async _getMv(area) {
         const res = await getMv(area)
          if(res.code === 200) {
            this.mvList = res.data
          }
        },
        _normalNum(num,point) {
          let numStr = num.toString();
          if(numStr.length<6) {
            return numStr
          } else if(6<=numStr.length && numStr.length<=8) {
            return parseInt(num/10000)+"万"
          } else if(numStr.length>8) {//(1,3)
            let decimal = numStr.substring(numStr.length-8,numStr.length-8+point)
            return parseFloat(parseInt(num/100000000)+"."+decimal)+"亿"
          }
        },
        onClick(name,title) {
          this.mvList = []
          if(title ==='全部') {
            this._getMv()
          } else {
            this._getMv(title)
          }
        }
      },
      components:{
        NavBar,
        BaseScroll,
        NetLoading
      }
    }
</script>

<style lang="less" scoped>
@import '~../common/less/variable';
.net-mv {
  width: 100%;
  height: 100%;
  background-color: rgb(245,245,245);
  /deep/ .van-field__control {
    height: 52px;
    font-size: 20px;
  }
  /deep/ .van-cell {
    align-items: center;
    .van-icon {
      font-size: 20px;
    }
  }
  .nav-bar-container {
    padding: 0 24px;
  }
  .tabs-wrap {
    .mv-content-wrap {
      position: fixed;
      top: 175px;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      .mv-list {
        display: flex;
        padding: 0 24px;
        margin-top: 24px;
        flex-wrap: wrap;
        font-size: 0;
        .item {
          width: 234px;
          padding: 0 6px;
          margin-bottom: 24px;
          .mv-album {
            width: 100%;
            height: 294px;
            font-size: 0;
            .image {
              width: 100%;
              height: 100%;
              border-radius: 15px 15px 0 0;
            }
          }
          .content {
            width: 100%;
            padding-top: 16px;
            font-size: 0;
            background-color: rgb(255,255,255);
            border-radius: 0 0 15px 15px;
            .title {
              font-size: @font_size_medium-s;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp:2;
              padding: 0 14px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: wrap;
              line-height: 25px;
            }
            .Numbers {
              display: flex;
              padding: 0 14px;
              justify-content: space-between;
              align-items: center;
              height: 45px;
              .iconbofangliang1 {
                font-size: 12px;
                .count {

                }
              }
              .icondianzan {
                .count {

                }
              }
              .nickname {
                font-size: 12px;
              }
            }
          }
        }
        .loading-wrap {
          text-align: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
