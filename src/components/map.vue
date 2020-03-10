<template>
  .content
    .map
      img(:src="require('../assets/img/worldmap.jpg')")
</template>

<style lang="stylus" scoped>
  .map img
    max-width 100%
    max-height 100%
</style>

<script>
  export default {
    props: [ ]
  };
</script>
