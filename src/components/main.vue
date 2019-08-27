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
  html
    width 100%
    height 100
    background #efe4f5
    font-family BookInsanity
    font-size 11pt
  
  body
    padding 20px
    border-radius 25px
    border 2px #f5f5f5 solid
    background #ccc
    color #3a3f51

  @font-face
    font-family BookInsanity
    src url(../assets/Bookinsanity.otf)
  
  h1, h2, h3, h4, h5, h6
    color #4E2A84
    margin-block-end .2em
  
  h6
    margin-top 0px
    margin-bottom 0px
  
  h3
    border-bottom 2px solid #c9ad6a

  a, a:visited
    color #813ce8
    cursor pointer
    text-decoration none

  a:hover
    text-decoration underline

  .app
    display flex

  .view
    flex-grow 1

  .mainLink a, .link a
    padding 5px

  .header
    display flex
    flex-direction row
    justify-content center

  .header .link, .header .mainLink
    align-self baseline
    margin-left 5px
    margin-right 5px

  .header .mainLink
    font-size 18pt
  
  .header
    display flex
    flex-direction column
    justify-content center

  .top, .middle, .bottom
    display flex
    justify-content center
    flex-direction row
    margin 5px

  tr:first-child
    background-color #f5f5f5
    font-size 17pt
    text-align center
  
  tr, td
    border 1px #4E2A84 solid
    padding 3px
    font-size 10pt
  
  table
    margin-top 10px
    white-space pre-line
</style>

<script>
  export default {
      props: [ ]
  };
</script>
