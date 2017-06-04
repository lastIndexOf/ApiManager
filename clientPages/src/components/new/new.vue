<template>
  <div id="new" @click.stop.prevent="back">
    <div class="new-wrapper" @click.stop>
      <apis-wrapper :type="type"></apis-wrapper>
    </div>
    <close></close>
  </div>
</template>

<script>
import router from '../../router/index'
import close from '../close/close'
import swal from 'sweetalert2'
import apisWrapper from '../apiwrapper/apiwrapper'

export default {
  data() {
    return {
      type: 'REST'
    }
  },
  methods: {
    back(e) {
      this.$emit('cancelBlur')
      router.back()
    }
  },
  mounted() {
    const self = this

    let timer = setTimeout(() => {
      timer = null
      swal({
        text: '请选择APIs 架构风格',
        showCancelButton: true,
        confirmButtonText: 'REST',
        cancelButtonText: 'normal',
        allowOutsideClick: false
      }).then(msg => {
        self.type = 'REST'
      })
      .catch(msg => {
        self.type = 'normal'
      })
    }, 300)
  },
  components: { close, apisWrapper }
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
