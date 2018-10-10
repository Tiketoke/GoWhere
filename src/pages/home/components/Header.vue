<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont backicon"> &#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入景点/城市游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont arrow-icon">&#xe615;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    height .86rem
    line-height .86rem
    background  $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      text-align center
      .backicon
        text-align center
        font-size .36rem
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      height .64rem
      line-height .64rem
      padding-left .3rem
      margin-top .12rem
      margin-left .2rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      color: #fff
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
