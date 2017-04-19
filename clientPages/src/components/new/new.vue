<template>
  <div id="new" @click.stop.prevent="back">
    <div class="new-wrapper" @click.stop></div>
  </div>
</template>

<script>
import router from '../../router/index'

export default {
  methods: {
    back(e) {
      this.$emit('cancelBlur')
      router.back()
    }
  }
}
</script>

<style lang="stylus">
#new
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  padding 24px
  padding-top 56px
  .new-wrapper
    width 100%
    height 100%
    box-sizing border-box
    background-color #fff
    box-shadow 10px 10px 10px rgba(7, 17 ,27, .5)
</style>
