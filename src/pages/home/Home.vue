<template>
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommed :list="recommendList"></home-recommed>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
  import  HomeHeader from './components/Header'
  import  HomeSwiper from './components/Swiper'
  import  HomeIcons from './components/Icons'
  import  HomeRecommed from './components/Recommed'
  import  HomeWeekend from './components/Weekend'
  import axios from 'axios'
  export default {
    name: "Home",
    data () {
      return {
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
