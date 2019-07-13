<template lang="pug">
  .content
    h2 Table of Contents
    ul.toc
      li
        h3 Basic Rules
        ul.section
          li.subsection
            h5 Death Saving Throws
            ul.sublist
              router-link(:to="{ path: 'rules', query: { rule: 'deathsave', source: 'pf2' }}" tag="li") Death Saving Throws      

      li.races
        h3 Races
        ul.section
          template(v-for="race in races")
            li.subsection
              template(v-if="race.subraces")
                details
                  summary
                    router-link(:to="{ path: 'races', query: { race: race.name, source: 'pf2' }}" tag="a" ) {{ race.name }}
                      .book {{ race.book }}
                  ul.sublist(v-for="subrace in race.subraces")
                    li {{ subrace.name }}
                      .book {{ subrace.book }}
              template(v-else)
                router-link(:to="{ path: 'races', query: { race: race.name, source: 'pf2' }}" tag="a" ) {{ race.name }}
                  .book {{ race.book }}
</template>

<style lang="stylus" scoped>
  @import "../assets/toc.styl"
</style>

<script>
  export default {
      data: function () {
        return {
          races: ''
        }
      },
      created() {
          var raceJSON = require("../assets/races/pf2/racelist.json")
          this.races = raceJSON["races"]
      },
      methods: {

      }
  }
</script>
