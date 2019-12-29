<template lang="pug">
  .content
    .displayPage
      template(v-if="featJSON")
        .display
          fieldset.displayContent
            legend
              h1
                router-link(:to="{ path: '/class/' + featJSON.name }" tag="a") {{ featJSON.name }}
                |  Feats
            table
              tr
                td Name
                td Level
                td Traits
                td Prerequisites
                td Details
              template(v-for="row in featJSON.feats")
                tr
                  td {{ row.name }}
                  td {{ row.level }}
                  td {{ row.traits.join(", ") }}
                  td {{ row.prerequisites.join(", ") }}
                  td {{ row.body }}
                    
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
    min-width 150px
    text-align left
  
  table td:nth-child(2)
    min-width 50px
    text-align center
</style>

<script>
  export default {
    data: function () {
      return {
        featJSON: {},
        query: ''
      }
    },
    beforeMount() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        this.query = this.$route.params.feat.toLowerCase()
        this.featJSON = require("../assets/classes/" + this.query + ".json")
      }
    }
  }
</script>
