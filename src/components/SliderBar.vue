<template>
  <transition name="van-slide-left">
    <div @click.self="toggle" v-if="isShowSetting" class="setting-wrap">
      <div class="setting">
        <div v-if="JSON.stringify(profile) !== '{}'" class="avatar">
          <div @click="goToMe" class="avatar-image">
            <van-image fit="cover" round :src="profile.avatarUrl"></van-image>
          </div>
          <div @click="goToMe" class="user-name">
            <div class="name">
              <span>{{ profile.nickname }}</span>
              <span class="iconfont icongengduo1"></span>
            </div>
            <div class="scan-code">
              <span class="iconfont iconsaoma"></span>
            </div>
          </div>
        </div>
        <div v-else class="avatar">
          <div class="avatar-image">
            <img class="image" src="./default.jpg" alt />
          </div>
          <div class="user-name">
            <router-link to="/login" tag="div" class="name">
              <span>立即登录</span>
              <span class="iconfont icongengduo1"></span>
            </router-link>
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
                <div class="member-center">会员中心</div>
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
                    <span class="iconfont iconcomiisyejianmoshi"></span>
                    <span class="text">夜间模式</span>
                  </div>
                  <van-switch @change="change" v-model="checked" />
                </li>
                <li @click="logout" class="list-item">
                  <div class="infomation">
                    <span class="iconfont icontuichudenglu"></span>
                    <span class="text">退出登录</span>
                  </div>
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
import { getuserInfo } from "../api/index";
import storage from "good-storage";
import variables from "@/common/themes/variables";
import variablesBlack from "@/common/themes/variables-black";
import { mapGetters, mapActions } from "vuex";
const themes = {
  white: "white",
  dark: "dark",
};
const THEME_KEY = "__theme__";
const CHECK_KEY = "__check__";
export default {
  name: "SliderBar",
  props: {
    isShowSetting: {
      type: Boolean,
    },
  },
  components: {
    BaseScroll,
  },
  computed: {
    ...mapGetters(["userId", 'token']),
  },
  created() {
    this.themeMap = {
      [themes.white]: {
        file: variables,
        title: "浅色",
      },
      [themes.dark]: {
        file: variablesBlack,
        title: "黑色",
      },
    };
    // this.initTheme();
    this._getUserInfo();
  },
  data() {
    return {
      checked: false || storage.get(CHECK_KEY),
      profile: {},
    };
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
    goToMe() {
      this.toggle();
      this.$router.push("/me");
    },
    gotoLogin() {

    },
    async _getUserInfo() {
      const params = {
        uid: this.userId
      }
      try {
        if (this.userId) {
          const res = await getuserInfo(params);
          if (res.code === 200) {
            this.profile = res.profile;
          }
        } {
          return
        }
      } catch (error) {
        this.$notify({
          message: "获取数据失败",
          color: "#FFFFFF",
          background: "#00A2E8",
        });
      }
    },
    initTheme() {
      if (!storage.get(THEME_KEY)) {
        this.changeThems(storage.get(THEME_KEY, themes.white));
      } else {
        this.changeThems(storage.get(THEME_KEY));
      }
    },
    changeThems(themeKey) {
      storage.set(THEME_KEY, themeKey);
      const theme = this.themeMap[themeKey].file;
      Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
      });
    },
    //退出登录
    logout() {
      this.$dialog
        .confirm({
          message: "确定退出当前账号吗?",
        })
        .then(() => {
          this.clear_user_info();
          this.$router.push("/");
          window.location.reload()
        });
    },
    change(flag) {
      if (flag) {
        storage.set(CHECK_KEY, flag);
        this.changeThems(themes.dark);
      } else {
        storage.set(CHECK_KEY, false);
        this.changeThems(themes.white);
      }
    },
    ...mapActions(["clear_user_info"]),
  },
};
</script>

<style lang="less" scoped>
@import "~../common/less/variable.less";
.setting-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(102, 102, 102, 0.5);
  z-index: 101;
  .setting {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 300px;
    background-color: var(--body-bgcolor);
    color: var(--font-color);
    .setting-content {
      position: fixed;
      top: 64px;
      bottom: 0;
      width: 300px;
      overflow: hidden;
      .music-package {
        margin: 10px 15px 15px 15px;
        height: 113px;
        background-color: rgb(153, 153, 153);
        border-radius: 8px;
        .prerogative {
          padding: 10px 0 10px 0;
          margin: 0 11px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgb(174, 174, 174);
          .exclusive {
            margin-top: 2px;
            .title {
              margin-bottom: 9px;
              color: rgb(255, 255, 255);
            }
            .web-font {
              font-family: "webfont" !important;
              font-size: @font_size_medium-s;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .desc {
              font-size: @font_size_small-s;
              color: rgb(216, 216, 216);
              display: flex;
              .text {
                margin-right: 2px;
              }
            }
          }
          .member-center {
            width: 70px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            border: 1px solid rgb(238, 238, 238);
            color: rgb(238, 238, 238);
            font-size: @font_size_small-s;
          }
        }
        .member-system {
          display: flex;
          padding: 0 23px;
          justify-content: space-between;
          margin-top: 15px;
          align-items: center;
          color: rgb(215, 215, 215);
          font-size: @font_size_small-m;
          line-height: 20px;
        }
      }
      .info-center {
        padding: 0 24px;
        /deep/ .van-switch {
          height: 20px;
          width: 40px;
          border-radius: 20px;
        }
        /deep/ .van-switch__node {
          width: 20px;
          height: 20px;
        }
        /deep/ .van-switch--on .van-switch__node {
          transform: translateX(20px);
        }
        .info-center-list {
          .list-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            border-bottom: 1px solid rgb(230, 230, 230);
            &:last-child {
              border-bottom: 0;
            }
            .infomation {
              font-size: @font_size_small-s;
              .iconicon-test1 {
                font-size: @font_size_small-s;
              }
              .text {
                margin-left: @font_size_small-s;
              }
            }
            .icongengduo1 {
              font-size: @font_size_medium-l;
              color: rgb(204, 204, 204);
            }
          }
        }
      }
    }
    .avatar {
      padding: 22px 24px 0 24px;
      display: flex;
      .avatar-image {
        width: 30px;
        height: 30px;
        flex: 0 0 30px;
        .image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user-name {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: @font_size_small;
          .icongengduo1 {
            margin-left: 9px;
            font-size: @font_size_small;
          }
        }
        .scan-code {
          width: 22px;
          height: 22px;
          .iconsaoma {
            font-size: @font_size_medium;
          }
        }
      }
    }
  }
}
.setting {
  /deep/ .van-image {
    width: 30px;
    height: 30px;
  }
}
.member-system {
  /deep/ .van-image {
    width: 23px;
    height: 23px;
  }
}
</style>
