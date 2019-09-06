<template lang="pug">
  .content
    .displayPage
      .displayList
        fieldset.displayContent
          legend
            h3 Backgrounds
          template(v-for="background in backgroundList")
            router-link(:to="{ path: 'backgrounds', query: { background: background.name.replace(/[^a-z0-9]/gi,''), source: 'pf2' }}" tag="a" ) {{ background.name }}

      template(v-if="backgroundContent")
        .display(v-for="background in backgroundContent")
          fieldset.displayContent
            legend
              h1 {{ background.name }}
            div(v-for="section in background.sections")
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
</style>

<script>
  export default {
      data: function () {
        return {
          query: '',
          background: '',
          source: '',
          backgroundContent: '',
          backgroundList: ''
        }
      },
      created() {
          this.query = this.$route.query.background.toLowerCase()
          this.source = this.$route.query.source.toLowerCase()
          var backgroundListJSON = require("../assets/backgrounds/" + this.source + "/backgroundlist.json")
          var backgroundJSON = require("../assets/backgrounds/" + this.source + "/" + this.query + ".json")
          
          if(backgroundListJSON) {
            this.backgroundList = backgroundListJSON.backgrounds
          }
          
          if(backgroundJSON) {
            this.background = backgroundJSON[this.query][0].name
            this.backgroundContent = backgroundJSON[this.query]
          }
      }
  }
</script>
