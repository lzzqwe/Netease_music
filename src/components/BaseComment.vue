<template>
  <li class="item">
    <div class="avatar">
      <img class="avatar-img" v-lazy="item.user.avatarUrl" alt="" />
    </div>
    <div class="comment-info van-hairline--bottom">
      <div class="user">
        <div class="name">
          <span class="nickname">{{ item.user.nickname }}</span>
          <span class="time">{{ parseTime(item.time) }}</span>
        </div>
        <div class="count">
          <span>{{ item.likedCount }}</span>
          <span class="iconfont icondianzan"></span>
        </div>
      </div>
      <p class="text">{{ item.content }}</p>
    </div>
  </li>
</template>

<script>
// import moment from "moment";
import dayjs from 'dayjs'
export default {
  name: "BaseComment",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    parseTime(value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const nowYear = new Date().getFullYear()
      if (year >= nowYear) {
        return dayjs(value).format("MM-DD");
      } else {
        return dayjs(value).format("YYYY-MM-DD");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  .avatar {
    width: 35px;
    flex: 0 0 35px;
    font-size: 0;
    .avatar-img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .comment-info {
    margin-left: 10px;
    flex: 1;
    padding-bottom: 15px;
    margin-right: 10px;
    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      .name {
        display: flex;
        flex-direction: column;
        .nickname {
          font-size: 12px;
          color: rgb(102, 102, 102);
        }
        .time {
          font-size: 12px;
          color: rgb(175, 175, 175);
          margin-top: 6px;
        }
      }
      .count {
        font-size: 12px;
        color: rgb(153, 153, 153);
        .icondianzan {
          font-size: 16px;
          margin-left: 8px;
        }
      }
    }
    .text {
      font-size: 12px;
      margin-top: 15px;
      line-height: 20px;
    }
  }
}
</style>
