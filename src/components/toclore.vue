<template lang="pug">
  .content
    h2 Table of Contents
    ul.toc
      ul.section
        template(v-for="lore in loreList")
          li.subsection
            router-link(:to="{ path: 'lore', query: { lore: lore.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ lore.name }}
            ul.sublist(v-for="subsection in lore.sublist")
              li {{ subsection.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/toc.styl"
</style>

<script>
  export default {
      data: function () {
        return {
          loreList: ''
        }
      },
      created() {
          var loreJSON = require("../assets/lorelist.json")
          this.loreList = loreJSON["lore"]
      },
      methods: {

      }
  }
</script>
