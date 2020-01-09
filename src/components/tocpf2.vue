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
                router-link(:to="{ path: 'rules', query: { rule: rule.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
                ul.sublist(v-for="section in rule.sections")
                  li {{ section.name }}
                    .book(v-if="section.book") {{ section.book }}
              template(v-else)
                router-link(:to="{ path: 'rules', query: { rule: rule.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
      li.races
        h3 Ancestries & Heritages
        ul.section
          template(v-for="race in races")
            li.subsection
              template(v-if="race.subraces")
                details
                  summary
                    router-link(:to="{ path: 'races', query: { race: race.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ race.name }}
                      .book {{ race.book }}
                  ul.sublist(v-for="subrace in race.subraces")
                    li {{ subrace.name }}
                      .book {{ subrace.book }}
              template(v-else)
                router-link(:to="{ path: 'races', query: { race: race.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ race.name }}
                  .book {{ race.book }}
      li.backgrounds
        h3 Backgrounds
        ul.section
          template(v-for="background in backgrounds")
            li.subsection
              router-link(:to="{ path: 'backgrounds', query: { background: background.name.replace(/[^a-z0-9]/gi,'') }}" tag="a" ) {{ background.name }}
      li.classes
        h3 Classes
        ul.section
          template(v-for="tabletopClass in classes")
            li.subsection
              router-link(:to="{ path: '/class/' + tabletopClass.name.replace(/[^a-z0-9]/gi,'') }" tag="a") {{ tabletopClass.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/toc.styl"
</style>

<script>  
  export default {
    props: [ ],
    data: function () {
      return {
        races: '',
        classes: '',
        rules: '',
        backgrounds: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        var classJSON = require("../assets/classes/classlist.json")
        this.classes = classJSON["classes"]
        
        var raceJSON = require("../assets/races/racelist.json")
        this.races = raceJSON["races"]
        
        var ruleJSON = require("../assets/rules/rulelist.json")
        this.rules = ruleJSON["rules"]

        var backgroundJSON = require("../assets/backgrounds/backgroundlist.json")
        this.backgrounds = backgroundJSON["backgrounds"]
      }
    }
  }
</script>
