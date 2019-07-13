<template lang="pug">
  .content
    h2 Map of Dekatreis
    .map
      img(:src="require('../assets/img/worldmap.jpg')")
</template>

<style lang="stylus" scoped>
  h2
    text-align center

  .map
    flex-grow 1
    text-align center

  img
    flex-shrink 1
    max-width 90%
</style>

<script>
  export default {
      props: [ ]
  };
</script>
