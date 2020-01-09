<template>
  .content
    .displayPage
      <!-- List of backgrounds -->
      .displayList
        fieldset.displayContent
          legend
            h3 Backgrounds
          template(v-for="background in backgroundList")
            router-link(:to="{ path: '/background/' + background.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ background.name }}
      
      <!-- Render content -->
      template(v-if="body")
        .display(v-for="background in body")
          fieldset.displayContent
            <!-- Render name -->
            legend
              h1 {{ background.name }}
            
            <!-- Go through each section -->
            div(v-for="section in background.sections")
              h3.displayHeading {{ section.name }}
              
              <!-- Go through each subsection -->
              div(v-for="subsection in section.body")
                template(v-if="subsection.style == 'table'")
                  h4.displayHeading {{ subsection.name }}
                    .level(v-if="subsection.level") [{{ subsection.level }}]
                  table
                    template(v-for="row in subsection.body")
                      tr
                        template(v-for="column in row")
                          td {{ column }}
                
                <!-- Simple render -->
                template(v-else)
                  h4.displayHeading {{ subsection.name }}
                    .level(v-if="subsection.level") [{{ subsection.level }}]
                  .displayText {{ subsection.body }}
      
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
        background: '',
        body: '',
        backgroundList: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query and render it
        this.query = this.$route.params.background.toLowerCase()
        var backgroundListJSON = require("../assets/backgrounds/backgroundlist.json")
        var backgroundJSON = require("../assets/backgrounds/" + this.query + ".json")
        
        // Check if there's a JSON file obtained from the query
        if(backgroundListJSON && backgroundJSON) {
          // Render the list of classes onto the page
          this.backgroundList = backgroundListJSON.backgrounds
          
          // Render the query onto the page
          this.background = backgroundJSON[this.query][0].name
          this.body = backgroundJSON[this.query]
        } else {
          // Not found rendering
          this.background = "Background not found!"
          this.body = "We couldn't find the background you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
