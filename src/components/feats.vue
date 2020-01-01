<template lang="pug">
  .content
    .displayPage
      template(v-if="feats")
        .display
          fieldset.displayContent
            <!-- Render name & link back to original class -->
            legend
              h1
                router-link(:to="{ path: '/class/' + name }" tag="a") {{ name }}
                |  Feats
            
            <!-- Render content -->
            table
              tr
                td Name
                td Level
                td Traits
                td Prerequisites
                td Details
              template(v-for="row in feats")
                tr
                  td {{ row.name }}
                  td {{ row.level }}
                  td {{ row.traits.join(", ") }}
                  td {{ row.prerequisites.join(", ") }}
                  td {{ row.body }}
      
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
  
  .level
    display inline-flex
    margin-left 5px
  
  table
    width 100%
  
  td
    min-width 150px
    text-align left
  
  table td:nth-child(2)
    min-width 50px
    text-align center
</style>

<script>
  export default {
    data: function () {
      return {
        feats: {},
        query: '',
        name: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query and render it
        this.query = this.$route.params.feat.toLowerCase()
        var featJSON = require("../assets/classes/" + this.query + ".json")
        
        // Check if there's a JSON file obtained from the query
        if(featJSON) {
          // Render the query onto the page
          this.name = featJSON.name
          this.feats = featJSON.feats
        } else {
          // Not found rendering
          this.lore = "Lore not found!"
          this.body = "We couldn't find the lore you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
