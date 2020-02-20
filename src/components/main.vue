<template>
  .body
    .header
      .top
        .mainLink
          router-link(to="/") Welcome to Dekatreis
      .middle
        .link
          router-link(to="/toclore") Dekatreis Lore
        .link
          router-link(to="/map") World Map
        .link
          router-link(to="/tocpf2") Pathfinder 2
      .middle
        .link
          a(href="https://ko-fi.com/thalissa" target="_blank") Ko-Fi
        .link
          a(href="https://github.com/thalissa/dekatreis" target="_blank") GitHub
        .link
          a(href="https://twitter.com/ThalissaRemnant" target="_blank") Twitter
    .view
      keep-alive
        router-view(:key="$route.fullPath")
      
</template>

<style lang="stylus">
  @import "../assets/styling/main.styl"
</style>

<script>
  require('../assets/img/favicon.ico')
  
  export default {
    props: [ ]
  };
</script>
