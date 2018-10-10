  <template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabrt :cities="cities" @change="handLeletterChange"></city-alphabrt>
  </div>
</template>

<script>
  import  axios from 'axios'
  import  CityHeader  from './compontents/Header'
  import  CitySearch  from './compontents/Search'
  import  CityList  from './compontents/List'
  import  CityAlphabrt  from './compontents/Alphabrt'
  export default {
        name: "City",
        components: {
          CityHeader,
          CitySearch,
          CityList,
          CityAlphabrt
        },
    data () {
          return {
              cities: {},
              hotCities: [],
              letter:''
      }
    },
      methods: {
        getCityInfo (){
          axios.get('/api/city.json')
            .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
          console.log(res);
          res =res.data;
          console.log(res);
          if(res.ret && res.data){
            const  data =res.data;
            this.cities = data.cities;
            this.hotCities =data.hotCities
          }
        },
        handLeletterChange (letter){
          this.letter =letter

        }
      },
      mounted (){
          this.getCityInfo();
      }
    }

</script>

<style lang="stylus" scoped>

</style>
