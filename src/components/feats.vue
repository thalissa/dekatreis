<template>
  .content
    .displayPage
      template(v-if="items")
        .display
          fieldset.displayContent
            <!-- Render name & link back to original class -->
            legend
              h1
                | {{ featureName }} (
                router-link(:to="{ path: '/class/' + system + '/' + className.replace(/[^a-z0-9]/gi,'') }" tag="a") {{ className }}
                | )
            
            <!-- Render content -->
            table
              template(v-for="row in items")
                tr
                  template(v-for="item in row")
                    td {{ item }}
      
      <!-- Error template -->
      template(v-else)
        .display
          fieldset.displayContent
            legend
              h2 This entry does not exist!
            | If you've found this page directly linked somewhere, please message Thalissa to fix it!
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/components/display.styl"
  
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
        items: {},
        query: '',
        system: '',
        feature: '',
        featureName: '',
        className: '',
        name: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query and render it
        this.query = this.$route.params.class.toLowerCase().replace(/[^a-z0-9]/gi,'')
        this.feature = this.$route.params.feature
        this.system = this.$route.params.system.toLowerCase()
        var featureJSON = require("../assets/classes/" + this.system + "/" + this.query + ".json")
        
        // Check if there's a JSON file obtained from the query
        if(featureJSON) {
          // Render the query onto the page
          this.className = featureJSON.name
          this.featureName = featureJSON.additionalContent[0].name
          this.items = featureJSON.additionalContent[0].items
        } else {
          // Not found rendering
          this.feature = "Feature not found!"
          this.body = "We couldn't find the feature you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
