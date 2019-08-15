<template lang="pug">
  .content
    template(v-if="query")
      .race(v-for="race in raceContent")
        fieldset
            legend
              h1 {{ race.name }}
                .book {{ race.book }}
            details(v-for="section in race.sections")
              summary
                h3.raceHeading {{ section.name }}
                  .book {{ section.book }}
              div(v-for="subsection in section.body")
                template(v-if="subsection.style == 'table'")
                  summary
                    h4.raceHeading {{ subsection.name }}
                      .book {{ subsection.book }}
                  table
                    template(v-for="row in subsection.body")
                      tr
                        template(v-for="column in row")
                          td {{ column }}
                template(v-else-if="subsection.style == 'details'")
                  details
                    summary
                      h4.raceHeading {{ subsection.name }}
                        .book {{ subsection.book }}
                    .raceText {{ subsection.body }}
                template(v-else)
                  h4.raceHeading {{ subsection.name }}
                    .book {{ subsection.book }}
                  .raceText {{ subsection.body }}

    template(v-else)
      h2 Races
      | Uwu!
</template>

<style lang="stylus" scoped>
  .race
    margin-top 10px
  
  .raceHeading
    margin-bottom 0
    margin-top 10px
  
  .raceText
    font-size 10pt
    
  .book
    display block
    font-size 9pt
  
  legend, fieldset
    display inline-block
    margin 0px
    white-space pre-line
  
  fieldset
    margin-top 20px
    display flex
    flex-grow 1
  
  legend, h1
    margin-bottom 0
    margin-top -15px

  details summary::-webkit-details-marker
    display none
  
  details summary
    cursor pointer
</style>

<script>
  export default {
      data: function () {
        return {
          query: '',
          race: '',
          source: '',
          raceContent: ''
        }
      },
      created() {
          this.query = this.$route.query.race.toLowerCase()
          this.source = this.$route.query.source.toLowerCase()
          var raceJSON = require("../assets/races/" + this.source + "/" + this.query + ".json")
          
          if(raceJSON) {
            this.race = raceJSON[this.query][0].name
            this.raceContent = raceJSON[this.query]
          } else {
            this.race = "Race not found!"
            this.body = "We couldn't find the race you wanted. Maybe go back to the index?"
          }
      }
  }
</script>
