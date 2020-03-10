<template>
  .content
    .displayPage
      <!-- List of classes -->
      .displayList
        fieldset.displayContent
          legend
            h3 Other Classes
          template(v-for="tabletopClasses in tabletopClassList")
            router-link(:to="{ path: '/class/' + tabletopClasses.name }" tag="a") {{ tabletopClasses.name }}
        <!-- Other content -->
        fieldset.displayContent
          legend
            h3 Additional Content
          router-link(:to="{ path: '/feat/' + tabletopClass.name }" tag="a") {{ tabletopClass.name }} Feats
      
      <!-- Render content -->
      template(v-if="tabletopClass")
        .display
          fieldset.displayContent
            <!-- Render class name -->
            legend
              h1 {{ tabletopClass.name }}
            <!-- Render class description -->
            | {{ tabletopClass.description }}
            
            <!-- Go through every section -->
            details(v-for="section in tabletopClass.sections")
              <!-- Topmost field for the summary -->
              summary
                h3.displayHeading {{ section.name }}
                  .book {{ section.book }}
              
              <!-- Render each section -->
              div(v-for="subsection in section.body")
                
                <!-- Rendering tables -->
                template(v-if="subsection.style == 'table'")
                  summary
                    h4.displayHeading {{ subsection.name }}
                      .book {{ subsection.book }}
                  table
                    template(v-for="row in subsection.body")
                      tr
                        template(v-for="column in row")
                          td {{ column }}
                
                <!-- Rendering content with "details" -->
                template(v-else-if="subsection.style == 'details'")
                  details
                    summary
                      h4.displayHeading {{ subsection.name }}
                        .book {{ subsection.book }}
                    .displayText {{ subsection.body }}
                
                <!-- Simple render -->
                template(v-else)
                  h4.displayHeading {{ subsection.name }}
                    .book {{ subsection.book }}
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
  @import "../assets/styling/components/display.styl"
  
  .level
    display inline-flex
  
  table
    width 100%
  
  td
    text-align left
  
  table td:first-child
    min-width 50px
    text-align center
</style>

<script>
  export default {
    props: [ ],
    data: function () {
      return {
        query: '',
        tabletopClass: {},
        tabletopClassList: []
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query and render it
        this.query = this.$route.params.class.toLowerCase()
        var tabletopClassJSON = require("../assets/classes/" + this.query + ".json")
        var tabletopClassListJSON = require("../assets/classes/classlist.json")
        
        // Check if there's a JSON file obtained from the query
        if(tabletopClassListJSON && tabletopClassJSON) {
          // Render the list of classes onto the page
          this.tabletopClassList = tabletopClassListJSON.classes
          
          // Render the query onto the page
          this.tabletopClass = require("../assets/classes/" + this.query + ".json")
        } else {
          // Not found rendering
          this.tabletopClass = "Class not found!"
          this.body = "We couldn't find the class you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
