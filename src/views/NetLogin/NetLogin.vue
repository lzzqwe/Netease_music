<template>
  <div ref="login" class="logon">
    <div class="login-title">云音乐登录</div>
    <div class="content">
      <div class="account">
        <!-- <span class="account-icon"></span>
        <input
          class="account-txt"
          type="text"
          v-model="userCode"
          maxlength="11"
          placeholder="请输入手机号"
        /> -->
        <van-field
          left-icon="shouji"
          required
          maxlength="11"
          v-model="userCode"
          type="tel"
          placeholder="请输入手机号"
        >
          <van-icon
            class="iconfont iconshouji"
            class-prefix="icon"
            slot="left-icon"
            name="shouji"
          ></van-icon>
        </van-field>
      </div>
      <div class="password">
        <van-field
          placeholder="请输入密码"
          required
          v-model="password"
          type="password"
          label="密码"
        />
        <!-- <div class="password-left">
          <span class="password-icon"></span>
          <input
            type="text"
            :password="isPass"
            v-model="userPassWord"
            placeholder="请输入密码"
            class="password-txt"
          />
        </div>
        <div class="password-right">
          <span @click="hideOrshowPassword" :class="iconStyle"></span>
        </div> -->
      </div>
    </div>
    <van-button
      :disabled="btnDisabled"
      class="login-button"
      type="info"
      @click="logonAdd"
      >登录</van-button
    >
    <div class="user-service-agreement">
      <span class="click-agree">点击登录即代表您同意</span>
      <span class="service-agreement">《用户服务协议》</span>
    </div>
  </div>
</template>

<script>
import { getLogin } from "@/api/index.js";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      userCode: "",
      userPassWord: "",
      isPass: true,
    };
  },
  computed: {
    iconStyle() {
      return this.isPass ? "password-eye-hide" : "password-eye-show";
    },
    isPhoneAvailale() {
      const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      return phoneReg.test(this.userCode) ? true : false;
    },
    isPassword() {
      return this.userPassWord;
    },
    btnDisabled() {
      const { isPhoneAvailale, isPassword } = this;
      if (isPhoneAvailale) {
        if (isPassword) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    ...mapGetters(["playList"]),
  },
  mounted() {
    this.handlePlaylist(this.playList);
  },
  methods: {
    hideOrshowPassword() {
      this.isPass = !this.isPass;
    },
    handlePlaylist(playList) {
      console.log(this.$refs.login);
      // console.log(playList);
      if (playList.length > 0) {
        this.$refs.login.classList.add("bottom");
      } else {
        this.$refs.login.classList.remove("bottom");
      }
    },
    logonAdd() {
      console.log("3333");
      let json = {
        phone: this.userCode,
        password: this.userPassWord,
      };
      getLogin(json)
        .then((res) => {
          this.save_token(res.token);
          this.save_user_info(res.profile);
          this.$router.push("/");
        })
        .catch((err) => {});
    },
    ...mapActions(["save_token", "save_user_info"]),
  },
};
</script>

<style scoped lang="less">
.logon {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url("./Sign in.png");
  background-repeat: no-repeat;
  background-size: cover;
  &.bottom {
    bottom: 55px;
  }
  .login-title {
    position: absolute;
    left: 0;
    right: 0;
    top: 180px;
    text-align: center;
    font-size: 26px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
  }
  .content {
    position: absolute;
    top: 240px;
    width: 100%;
    .account {
      margin: 0 15px 0 15px;
      padding-bottom: 14px;
      border-bottom: 1px solid #cda2a2;
      display: flex;
      .account-icon {
        width: 22px;
        height: 22px;
        display: inline-block;
        background-image: url("./手机号.png");
        background-size: 100% 100%;
        margin-right: 10px;
      }
      /deep/ .account-txt {
        font-size: 17px;
        font-weight: normal;
        /*color: #f5f5f5;*/
        line-height: 24px;
        .uni-input-wrapper {
          .uni-input-placeholder {
            color: #f5f5f5;
          }
        }
      }
    }
    .password {
      margin: 0 15px 0 15px;
      padding-top: 27px;
      padding-bottom: 14px;
      border-bottom: 1px solid #cda2a2;
      display: flex;
      justify-content: space-between;
      .password-left {
        display: flex;
        .password-icon {
          width: 22px;
          height: 22px;
          display: inline-block;
          background-image: url("./密码.png");
          background-size: 100% 100%;
          margin-right: 10px;
        }
        /deep/ .password-txt {
          font-size: 17px;
          line-height: 24px;
          .uni-input-wrapper {
            .uni-input-placeholder {
              color: #f5f5f5;
            }
          }
        }
      }
      .password-right {
        .password-eye-show {
          width: 24px;
          height: 24px;
          display: inline-block;
          background-image: url("./Icon Xia.png");
          background-size: 100% 100%;
        }
        .password-eye-hide {
          width: 24px;
          height: 24px;
          display: inline-block;
          background-image: url("./Icon - hide.png");
          background-size: 100% 100%;
        }
      }
    }
    .forget-password {
      text-align: right;
      padding-right: 15px;
      margin-top: 13px;
      font-size: 12px;
      font-weight: normal;
      color: #ffffff;
      line-height: 17px;
    }
  }
  .login-button {
    position: absolute;
    top: 415px;
    left: 15px;
    right: 15px;
    text-align: center;
    padding: 12px 0;
    background: #1683fe;
    border-radius: 24px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    line-height: 25px;
  }
  .user-service-agreement {
    position: absolute;
    bottom: 44px;
    font-size: 14px;
    line-height: 20px;
    left: 50%;
    width: 252px;
    transform: translate3d(-50%, 0, 0);
    .click-agree {
      color: #333333;
    }
    .service-agreement {
      color: #1683fe;
    }
  }
}

/deep/ uni-toast {
  .uni-toast__content {
    background: #ffffff !important;
  }
}
</style>
