<template lang="pug">
  .content
    template(v-if="query")
      .display(v-for="rule in ruleContent")
        fieldset
            legend
              h1 {{ rule.name }}
                .book {{ rule.book }}
            div(v-for="section in rule.sections")
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
                template(v-else)
                  h4.displayHeading {{ subsection.name }}
                    .book {{ subsection.book }}
                  .displayText {{ subsection.body }}

    template(v-else)
      h2 rules
      | Uwu!
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/display.styl"
</style>

<script>
  export default {
      data: function () {
        return {
          query: '',
          rule: '',
          source: '',
          ruleContent: ''
        }
      },
      created() {
          this.query = this.$route.query.rule.toLowerCase()
          this.source = this.$route.query.source.toLowerCase()
          var ruleJSON = require("../assets/rules/" + this.source + "/" + this.query + ".json")
          
          if(ruleJSON) {
            this.rule = ruleJSON[this.query][0].name
            this.ruleContent = ruleJSON[this.query]
          } else {
            this.rule = "rule not found!"
            this.body = "We couldn't find the rule you wanted. Maybe go back to the index?"
          }
      }
  }
</script>
