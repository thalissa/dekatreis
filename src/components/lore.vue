<template lang="pug">
  .content
    template(v-if="query")
      .lore(v-for="lore in loreContent")
        fieldset
            legend
              h1 {{ lore.name }}
            template(v-for="section in lore.sections")
              h3.loreHeading {{ section.name }}
              .loreText {{ section.body }}

    template(v-else)
      h2 Dekatreis Lore
      | Uwu!
</template>

<style lang="stylus" scoped>
  .lore
    margin-top 10px
  
  .loreHeading
    margin-bottom 0
    margin-top 10px
  
  .loreText
    font-size 10pt
  
  legend, fieldset
    display inline-block
    margin 0px
    white-space pre-line
  
  fieldset
    margin-top 20px
    display flex
    flex-grow 1
  
  legend, h1
    margin-bottom 0
    margin-top -15px

  details summary::-webkit-details-marker
    display none
  
  details summary
    cursor pointer
</style>

<script>
  export default {
      data: function () {
        return {
          query: '',
          lore: '',
          loreContent: ''
        }
      },
      created() {
          this.query = this.$route.query.lore.toLowerCase()
          var loreJSON = require("../assets/lore/" + this.query + ".json")
          
          if(loreJSON) {
            this.lore = loreJSON[this.query][0].name
            this.loreContent = loreJSON[this.query]
          } else {
            this.lore = "Lore not found!"
            this.body = "We couldn't find the lore you wanted. Maybe go back to the index?"
          }
      }
  }
</script>
