<template>
  .content
    .tocHead
      h2 Dungeons and Dragons 5e
    
    ul.toc
      <!-- Rules ToC -->
      li.tocHeader
        h3 Houserules
        
        <!-- Render content -->
        ul.section
          template(v-for="rule in rules")
            li.subsection
              template(v-if="rule.sections")
                router-link(:to="{ path: '/rule/dnd5e/' + rule.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
                ul.sublist(v-for="section in rule.sections")
                  li {{ section.name }}
                    .book(v-if="section.book") {{ section.book }}
              template(v-else)
                router-link(:to="{ path: '/rule/dnd5e/' + rule.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ rule.name }}
                  .book(v-if="rule.book") {{ rule.book }}
      
      <!-- Race ToC -->
      li.tocHeader
        h3 Ancestries and Heritages
        
        <!-- Render content -->
        ul.section
          template(v-for="race in races")
            li.subsection
              router-link(:to="{ path: '/race/dnd5e/' + race.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ race.name }}
                .book {{ race.book }}
      
      <!-- Backgrounds ToC -->
      li.tocHeader
        h3 Backgrounds
        
        <!-- Render content -->
        ul.section
          template(v-for="background in backgrounds")
            li.subsection
              router-link(:to="{ path: '/background/dnd5e/' + background.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ background.name }}
      
      <!-- Classes ToC -->
      li.tocHeader
        h3 Classes
        
        <!-- Render content -->
        ul.section
          template(v-for="tabletopClass in classes")
            li.subsection
              router-link(:to="{ path: '/class/dnd5e/' + tabletopClass.name.replace(/[^a-z0-9]/gi,'') }" tag="a") {{ tabletopClass.name }}
      
      <!-- Equipment ToC -->
      li.tocHeader
        h3 Equipment
        
        <!-- Render content -->
        ul.section
          template(v-for="itemset in equipment")
            li.subsection
              router-link(:to="{ path: '/equipment/dnd5e/' + itemset.name.replace(/[^a-z0-9]/gi,'') }" tag="a") {{ itemset.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/components/toc.styl"
</style>

<script>  
  export default {
    props: [ ],
    data: function () {
      return {
        races: '',
        classes: '',
        rules: '',
        backgrounds: '',
        equipment: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get classes and render them in the page's variable
        var classJSON = require("../assets/classes/dnd5e/classlist.json")
        this.classes = classJSON["classes"]
        
        // Get races and render them in the page's variable
        var raceJSON = require("../assets/races/dnd5e/racelist.json")
        this.races = raceJSON["races"]
        
        // Get rules and render them in the page's variable
        var ruleJSON = require("../assets/rules/dnd5e/rulelist.json")
        this.rules = ruleJSON["rules"]
        
        // Get backgrounds and render them in the page's variable
        var backgroundJSON = require("../assets/backgrounds/dnd5e/backgroundlist.json")
        this.backgrounds = backgroundJSON["backgrounds"]
        
        // Get backgrounds and render them in the page's variable
        var equipmentJSON = require("../assets/equipment/dnd5e/equipmentlist.json")
        this.equipment = equipmentJSON["equipment"]
      }
    }
  }
</script>
