<template lang="pug">
  .content
    .displayPage
      .displayList
        fieldset
          legend
            h3 Ancestries & Heritages
          template(v-for="race in raceList")
            router-link(:to="{ path: 'races', query: { race: race.name, source: 'pf2' }}" tag="a" ) {{ race.name }}

      template(v-if="raceContent")
        .display(v-for="race in raceContent")
          fieldset
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
          fieldset
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
          source: '',
          raceContent: '',
          raceList: ''
        }
      },
      created() {
          this.query = this.$route.query.race.toLowerCase()
          this.source = this.$route.query.source.toLowerCase()
          var raceListJSON = require("../assets/races/" + this.source + "/racelist.json")
          var raceJSON = require("../assets/races/" + this.source + "/" + this.query + ".json")
          
          if(raceListJSON) {
            this.raceList = raceListJSON.races
          }
          
          if(raceJSON) {
            this.race = raceJSON[this.query][0].name
            this.raceContent = raceJSON[this.query]
          }
      }
  }
</script>
