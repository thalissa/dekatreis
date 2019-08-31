<template lang="pug">
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
          router-link(to="tocpf2") Pathfinder 2
      .middle
        .link
          a(href="https://www.patreon.com/thalissa" target="_blank") Patreon
        .link
          a(href="https://github.com/thalissa/dekatreis" target="_blank") GitHub
    .view
      router-view(:key="$route.fullPath")
</template>

<style lang="stylus">
  @import "../assets/styling/main.styl"
</style>

<script>
  export default {
      props: [ ]
  };
</script>
