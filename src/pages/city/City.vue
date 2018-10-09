<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabrt></city-alphabrt>
  </div>
</template>

<script>
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
        }
    }

</script>

<style lang="stylus" scoped>

</style>
