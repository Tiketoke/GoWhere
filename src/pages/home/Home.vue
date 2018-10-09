<template>
    <div>
      <home-header :city="city"></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommed :list="recommendList"></home-recommed>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
  import  HomeHeader from './compontents/Header'
  import  HomeSwiper from './compontents/Swiper'
  import  HomeIcons from './compontents/Icons'
  import  HomeRecommed from './compontents/Recommed'
  import  HomeWeekend from './compontents/Weekend'
  import axios from 'axios'
  export default {
    name: "Home",
    data () {
      return {
        city: '',
        swiperList: [],
        iconList : [],
        recommendList: [],
        weekendList:[]
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommed,
      HomeWeekend
    },
    methods:{
      getHomeInfo () {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res =res.data;
        console.log(res);
        if(res.ret && res.data){
          const data = res.data;
          this.city = data.city;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList =  data.recommendList;
          this.weekendList =  data.weekendList
        }
      }
    },
    mounted(){
      this.getHomeInfo()
    }
  }
</script>

<style scoped>

</style>
