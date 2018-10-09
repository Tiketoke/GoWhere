<template>
  <div class="recomd">
    <div class="title">热销推荐</div>
    <ul class="mp-like-list">
      <li class="item  border-bottom" v-for="item of list" :key="item.id">
        <img  class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button"> 查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommed",
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recomd
    padding-bottom .3rem
    .title
      margin-top: .2rem
      line-height: .8rem
      background: #eee
      text-indent: .2rem
    .mp-like-list
      margin-left .24rem
      .item
        overflow: hidden
        display: flex
        height: 1.9rem

        .item-img
          width: 1.7rem
          height: 1.7rem
          padding: .1rem
        .item-info
          flex: 1
          padding: .1rem
          min-width: 0
          border-bottom 1px solid #ddd
          .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
          .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
          .item-button
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
</style>
