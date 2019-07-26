<template lang="pug">
  .content
    template(v-if="query")
      .rule(v-for="rule in ruleContent")
        fieldset
            legend
              h1 {{ rule.name }}
                .book {{ rule.book }}
            details(v-for="section in rule.sections")
              summary
                h3.ruleHeading {{ section.name }}
                  .book {{ section.book }}
              div(v-for="subsection in section.body")
                template(v-if="subsection.style == 'table'")
                  summary
                    h4.ruleHeading {{ subsection.name }}
                      .book {{ subsection.book }}
                  table
                    template(v-for="row in subsection.body")
                      tr
                        template(v-for="column in row")
                          td {{ column }}
                template(v-else)
                  h4.ruleHeading {{ subsection.name }}
                    .book {{ subsection.book }}
                  .ruleText {{ subsection.body }}

    template(v-else)
      h2 rules
      | Uwu!
</template>

<style lang="stylus" scoped>
  .rule
    margin-top 10px
  
  .ruleHeading
    margin-bottom 0
    margin-top 10px
  
  .ruleText
    font-size 10pt
    
  .book
    display inline-block
    font-size 7pt
    margin-left 5px
  
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
