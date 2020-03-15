<template>
  .body
    #sidebar
      .head
        router-link(to="/") Dekatreis
      
      .site
        .smallerhead Site Links
        .link
          router-link(to="/toclore") Dekatreis Lore
        .link
          router-link(to="/map") World Map
        .link
          router-link(to="/tocpf2") Pathfinder 2
        .link
          router-link(to="/tocdnd5e") Dungeons & Dragons 5e
      
      .support
        .smallerhead Supportive Links
        .link
          a(href="https://ko-fi.com/thalissa" target="_blank") Ko-Fi
        .link
          a(href="https://github.com/thalissa/dekatreis" target="_blank") GitHub
        .link
          a(href="https://twitter.com/ThalissaRemnant" target="_blank") Twitter
      
      .license
        .smallerhead License
        .link
          a(href="https://github.com/thalissa/dekatreis/blob/master/LICENSE" target="_blank") GNU GPL v3.0
        .smalltext TL;DR You can use my homebrew and modify it as you like, just don't sell it!
      
    #sidebarToggle
      #arrow

    .view
      keep-alive
        router-view(:key="$route.fullPath")
      
</template>

<style lang="stylus">
  @import "../assets/styling/main.styl"
  @import "../assets/styling/themes/default.styl"
  @import "../assets/styling/components/sidebar.styl"
  
  .smalltext
    font-size 8pt
</style>

<script>
  require('../assets/img/favicon.ico')
  
  export default {
    mounted(){
      document.getElementById("sidebarToggle").addEventListener("click", this.toggleSidebar)
    },
    methods: {
      toggleSidebar: function(){
        var sidebar = document.getElementById("sidebar")
        var sidebarToggle = document.getElementById("sidebarToggle")
        
        if (sidebar.style.display === "none") {
          sidebar.style.display = "flex"
          sidebarToggle.className = ""
        } else {
          sidebar.style.display = "none"
          sidebarToggle.className = "closed"
        }
      }
    }
  };
</script>
