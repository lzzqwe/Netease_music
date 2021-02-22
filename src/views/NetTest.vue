<template>
<!--    <Scroll-->
<!--      ref="scroll"-->
<!--      :autoUpdate="true"-->
<!--      @pullingDown="loadRefresh"-->
<!--      class="test">-->
<!--      <ul>-->
<!--        <li :key="index" v-for="(item,index) in list">{{item}}</li>-->
<!--      </ul>-->
<!--    </Scroll>-->
  <div class="test">
    <!-- <van-uploader :after-read="afterRead" /> -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
  </div>
</template>

<script>
  // import moment from 'moment'
  // import Scroll from 'vue-slim-better-scroll'
  import axios from 'axios'
  // import {updateAvatar} from '../api'
    export default {
      name: "NetTest",
      components:{
        // Scroll
      },
      data() {
        return {
          list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
          url:'',
          checkedNames: [],
          picked: ''
        }
      },
      mounted() {
        this.getDate()
        const meta = this.$route.matched
        console.log(meta);
        Cookies.set('foo', 'bar')
        let {a,b,c} = {'c':1,'a':2,'b':3}
        console.log(a,b,c);
      },
      methods:{
        loadRefresh() {
          console.log('sadasd')
          setTimeout(() => {
            this.$refs.scroll.update(true)
          },3000)
        },
        uploadAvatar(file) {
          //new 一个FormData格式的参数
          let params = new FormData()
          params.append('imgFile', file)
          let config = {
            headers: { //添加请求头
              'Content-Type': 'multipart/form-data'
            }
          }
          //把 uploadUrl 换成自己的 上传路径
          axios.post('http://127.0.0.1:3000/avatar/upload', params, config).then(res => {
           res = res.data.data
            if(res.code===200) {
              this.url = res.url
            }
            console.log(res)
          }).catch(err => {
            console.log(err)
          });
        },
        afterRead(file) {
          // 此时可以自行将文件上传至服务器
          this.uploadAvatar(file.file)
        },
        getDate() {
          let date = new Date(1610959896617)
          console.log(date.getFullYear())
        }
      }
    }
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  font-size: 30px;
  line-height: 50px;
  padding: 0 24px;
  box-sizing: border-box;
  }
</style>
