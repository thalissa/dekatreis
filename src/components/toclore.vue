<template lang="pug">
  .content
    h2 Table of Contents
    ul.toc
      ul.section
        template(v-for="lore in loreList")
          .loreHeader
            h3 {{ lore.name }}
            .loreBody
              template(v-for="section in lore.sections")
                li.subsection
                  router-link(:to="{ path: 'lore', query: { lore: section.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ section.name }}
                  ul.sublist(v-for="subsection in section.sublist")
                    li {{ subsection.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/toc.styl"
  
  .loreHeader
    display flex
    flex-direction column
    text-align center
    margin 15px
    margin-left auto
    margin-right auto
  
  .loreBody
    display flex
    flex-direction row
    text-align left
    flex-wrap wrap
</style>

<script>
  export default {
    data: function () {
      return {
        loreList: '',
        section: ''
      }
    },
    created() {
      var loreJSON = require("../assets/lore/lorelist.json")
      this.loreList = loreJSON["lore"]
    }
  }
</script>
