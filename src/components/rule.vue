<template>
  .content
    <!-- Render content -->
    template(v-if="rule")
      .display(v-for="rule in ruleContent")
        fieldset.displayContent
            <!-- Render name -->
            legend
              h1 {{ rule.name }}
                .book {{ rule.book }}
            
            <!-- Go through every section -->
            div(v-for="section in rule.sections")
              h3.displayHeading {{ section.name }}
                .book {{ section.book }}
              
              <!-- Render each subsection -->
              div(v-for="subsection in section.body")
                
                <!-- Render tables -->
                template(v-if="subsection.style == 'table'")
                  summary
                    h4.displayHeading {{ subsection.name }}
                      .book {{ subsection.book }}
                  table
                    template(v-for="row in subsection.body")
                      tr
                        template(v-for="column in row")
                          td {{ column }}
                
                <!-- Simple render -->
                template(v-else)
                  h4.displayHeading {{ subsection.name }}
                    .book {{ subsection.book }}
                  .displayText {{ subsection.body }}
    
    <!-- Error template -->
    template(v-else)
      .display
        fieldset.displayContent
          legend
            h2 This entry does not exist!
          | If you've found this page directly linked somewhere, please message Thalissa to fix it!
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/components/display.styl"
</style>

<script>
  export default {
    data: function () {
      return {
        query: '',
        system: '',
        rule: '',
        ruleContent: ''
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Get the query
        this.query = this.$route.params.rule.toLowerCase()
        this.system = this.$route.params.system.toLowerCase()
        var ruleJSON = require("../assets/rules/" + this.system + "/" + this.query + ".json")
        
        // Check if there's a JSON file obtained from the query
        if(ruleJSON) {
          // Render the query onto the page
          this.rule = ruleJSON[this.query][0].name
          this.ruleContent = ruleJSON[this.query]
        } else {
          // Not found rendering
          this.rule = "Rule not found!"
          this.body = "We couldn't find the rule you wanted.?"
        }
      }
    }
  }
</script>
