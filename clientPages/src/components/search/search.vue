<template>
  <div id="search">
    <i class="iconfont icon-xinzeng1" @click="addNewDoc"></i>
    <input class="input" type="text" placeholder="文档名" v-model="docTitle">
  </div>
</template>

<script>
import router from '../../router/index'
import close from '../close/close'
import swal from 'sweetalert2'

export default {
  data() {
    return {
      docTitle: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'REST'
    }
  },
  methods: {
    addNewDoc() {
      ipcRenderer.send('create-new-doc', this.docTitle)
    }
  }
}
</script>

<style lang="stylus">
#search
  display table-cell
  vertical-align middle
  width 1000px
  height 36px
  border 1px solid rgba(42, 42, 42, .6)
  border-radius 24px
  .iconfont
    font-size 18px
    padding-left 18px
    line-height 18px
    color #666
    vertical-align middle
    cursor pointer
  .input
    border-style none
    padding-left 6px
    width 80%
</style>
