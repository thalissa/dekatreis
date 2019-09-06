<template lang="pug">
  .content
    .displayPage
      .displayList
        fieldset.displayContent
          legend
            h3 Classes
          template(v-for="tabletopClass in classList")
            router-link(:to="{ path: 'classes', query: { tabletopClass: tabletopClass.name, source: 'pf2' }}" tag="a" ) {{ tabletopClass.name }}

      template(v-if="classContent")
        .display(v-for="tabletopClass in classContent")
          fieldset.displayContent
            legend
              h1 {{ tabletopClass.name }}
            div(v-for="section in tabletopClass.sections")
              details
                summary
                  h3.displayHeading {{ section.name }}
                div(v-for="subsection in section.body")
                  template(v-if="subsection.style == 'table'")
                    h4.displayHeading {{ subsection.name }}
                      .level(v-if="subsection.level") [{{ subsection.level }}]
                    table
                      template(v-for="row in subsection.body")
                        tr
                          template(v-for="column in row")
                            td {{ column }}
                  template(v-else)
                    h4.displayHeading {{ subsection.name }}
                      .level(v-if="subsection.level") [{{ subsection.level }}]
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
  
  .level
    display inline-flex
    margin-left 5px
  
  table
    width 100%
  
  td
    min-width 200px
    text-align left
</style>

<script>
  export default {
      data: function () {
        return {
          query: '',
          tabletopClass: '',
          source: '',
          classContent: '',
          classList: ''
        }
      },
      created() {
          this.query = this.$route.query.tabletopClass.toLowerCase()
          this.source = this.$route.query.source.toLowerCase()
          var classListJSON = require("../assets/classes/" + this.source + "/classlist.json")
          var classJSON = require("../assets/classes/" + this.source + "/" + this.query + ".json")
          
          if(classListJSON) {
            this.classList = classListJSON.classes
          }
          
          if(classJSON) {
            this.tabletopClass = classJSON[this.query][0].name
            this.classContent = classJSON[this.query]
          }
      }
  }
</script>
