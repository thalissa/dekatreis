<template>
  .content
    <!-- Render content -->
    template(v-if="lore")
      .display(v-for="lore in loreContent")
        fieldset.displayContent
            
            <!-- Render name -->
            legend
              h1 {{ lore.name }}
            
            <!-- Go through each section -->
            template(v-for="section in lore.sections")
              h3.displayHeading {{ section.name }}
              .displayText {{ section.body }}
              
    <!-- Error template -->
    template(v-else)
      .display
        fieldset.displayContent
          legend
            h2 This entry does not exist!
          | If you've found this page directly linked somewhere, please message Thalissa to fix it!
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
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query
        this.query = this.$route.query.lore.toLowerCase()
        var loreJSON = require("../assets/lore/" + this.query + ".json")
        
        // Check if there's a JSON file obtained from the query
        if(loreJSON) {
          // Render the query onto the page
          this.lore = loreJSON[this.query][0].name
          this.loreContent = loreJSON[this.query]
        } else {
          // Not found rendering
          this.lore = "Lore not found!"
          this.body = "We couldn't find the lore you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
