<template>
  <header id="homeheader">
    <ul class="header-wrapper">
      <li class="setting" @click="setting">
        <i class="iconfont icon-shezhi"></i>
      </li>
      <li class="header-item">本地文档 0 份</li>
      <li class="header-item">云端文档 0 份</li>
      <li class="time" ref="time">
        <p class="pointer unix" 
          data-after="unix时间戳"
          @click="showTime($event, 1)">
          <i class="iconfont icon-shijianchuofuwu-"></i>
          {{ currentTime.now }}</p>
        <p class="pointer abtime" @click="showTime">
          <i class="iconfont icon-shijian1"></i>
          {{ curt }}</p>
      </li>
    </ul>
  </header>
</template>
<script>
import moment from 'moment'
import anime from 'animejs'
import swal from 'sweetalert2'

export default {
  data() {
    return {
      current: '',
      timer: '',
      currentTime: {
        now: ''
      }
    }
  },
  computed: {
    curt() {
      return moment(this.current).format('HH:mm:ss')
    }
  },
  methods: {
    _initTime() {
      const self = this

      this.timer = setInterval(() => {
        this.current = Date.now()
        anime({
          targets: self.currentTime,
          now: self.current,
          round: 1,
          easing: 'linear',
          update() {
            self.currentTime.now 
          }
        })
      }, 1000)
    },
    showTime(e, type=0) {
      let time = type === 0
        ? this.curt
        : this.currentTime.now
      swal({
        text: `现在的时间(戳)是${ time }`,
        timer: 2000
      })
    },
    setting() {
      swal({
        text: '暂不支持设置',
        timer: 1500,
        type: 'warning'
      })
    }
  },
  created() {
    this._initTime()
  }
}
</script>
<style lang="stylus">
#homeheader
  padding 20px 0
  width 100%
  heigth 60px
  .header-wrapper
    display flex
    flex-flow nowrap row
    justify-content center
    .setting
      position absolute
      top 12px
      left 32px
      color #fff
      .iconfont
        font-size 20px
        cursor pointer
    .header-item
      color rgba(245, 245, 245, .8)
      font-size 16px
      font-weight 600
      padding 0 32px
      line-height 16px
      border-right 1px solid rgba(245, 245, 245, .2)
      &:last-of-type
        border-right none
    .time
      position absolute
      top 12px
      right 32px
      color #fff
      float right
      .abtime
        text-align right
      .iconfont
        float left
        font-weight bold
        margin-right 12px
      .pointer
        cursor pointer
      .unix
        position relative
        &::after
          content: attr(data-after)
          position absolute
          display inline-block
          width 100%  
          left -100%
          border-radius 4px
          background-color orange
          padding 4px
          box-sizing border-box
          transition all .4s
          visibility hidden
          opacity 0
        &::before
          content ''
          position absolute
          display inline-block
          top 4px
          left 0
          background-color orange
          border-color rgb(32, 39, 68) rgb(32, 39, 68) rgb(32, 39, 68) orange
          border-style dashed dashed dashed solid
          border-width 6px 
          width 0
          height 0
          transition all .4s
          visibility hidden
          opacity 0
        &:hover::after, &:hover::before
          visibility visible
          opacity 1.0

</style>