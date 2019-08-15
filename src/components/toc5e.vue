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
                router-link(:to="{ path: 'rules', query: { rule: rule.name.replace(/[^a-z0-9]/gi,''), source: '5e' }}" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
                ul.sublist(v-for="section in rule.sections")
                  li {{ section.name }}
                    .book(v-if="section.book") {{ section.book }}
              template(v-else)
                router-link(:to="{ path: 'rules', query: { rule: rule.name.replace(/[^a-z0-9]/gi,''), source: '5e' }}" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
        .subtext MOD stands for "modified," and NEW dictates an entirely new rule.

      li.races
        h3 Races
        ul.section
          template(v-for="race in races")
            li.subsection
              template(v-if="race.subraces")
                details
                  summary
                    router-link(:to="{ path: 'races', query: { race: race.name, source: '5e' }}" tag="a" ) {{ race.name }}
                      .book {{ race.book }}
                  ul.sublist(v-for="subrace in race.subraces")
                    li {{ subrace.name }}
                      .book {{ subrace.book }}
              template(v-else)
                router-link(:to="{ path: 'races', query: { race: race.name, source: '5e' }}" tag="a" ) {{ race.name }}
                  .book {{ race.book }}
</template>

<style lang="stylus" scoped>
  @import "../assets/toc.styl"
  
  .subtext
    margin-top 5px
    font-size 9pt
    text-align center
</style>

<script>
  export default {
      data: function () {
        return {
          races: '',
          rules: ''
        }
      },
      created() {
          var raceJSON = require("../assets/races/5e/racelist.json")
          this.races = raceJSON["races"]
          
          var ruleJSON = require("../assets/rules/5e/rulelist.json")
          this.rules = ruleJSON["rules"]
      },
      methods: {

      }
  }
</script>
