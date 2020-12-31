<template>
    <div></div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "PersonalFm",
      created() {
          this.get_privateFm()
      },
      methods:{
          ...mapActions(['get_privateFm'])
      }
    }
</script>

<style scoped>

</style>
