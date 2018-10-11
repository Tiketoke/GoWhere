<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_600x330_1be7ea5e.jpg" alt="">
        <div class="banner-info">
          <div class="banner-tittle">上海杜莎夫人蜡像馆(AAAA景区)</div>
          <div class="banner-number"> <span class="iconfont banner-icon">&#xe700;</span>39</div>
        </div>
      </div>
      <fade-animation>
        <common-gallary
          :imgs="imgs"
          v-show="showGallary"
          @close="handleGallaryClose"
        ></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
  import  CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/Fade'
    export default {
        name: "DetilBanner",
        data (){
            return {
              showGallary:false,
              imgs:['http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_r_800x800_93bf62f1.jpg',
                'http://img1.qunarzz.com/sight/p0/1704/d7/d75e41fc3bf305d8a3.img.jpg_r_800x800_5740f5b4.jpg']
            }
        },
        methods:{
          handleBannerClick(){
            this.showGallary = true
          },
          handleGallaryClose(){
            this.showGallary = false
          }
        },
        components:{
          CommonGallary,
          FadeAnimation
        }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .2rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
          margin-right .1rem
</style>
