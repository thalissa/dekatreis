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
        .link.smalltext
          a(rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/")
          span(xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type") Dekatreis
          |  and all content on this site is licensed under the 
          a(rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/") CCBY-NC 4.0 License
          br
          | TL;DR You can use my homebrew and modify it as you like, just don't sell it!
      
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
