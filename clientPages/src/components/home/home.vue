<template>
  <div id="home">
    <home-header></home-header>
    <section class="main-content" :class="{ filter: isBlur }">
      <div class="content-wrapper">
        <div class="content">
          <div class="icon-wrapper" >
            <i class="iconfont icon-new-document"  @click.stop="enter(1, $event)"></i>
          </div>
          <p class="desc">新建Apis</p>
        </div>
        <div class="content">
          <div class="icon-wrapper" >
            <i class="iconfont icon-chakanwendangjilu"></i>
          </div>
          <p class="desc">查看Api文档</p>
        </div>
        <div class="content">
          <div class="icon-wrapper">
            <i class="iconfont icon-zaixian"></i>
          </div>
          <p class="desc">online测试</p>
        </div>
        <div class="content">
          <div class="icon-wrapper" >
            <i class="iconfont icon-lixian" @click.stop="enter(4, $event)"></i>
          </div>
          <p class="desc">本地测试</p>
        </div>
      </div>
    </section>
    <transition name="scaleIn">
      <router-view @cancelBlur="cancelBlur"></router-view>
    </transition>
  </div>
</template>
<script>
import anime from 'animejs'
import homeHeader from '../homeheader/homeheader' 
import router from '../../router/index'

export default {
  data () {
    return {
      isBlur: false
    }
  },
  methods: {
    enter(type, e) {
      const self = this

      let route
      switch(type) {
        case 1:
          route = 'new'
          break
        case 2:
        case 3:
        case 4:
          route = 'local'
          break
      }

      anime({
        targets: e.target.parentNode.parentNode,
        scale: 2,
        opacity: 0,
        easing: 'easeInQuart',
        duration: 500,
        complete(anime) {
          self.isBlur = true
          router.push(`/home/${ route }`)
          let timer = setTimeout(() => {
            e.target.parentNode.parentNode.style.opacity = 1
            e.target.parentNode.parentNode.style.transform = ''
            clearTimeout(timer)
          }, 400)
        }
      })
    },
    cancelBlur() {
      setTimeout(() => {
        this.isBlur = false
      }, 400)
    }
  },
  components: { homeHeader }
}
</script>
<style lang="stylus">
.scaleIn-enter-active
  transform-origin center
  transition all .4s
.scaleIn-leave-active
  transition all .4s
  transform scale(1.2)
  opacity 0
.scaleIn-enter
  opacity 0
  transform scale(0)

#home
  .main-content
    transition filter .2s
    &.filter
      -webkit-filter blur(10px)
    margin-top 180px
    .content-wrapper
      display flex
      flex-flow nowrap row
      width 100%
      justify-content center
      .content
        flex 0 0 100px
        width 100px
        margin-right 64px
        &:last-of-type
          margin-right 0
        .icon-wrapper
          width 100px
          height 100px
          border-radius 50%
          text-align center
          display table-cell
          vertical-align middle
          cursor pointer
          color #fff
          transition transform .3s .1s
          &:hover
            transform scale(1.2)
            & + .desc
              transform scale(1.2)
          .iconfont
            font-size 42px
        .desc
          margin-top 32px
          color #fff
          font-weight 600
          text-align center
          transition transform .3s .1s
        &:first-of-type
          .icon-wrapper
            background-color rgb(241, 153, 72)
        &:nth-of-type(2)
          .icon-wrapper
            background-color rgb(19, 192, 72)
        &:nth-of-type(3)
          .icon-wrapper
            background-color rgb(43, 141, 208)
        &:nth-of-type(4)
          .icon-wrapper
            background-color rgb(248, 76, 53)
</style>