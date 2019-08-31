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
      .bottom
        // .link
          // router-link(to="/toc5e") D&D 5e
        .link
          router-link(to="tocpf2") Pathfinder 2
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
