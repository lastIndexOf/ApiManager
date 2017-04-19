<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app
  width 100%
  min-height 600px
  background linear-gradient(to bottom, rgb(32, 35, 64), rgb(42, 106, 134))
</style>
