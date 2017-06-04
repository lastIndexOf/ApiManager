<template>
  <div id="apis-wrapper">
    <div class="left-wrapper">
      <search></search>
    </div>
    <div class="right-wrapper">2</div>
  </div>
</template>

<script>
import router from '../../router/index'
import close from '../close/close'
import swal from 'sweetalert2'
import search from '../search/search'

export default {
  data() {
    return {

    }
  },
  props: {
    type: {
      type: String,
      default: 'REST'
    }
  },
  methods: {},
  components: { search }
}
</script>

<style lang="stylus">
#apis-wrapper
  width 100%
  height 100%
  font-size 0
  .left-wrapper
  .right-wrapper
    vertical-align top
    display inline-block
    width 50%
    height 100%
    font-size 14px
    box-sizing border-box
  .left-wrapper
    padding 64px 32px 32px
    box-shadow -4px -10px 100px #ddd inset
</style>
