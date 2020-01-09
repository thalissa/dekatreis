<template>
  .content
    .displayPage
      template(v-if="equipment")
        .display
          fieldset.displayContent
            <!-- Render name and description -->
            legend
              h1
                | {{ name }}
            .description(v-for="row in description")
              display.markdownRender {{ row }}
            
            <!-- Render content -->
            table
              tr
                td Basic Information
                td Traits
                td Details
              template(v-for="row in equipment")
                tr
                  td.info
                    .title {{ row.name}}
                    .details
                      .row(v-if="row.price")
                        .cell Price
                        .cell {{ row.price }}
                      .row(v-if="row.damage")
                        .cell Damage
                        .cell {{ row.damage }}
                      .row(v-if="row.bulk")
                        .cell Bulk
                        .cell {{ row.bulk }}
                      .row(v-if="row.level")
                        .cell Level
                        .cell {{ row.level }}
                      .row(v-if="row.usage")
                        .cell Usage
                        .cell {{ row.usage }}
                  td(v-if="row.traits")
                    .row(v-for="trait in row.traits")
                      .trait {{ trait }}
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
  
  table
    width 100%
  
  tr
    vertical-align top
  
  td
    min-width 150px
    text-align left

  .row
    display table-row
  
  .trait
    display table-cell
    width 100%
    margin 0
    min-width 50px
    
  .cell
    display table-cell
    width 100%
    margin 0
    min-width 50px
    white-space nowrap
  
  .title
      background-color #f5f5f5
      text-align center
      white-space nowrap
      padding-left 5px
      padding-right 5px
</style>

<script>
  export default {
    data: function () {
      return {
        equipment: {},
        description: '',
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
        this.query = this.$route.params.itemset.toLowerCase()
        var equipmentJSON = require("../assets/equipment/" + this.query + ".json")
        
        // Check if there's a JSON file obtained from the query
        if(equipmentJSON) {
          // Render the query onto the page
          this.name = equipmentJSON.name
          this.description = equipmentJSON.description
          this.equipment = equipmentJSON.equipment
        } else {
          // Not found rendering
          this.name = "Equipment not found!"
          this.equipment = "We couldn't find the equipment you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
