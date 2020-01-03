<template>
  .content
    .displayPage
      template(v-if="equipment")
        .display
          fieldset.displayContent
            <!-- Render name and description -->
            legend
              h1
                | {{ name }} Equipment
            .description {{ description }}
            
            <!-- Render content -->
            table
              tr
                td Name
                td Level
                td Price
                td Details
                td Bulk
              template(v-for="row in equipment")
                tr
                  td {{ row.name }}
                  td {{ row.level }}
                  td {{ row.price }}
                  td {{ row.body }}
                  td {{ row.bulk }}
      
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
