<template>
    <div class="net-comment">
      <div class="nav-bar-wrap">
        <nav-bar :bar-title="barTitle"></nav-bar>
      </div>
      <base-scroll :data="comment" class="comment-content">
        <div>
          <div class="playlist-cover">
            <div class="cover">
              <img class="image-cover" :src="playlist.coverImgUrl" alt="">
            </div>
            <div class="title">
              <div class="desc">
                <p class="content">{{playlist.name}}</p>
                <span class="name"><span class="from">by</span> {{playlist.creator.nickname}}</span>
              </div>
              <span class="iconfont icongengduo1"></span>
            </div>
          </div>
          <base-divder></base-divder>
          <div class="comment-zone">
            <h1 class="title">评论区</h1>
            <div class="comment-option">
              <ul class="comment-option-list">
                <li class="item active">推荐</li>
                <li class="item">最热</li>
                <li class="item">最新</li>
              </ul>
            </div>
          </div>
          <div class="comment-list-wrap">
            <ul class="comment-list">
              <li :key="item.commentId" class="item" v-for="(item) in comment">
                <div class="avatar">
                  <img class="avatar-img" :src="item.user.avatarUrl" alt="">
                </div>
                <div class="comment-info">
                  <div class="user">
                    <div class="name">
                      <span class="nickname">{{item.user.nickname}}</span>
                      <span class="time">15:25</span>
                    </div>
                    <div class="count">
                      <span>{{item.likedCount}}</span>
                      <span class="iconfont icondianzan"></span>
                    </div>

                  </div>
                  <p class="text">{{item.content}}</p>
                </div>
              </li>
            </ul>
          </div>
          <net-loading v-show="!this.comment.length"></net-loading>
        </div>
      </base-scroll>
    </div>
</template>

<script>
  import {getCommentPlaylist} from '../api/index.js'
  import BaseDivder from "./BaseDivder";
  import NavBar from "./NavBar";
  import BaseScroll from "./BaseScroll";
  import NetLoading from "./NetLoading";
    export default {
      name: "NetComment",
      props:{
        id:{
          type:Number
        },
        playlist:{
          type:Object
        }
      },
      data() {
        return {
          comment:[]
        }
      },
      computed:{
        barTitle() {
          return `评论(${this.playlist.commentCount})`
        }
      },
      components:{
        NavBar,
        BaseDivder,
        BaseScroll,
        NetLoading
      },
      created() {
        this._getCommentPlaylist(this.id)
      },
      methods:{
        async _getCommentPlaylist(id) {
          const res = await getCommentPlaylist(id)
          if(res.code === 200) {
             this.comment = this.comment.concat(res.hotComments.slice(0,5),res.comments)
          }
        }
      }
    }
</script>

<style lang="less" scoped>
.net-comment {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index:100;
  background-color: #ffffff;
  .nav-bar-wrap {
    padding: 32px 24px 0 24px;
  }
  .comment-content {
    position: fixed;
    top: 114px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .playlist-cover {
      display: flex;
      padding: 0 24px;
      margin-bottom: 15px;
      .cover {
        width: 106px;
        flex: 0 0 106px;
        font-size: 0;
        .image-cover {
          width: 106px;
          height: 106px;
          border-radius: 10px;
        }
      }
      .title {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .desc {
          margin-left: 15px;
          padding-right: 26px;
          .content {
            font-size: 22px;
            line-height: 28px;
          }
          .name {
            font-size: 18px;
            margin-top: 13px;
            color: rgb(87,124,161);
            .from {
              color: rgb(102,102,102);
            }
          }
        }
        .icongengduo1 {
          font-size: 20px;
          color: rgb(179,179,179);
        }
      }
    }
    .comment-zone {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      .title {
        font-size: 20px;
        font-weight: 600 ;
      }
      .comment-option {
        .comment-option-list {
          display: flex;
          font-size: 18px;
          .item {
            padding-right: 15px;
            border-right: 1px solid rgb(245,245,245);
            margin-right: 15px;
            color: rgb(153,153,153);
            &:last-child {
              border: 0;
              margin-right: 0;
              padding-right: 0;
            }
            &.active {
              color: rgb(51,51,51);
              font-weight: 600;
            }
          }
        }
      }
    }
    .comment-list-wrap {
      margin-top: 16px;
      .comment-list {
        padding: 0 24px;
        .item {
          display: flex;
          margin-bottom: 15px;
          .avatar {
            width: 55px;
            flex: 0 0 55px;
            font-size: 0;
            .avatar-img {
              width: 55px;
              height: 55px;
              border-radius: 50%;
            }
          }
          .comment-info {
            margin-left: 15px;
            flex: 1;
            border-bottom: 1px solid rgb(236,236,236);
            padding-bottom: 25px;
            .user {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 8px;
              .name {
                display: flex;
                flex-direction: column;
                .nickname {
                  font-size: 16px;
                  color: rgb(102,102,102);
                }
                .time {
                  font-size: 12px;
                  color: rgb(175,175,175);
                  margin-top: 12px;
                }
              }
              .count {
                font-size: 14px;
                color: rgb(153,153,153);
                .icondianzan {
                  font-size: 22px;
                  margin-left: 8px;
                }
              }
            }
            .text {
              font-size: 18px;
              margin-top: 23px;
              line-height: 32px;
              color: rgb(51,51,51);
            }
          }
        }
      }
    }
  }
}
</style>
