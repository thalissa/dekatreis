<template lang="pug">
  .content
    h2 Table of Contents
    ul.toc
      li.races
        h3 Ancestries & Heritages
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
      li.classes
        h3 Classes
        ul.section
          template(v-for="tabletopClass in classes")
            li.subsection
              router-link(:to="{ path: 'classes', query: { tabletopClass: tabletopClass.name, source: 'pf2' }}" tag="a" ) {{ tabletopClass.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/toc.styl"
</style>

<script>
  export default {
      data: function () {
        return {
          races: '',
          classes: ''
        }
      },
      created() {
          var raceJSON = require("../assets/races/pf2/racelist.json")
          this.races = raceJSON["races"]
          
          var classJSON = require("../assets/classes/pf2/classlist.json")
          this.classes = classJSON["classes"]
      },
      methods: {

      }
  }
</script>
