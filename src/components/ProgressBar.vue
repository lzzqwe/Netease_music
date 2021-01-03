<template>
  <div class="progress">
    <span class="time">{{format(time)}}</span>
    <div ref="progerssBar" class="progress-bar">
      <div ref="progressInnerBar" class="progress-inner-bar"></div>
      <div
        @touchstart="handleStart"
        @touchmove="handleMove"
        @touchend="handleEnd"
        ref="progressCircle" class="progress-circle"></div>
    </div>
    <span class="time">{{format(currentSong.duration)}}</span>
  </div>
</template>

<script>
    export default {
      name: "ProgressBar",
      props:{
        currentSong:{
          type:Object
        },
        time:{
          type:Number
        },
        percent:{
          type:Number
        }
      },
      created() {
        this.touch= {}
      },
      methods:{
        handleStart(e) {
          this.touch.initStatus =true
          this.touch.startX = e.touches[0].pageX
          /*
          * 记录初始滚动条宽度
          * */
          this.touch.width = this.$refs.progressInnerBar.clientWidth
          console.log('this.touch.width'+this.touch.width)
        },
        handleMove(e) {
          if(!this.touch.initStatus) {
            return
          }
          const distance = e.touches[0].pageX-this.touch.startX
          console.log(distance+this.touch.width)
          this.$refs.progressInnerBar.style.width =`${distance+this.touch.width}px`
        },
        handleEnd() {
          this.touch.initStatus =false
          const percent =  this.$refs.progressInnerBar.clientWidth/ this.$refs.progerssBar.clientWidth
          this.$emit('onPercentChange',percent)
        },
        format(time) {
          time = Math.floor(time)
          const minute = Math.floor(time/60)
          const second = this._pad(time%60)
          return `0${minute}:${second}`
        },
        _pad(time,n=2) {
          let len = time.toString().length
          while (len<n) {
            time = '0' +time
            len++
          }
          return time
        }
      },
      watch:{
        percent(newPercent) {
          let innnerProgressWidth = (this.$refs.progerssBar.clientWidth-13)*newPercent
          this.$refs.progressInnerBar.style.width=`${innnerProgressWidth}px`
          this.$refs.progressCircle.style.left =`${innnerProgressWidth}px`
        }
      },
    }
</script>

<style lang="less" scoped>
  .progress {
    display: flex;
    justify-content: space-between;
    color: rgb(185,191,200);
    margin-top: 25px;
    align-items: center;
    /*position: relative;*/
    .time {
      font-size: 10px;
      flex: 0 0 33px;
      width: 33px;
    }
    .progress-bar {
      flex: 1;
      height: 3px;
      background-color: rgb(94,105,125);
      margin: 0 17px;
      position: relative;
      font-size: 0;
      .progress-circle {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color:rgb(254,254,254);
        position: absolute;
        bottom: -4.5px;
        left: 0;
        padding: 2px;
      }
      .progress-inner-bar {
        height: 3px;
        top: 0;
        position: absolute;
        left: 0;
        background-color: red;
      }
    }
  }
</style>
