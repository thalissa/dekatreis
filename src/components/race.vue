<template lang="pug">
  .content
    .displayPage
      .displayList
        fieldset.displayContent
          legend
            h3 Ancestries & Heritages
          template(v-for="race in raceList")
            router-link(:to="{ path: 'races', query: { race: race.name }}" tag="a" ) {{ race.name }}

      template(v-if="race")
        .display(v-for="race in raceContent")
          fieldset.displayContent
              legend
                h1 {{ race.name }}
                  .book {{ race.book }}
              details(v-for="section in race.sections")
                summary
                  h3.displayHeading {{ section.name }}
                    .book {{ section.book }}
                div(v-for="subsection in section.body")
                  template(v-if="subsection.style == 'table'")
                    summary
                      h4.displayHeading {{ subsection.name }}
                        .book {{ subsection.book }}
                    table
                      template(v-for="row in subsection.body")
                        tr
                          template(v-for="column in row")
                            td {{ column }}
                  template(v-else-if="subsection.style == 'details'")
                    details
                      summary
                        h4.displayHeading {{ subsection.name }}
                          .book {{ subsection.book }}
                      .displayText {{ subsection.body }}
                  template(v-else)
                    h4.displayHeading {{ subsection.name }}
                      .book {{ subsection.book }}
                    .displayText {{ subsection.body }}
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
        this.query = this.$route.query.race.toLowerCase()
        var raceJSON = require("../assets/races/" + this.query + ".json")
        var raceListJSON = require("../assets/races/racelist.json")
        
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
