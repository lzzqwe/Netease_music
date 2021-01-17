<template>
    <div class="test">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide :key="item.id" v-for="(item) in banners.slice(0,3)">
          <img class="img" :src="item.pic" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div @click="handle" ref="one" id="a" class="one">dsadasd</div>
    </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
    export default {
      name: "NetTest",
      created() {
        this.set_banners()
      },
      data() {
        return {
          swiperOptions: {
            pagination: {
              el: '.swiper-pagination'
            },
            // Some Swiper option/callback...
            // autoplay: {
            //
            //   delay: 1500,
            //
            //   stopOnLastSlide: false,
            //
            //   disableOnInteraction: false
            //
            // },
            initialSlide :1,
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 1,
              depth: 10,
              modifier: 10,
              slideShadows : false
            },
            loop: true
          }
        }
      },
      computed:{
        ...mapGetters(['banners'])
      },
      methods:{
        ...mapActions(['set_banners']),
        handle() {
          console.log(this.$refs.one.id)
        }
      },
      mounted() {
        console.log('Current Swiper instance object', this.swiper)
      }
    }
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  font-size: 30px;
  background-color: #55a532;
  padding: 0 24px;
  box-sizing: border-box;
  /*/deep/ .swiper-container {*/
  /*  padding: 0 24px;*/
  /*  overflow: hidden;*/
  /*}*/
  /deep/ .swiper-slide {
    background-color: red;
    /*width: 240px !important;*/
    .img {
      height: 320px;
      width: 240px;
    }
  }

}
</style>
