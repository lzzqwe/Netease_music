<template>
  <div class="divder"></div>
</template>

<script>
  export default {
    name: "BaseDivder",
    beforeCreate() {
      console.log('son-beforeCreated')
    },
    created() {
      console.log('son-created')
    },
    beforeMount() {
      console.log('son-beforeMount')
    },
    mounted() {
      console.log('son-mounted')

    },
    beforeUpdate() {
      console.log('son-beforeUpdate')
    },
    updated() {
      console.log('son-updated')
    },
    beforeDestroy() {
      console.log('son-beforeDestory')
    },
    destroyed() {
      console.log('son-destroyed')
    },
  }
</script>

<style lang="less" scoped>
  .divder {
    height: 15px;
    background-color: var(--divder-color);
  }
</style>
