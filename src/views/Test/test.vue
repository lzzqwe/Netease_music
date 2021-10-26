<template>
  <div class="test">
      <empty emptyTxt='咱师傅的说法是大哥大很多地方的各个施工方' :emptyWidth='100' :empthHeight='100'></empty>
      <load-more></load-more> 
  </div>
</template>

<script>
import empty from '@/components/BaseEmpty.vue'
import LoadMore from "@/components/LoadMore.vue"
export default {
  name:'test',
  components:{
      empty,
      LoadMore
  }
}
</script>

<style lang="less" scoped>

</style>>