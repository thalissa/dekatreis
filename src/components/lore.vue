<template lang="pug">
  .content
    template(v-if="query")
      .display(v-for="lore in loreContent")
        fieldset.displayContent
            legend
              h1 {{ lore.name }}
            template(v-for="section in lore.sections")
              h3.displayHeading {{ section.name }}
              .displayText {{ section.body }}

    template(v-else)
      h2 Dekatreis Lore
      | Uwu!
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/display.styl"
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
        this.query = this.$route.params.lore.toLowerCase()
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
