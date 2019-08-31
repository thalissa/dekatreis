<template lang="pug">
  .content
    h2 Table of Contents
    ul.toc
      li.rules
        h3 Houserules
        ul.section
          template(v-for="rule in rules")
            li.subsection
              template(v-if="rule.sections")
                router-link(:to="{ path: 'rules', query: { rule: rule.name.replace(/[^a-z0-9]/gi,''), source: 'pf2' }}" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
                ul.sublist(v-for="section in rule.sections")
                  li {{ section.name }}
                    .book(v-if="section.book") {{ section.book }}
              template(v-else)
                router-link(:to="{ path: 'rules', query: { rule: rule.name.replace(/[^a-z0-9]/gi,''), source: 'pf2' }}" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}

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
      li.backgrounds
        h3 Backgrounds
        ul.section
          template(v-for="background in backgrounds")
            li.subsection
              router-link(:to="{ path: 'backgrounds', query: { background: background.name, source: 'pf2' }}" tag="a" ) {{ background.name }}
      li.classes
        h3 Classes
        ul.section
          template(v-for="tabletopClass in classes")
            li.subsection
              router-link(:to="{ path: 'classes', query: { tabletopClass: tabletopClass.name, source: 'pf2' }}" tag="a" ) {{ tabletopClass.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/toc.styl"
</style>

<script>
  export default {
      data: function () {
        return {
          races: '',
          classes: '',
          rules: '',
          backgrounds: ''
        }
      },
      created() {
          var raceJSON = require("../assets/races/pf2/racelist.json")
          this.races = raceJSON["races"]
          
          var classJSON = require("../assets/classes/pf2/classlist.json")
          this.classes = classJSON["classes"]
          
          var ruleJSON = require("../assets/rules/pf2/rulelist.json")
          this.rules = ruleJSON["rules"]

          var backgroundJSON = require("../assets/backgrounds/pf2/backgroundlist.json")
          this.backgrounds = backgroundJSON["backgrounds"]
      },
      methods: {

      }
  }
</script>
