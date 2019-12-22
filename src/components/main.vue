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
          router-link(to="/tocpf2") Pathfinder 2
      .middle
        .link
          a(href="https://www.patreon.com/thalissa" target="_blank") Patreon
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
  
  if(!client){
    //Connect to database through Stitch on load; speeds up rendering if the user is already connected.
    client = stitch.Stitch.initializeDefaultAppClient('dekatreis-kcvxl');
    const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('Dekatreis');
    client.auth.loginWithCredential(new stitch.AnonymousCredential())
    
    console.log("Had to re-fetch database connection.")
  }
</style>

<script>
  export default {
      props: [ ]
  };
</script>
