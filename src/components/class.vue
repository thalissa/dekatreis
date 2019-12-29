<template lang="pug">
  .content
    .displayPage
      .displayList
        fieldset.displayContent
          legend
            h3 Other Classes
          template(v-for="tabletopClasses in tabletopClassList")
            router-link(:to="{ path: '/class/' + tabletopClasses.name }" tag="a") {{ tabletopClasses.name }}
        fieldset.displayContent
          legend
            h3 Additional Content
          router-link(:to="{ path: '/feats/' + tabletopClass.name }" tag="a") {{ tabletopClass.name }} Feats

      template(v-if="tabletopClass")
        .display
          fieldset.displayContent
            legend
              h1 {{ tabletopClass.name }}
              
            .displayText {{ tabletopClass.description }}
            
            details(v-for="section in tabletopClass.sections")
              summary
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
                template(v-else-if="subsection.style == 'details'")
                  details
                    summary
                      h4.displayHeading {{ subsection.name }}
                        .book {{ subsection.book }}
                    .displayText {{ subsection.body }}
                template(v-else)
                  h4.displayHeading {{ subsection.name }}
                    .book {{ subsection.book }}
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
  
  table
    width 100%
  
  td
    text-align left
  
  table td:first-child
    min-width 50px
    text-align center
</style>

<script>
  export default {
    props: [ ],
    data: function () {
      return {
        query: '',
        tabletopClass: {},
        tabletopClassList: []
      }
    },
    beforeMount() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        this.query = this.$route.params.class.toLowerCase()
        var tabletopClassListJSON = require("../assets/classes/classlist.json")
        this.tabletopClass = require("../assets/classes/" + this.query + ".json")
        
        if(tabletopClassListJSON) {
          this.tabletopClassList = tabletopClassListJSON.classes
        }
      }
    }
  }
</script>
