<template>
  <div v-if="show" class="empty-wrap">
    <svg
      t="1635230274088"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3663"
      :width="emptyWidth"
      :height="emptyHeight"
    >
      <path
        d="M591.8 509.677l96.6 162.5 283.8-167.5-125.3-146 0.5-0.4-389.9-81-314.3 123.4h-0.2l-98.8 169.6 414.8 109.2 118-173.9 14.8 4.1z"
        fill="#D1DFF3"
        p-id="3664"
      ></path>
      <path
        d="M193.2 393.877l410.6 100.1 26.8-16.2c-184.3-61.6-224.6-139.3-214.2-180l-223.2 96.1z"
        fill="#ACC5E9"
        p-id="3665"
      ></path>
      <path
        d="M452.9 38.4h49.3v144.2h-49.3V38.4z m228 19.6l-72.7 124.8 41.1 21.9 72.6-124.9-41-21.8z m-471.2 55.1l84.6 117 39.3-27.3-84.4-117-39.5 27.3z m782.9 368.8L870.7 339.7c-3.1-6-8.7-10.4-15.4-11.7l-389.8-79.6c-4.2-0.9-8.6-0.5-12.7 1.1L138.4 372.2c-1.8 0.8-3.5 1.8-5 3h-1.1c-1.6 1.7-3.1 3.5-4.6 5.3l-99 169c-6.2 10.6-2.7 24.2 7.9 30.4 1.8 1 3.7 1.8 5.7 2.3l82.3 21.5v233.9c0 9.9 6.6 18.6 16.1 21.3l439.1 125.7c6 1.9 12.4 1.2 17.9-2L874.3 828c7.1-3.9 11.5-11.4 11.4-19.6l-2.9-232.3 104.6-61.5c10.6-6.2 14.1-19.8 7.9-30.3-0.7-1.2-1.5-2.2-2.3-3.3l-0.4 0.9zM463.1 293.1l326.6 67.5-35.7 20.6-163 95.6-303.4-73.1-67.8-16.4 243.3-94.2zM81.8 547.7l75.9-129.2L276 446.9l267.7 64.7-91 133.5-370.9-97.4z m87.7 274.2V616.5L457.3 692c9.1 2.4 18.8-1.3 24.1-9.1l78-114.5 3.6 366-393.5-112.5z m437.8 105l-3.6-368.1 69.1 115.7c6.3 10.5 19.9 14 30.5 7.8l135-79.3 2.3 193.6-233.3 130.3z m92.5-294.1l-73.9-123.5 150.6-88.9 69.1-40.9 96 111.3-241.8 142z"
        fill="#286EFA"
        p-id="3666"
      ></path>
    </svg>
    <span>{{emptyTxt}}</span>
  </div>
</template>

<script>
export default {
  name: "empty",
  props:{
      emptyTxt:{
          type:String,
          default:"暂无数据"
      },
      emptyWidth:{
          type:Number,
          default:150
      },
      emptyHeight:{
          type:Number,
          default:150
      },
      show:{
        type:Boolean
      }
  }
};
</script>

<style lang='less' scoped>
.empty-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
}
</style>