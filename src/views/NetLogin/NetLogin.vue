<template>
  <div ref="login" class="logon">
    <div class="login-title">云音乐登录</div>
    <div class="content">
      <div class="account">
        <van-field
          left-icon="shouji"
          required
          maxlength="11"
          v-model="userCode"
          type="tel"
          placeholder="请输入手机号"
        >
          <van-icon class="iconfont iconshouji" class-prefix="icon" slot="left-icon" name="shouji"></van-icon>
        </van-field>
      </div>
      <div class="password">
        <van-field
          left-icon="password"
          placeholder="请输入密码"
          required
          v-model="userPassWord"
          type="password"
        >
          <van-icon
            class="iconfont iconpassword"
            class-prefix="icon"
            slot="left-icon"
            name="password"
          ></van-icon>
        </van-field>
      </div>
    </div>
    <van-button :disabled="btnDisabled" class="login-button" type="info" @click="logonAdd">登录</van-button>
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
          if (res.code == 200) {
            const userId = res.account.id
            this.save_user_Id(userId)
            this.$router.push("/");
            window.location.reload()
          }

        })
        .catch((err) => { });
    },
    ...mapActions(["save_user_Id"]),
  },
};
</script>

<style scoped lang="less">
.logon {
  min-height: 667px;
  background-image: url("./Sign in.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  &.bottom {
    bottom: 55px;
  }
  .login-title {
    margin-top: 80px;
    text-align: center;
    font-size: 26px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
  }
  .content {
    margin-top: 50px;
    .account {
      margin: 0 15px 0 15px;
      padding-bottom: 14px;
      border-bottom: 1px solid #cda2a2;
      display: flex;
      // .account-icon {
      //   width: 22px;
      //   height: 22px;
      //   display: inline-block;
      //   background-image: url("./手机号.png");
      //   background-size: 100% 100%;
      //   margin-right: 10px;
      // }
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
        // .password-icon {
        //   width: 22px;
        //   height: 22px;
        //   display: inline-block;
        //   background-image: url("./密码.png");
        //   background-size: 100% 100%;
        //   margin-right: 10px;
        // }
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
        // .password-eye-show {
        //   width: 24px;
        //   height: 24px;
        //   display: inline-block;
        //   background-image: url("./Icon Xia.png");
        //   background-size: 100% 100%;
        // }
        // .password-eye-hide {
        //   width: 24px;
        //   height: 24px;
        //   display: inline-block;
        //   background-image: url("./Icon - hide.png");
        //   background-size: 100% 100%;
        // }
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
    margin: 10px auto;
    width: 340px;
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
    margin: auto auto 80px auto;
    font-size: 14px;
    line-height: 20px;
    width: 252px;
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
