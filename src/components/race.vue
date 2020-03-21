<template>
  .content
    .displayPage
      <!-- List of races -->
      .displayList
        fieldset.displayContent
          legend
            template(v-if="system == 'dnd5e'")
              h3 Races
            template(v-else)
              h3 Ancestries and Heritages
          template(v-for="race in raceList")
            router-link(:to="{ path: '/race/' + system + '/' + race.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ race.name }}
      
      <!-- Render content -->
      template(v-if="race")
        .display(v-for="race in raceContent")
          fieldset.displayContent
          
              <!-- Render name -->
              legend
                h1 {{ race.name }}
                  .book {{ race.book }}
              
              <!-- Go through every section -->
              details(v-for="section in race.sections")
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
</style>

<script>
  export default {
    data: function () {
      return {
        query: '',
        system: '',
        race: '',
        raceContent: '',
        raceList: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query
        this.query = this.$route.params.race.toLowerCase()
        this.system = this.$route.params.system.toLowerCase()
        var raceJSON = require("../assets/races/" + this.system + "/" + this.query + ".json")
        var raceListJSON = require("../assets/races/" + this.system + "/" + "racelist.json")
        
        // Check if there's JSON files obtained from the query
        if(raceListJSON && raceJSON) {
          // Render the list of races on the sidebar
          this.raceList = raceListJSON.races
          
          // Render the query onto the page
          this.race = raceJSON[this.query][0].name
          this.raceContent = raceJSON[this.query]
        } else {
          // Not found rendering
          this.race = "Sorry, race not found!"
          this.raceContent = "We couldn't find the race you wanted. Maybe go back to the index?"
        }
      }
    }
  }
</script>
