<template>
  .content
    .headerLinks
      .link
        router-link(:to="{ path: '/lore/Dekatreis' }" tag="a" ) Dekatreis
      .link
        router-link(:to="{ path: '/lore/Sarille' }" tag="a" ) Sarille
      .link
        router-link(:to="{ path: '/lore/Totara' }" tag="a" ) Totara
      .link
        router-link(:to="{ path: '/lore/AzorianEmpire' }" tag="a" ) Azorian Empire
      .link
        router-link(:to="{ path: '/lore/Azoranthium' }" tag="a" ) Azoranthium
      .link
        router-link(:to="{ path: '/lore/Akiira' }" tag="a" ) Akiira
    
    hr
    
    .map
      img(:src="require('../assets/img/worldmap.jpg')")
</template>

<style lang="stylus" scoped>
  .map img
    max-width 100%
    max-height 100%
  
  .headerLinks
    display flex
    flex-direction row
    flex-grow 1
    flex-wrap wrap
    justify-content center
  
  .headerLinks .link
    font-size 17px
    margin-left 10px
    margin-right 10px
</style>

<script>
  export default {
    props: [ ]
  };
</script>
