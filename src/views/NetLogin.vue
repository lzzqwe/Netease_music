<template>
    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
</template>

<script>
  import {getLogin} from '../api/index.js'
  import {saveUserInfo} from '../common/js/cache'
  import {mapActions} from 'vuex'
    export default {
      name: "NetLogin",
      data() {
        return {
          username: '',
          password: ''
        };
      },
      methods: {
      async onSubmit() {
          const res = await getLogin(this.username,this.password)
          if(res.code===200) {
            /*
            * 保存在localstorage
            * */
            saveUserInfo(res.profile)
            //保存在vuex中
            this.save_user_info({userInfo: res.profile})
            console.log(this.$route)
            if(this.$route.path==='/login') {
              this.$router.push('/')
            }
          }
        },
        ...mapActions(['save_user_info'])
      }
    }
</script>

<style lang="less" scoped>
.login {
  padding: 50px 24px 0 24px;
}
</style>
